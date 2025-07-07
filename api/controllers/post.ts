import { db } from "../connect";
import jwt from "jsonwebtoken";
import type { Request, Response } from "express";
import moment from "moment";

export const getPosts = (req: Request, res: any) => {
  const userId = req.query.userId;
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err: any, userInfo: any) => {
    if (err) return res.status(403).json("Token is not valid!");

    const isUserIdProvided = typeof userId !== "undefined" && userId !== null && userId !== "";

    const q = isUserIdProvided
      ? `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE p.userId = ? ORDER BY p.createdAt DESC`
      : `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)
         LEFT JOIN relationships AS r ON (p.userId = r.followedUserId)
         WHERE r.followerUserId= ? OR p.userId = ?
         ORDER BY p.createdAt DESC`;

    const values = isUserIdProvided ? [userId] : [userInfo.id, userInfo.id];

    console.log("userId:", userId);
    console.log("userInfo.id:", userInfo.id);
    console.log("SQL:", q, values);

    db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};




export const addPost = (req: Request, res: any) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err: any, userInfo: any) => {
    if (err) return res.status(403).json("Token is not valid!");


    const q = "INSERT INTO posts  (`desc`, `img`, `createdAt`, `userId`, `tags`) VALUES (?, ?, ?, ?, ?)";

    const values = [
      req.body.desc,
      req.body.img,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
      req.body.tags,
    ]

    db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been created");
    });
  });
};
