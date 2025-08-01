import { db } from "../connect";
import jwt from "jsonwebtoken";
import type { Request, Response } from "express";
import moment from "moment";

export const getEvents = (req: Request, res: any) => {
  const userId = req.query.userId;
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err: any, userInfo: any) => {
    if (err) return res.status(403).json("Token is not valid!");


    const q = `SELECT e.*, u.id AS userEventId, name, profilePic FROM events AS e JOIN users AS u ON (u.id = e.userEventId) WHERE e.userEventId = ? ORDER BY e.createdAt DESC`
      

    console.log("userId:", userId);
    console.log("userInfo.id:", userInfo.id);

    db.query(q, [userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};




export const addEvents = (req: Request, res: any) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err: any, userInfo: any) => {
    if (err) return res.status(403).json("Token is not valid!");


    const q = "INSERT INTO events  (`desc`, `img`, `createdAt`, `userEventId`, `tags`) VALUES (?, ?, ?, ?, ?)";
    const tagsString = JSON.stringify(req.body.tags);
    const values = [
      req.body.desc,
      req.body.img,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
      tagsString,
    ]

    db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been created");
    });
  });
};
