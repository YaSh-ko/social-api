import { Request, Response } from "express";
import { db } from "../connect";
import jwt, { JwtPayload, VerifyErrors } from "jsonwebtoken";

// Описываем тип payload токена
interface CustomJwtPayload extends JwtPayload {
  id: number;
}

// Получение лайков
export const getLikes = (req: Request, res: Response) => {
  const postId = req.query.postId as string;
  if (!postId) {
    res.status(400).json("Post ID is required");
    return;
  }

  const q = "SELECT userId FROM likes WHERE postId = ?";

  db.query(q, [postId], (err: any, data: any[]) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.map(like => like.userId));
  });
};

// Добавление лайка
export const addLike = (req: Request, res: any) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err: VerifyErrors | null, decoded: string | JwtPayload | undefined) => {
    if (err || !decoded || typeof decoded !== "object" || !("id" in decoded)) {
      return res.status(403).json("Token is not valid!");
    }

    const userInfo = decoded as CustomJwtPayload;

    const q = "INSERT INTO likes (`userId`,`postId`) VALUES (?)";
    const values: [number, number] = [userInfo.id, req.body.postId];

    db.query(q, [values], (err: any, _data: any) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been liked.");
    });
  });
};

// Удаление лайка
export const deleteLike = (req: Request, res: any) => {
  const token = req.cookies?.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err: VerifyErrors | null, decoded: string | JwtPayload | undefined) => {
    if (err || !decoded || typeof decoded !== "object" || !("id" in decoded)) {
      return res.status(403).json("Token is not valid!");
    }

    const userInfo = decoded as CustomJwtPayload;
    const postId = req.query.postId as string;

    const q = "DELETE FROM likes WHERE `userId` = ? AND `postId` = ?";

    db.query(q, [userInfo.id, postId], (err: any, _data: any) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been disliked.");
    });
  });
};
