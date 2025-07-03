import { db } from "../connect";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

export const getPosts = (req: Request, res: Response) => {

    console.log("cookies:", req.cookies);
    console.log("Is res.status a function?", typeof res.status === "function");
    console.log("Is res.json a function?", typeof res.json === "function");
    
    const token = req.cookies.accessToken;
    if(!token) {
        console.log("No token, returning 401");
        return res.status(401).json("Not logged in");
    }
    
    const q =  `SELECT p.*, u.id AS userID, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`

    db.query(q, (err, data)=> {
        if(err) return res.status(500).json(err);
        return res.status(200).json(data)
    })
};