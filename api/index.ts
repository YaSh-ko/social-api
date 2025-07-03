// src/index.ts
import express from 'express';
// import userRoutes from './routes/users'
// import likeRoutes from './routes/likes'
// import commentRoutes from './routes/comments'
import postRoutes from './routes/posts'
import authRoutes from './routes/auth'
import cookieParser from 'cookie-parser';
import cors from "cors"

const app = express();
const PORT = 8080;

//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5174",
    credentials: true
}));
app.use(cookieParser());


app.use("/api/auth", authRoutes)
// app.use("/api/users", userRoutes)
// app.use("/api/likes", likeRoutes)
// app.use("/api/comments", commentRoutes)
app.use("/api/posts", postRoutes)

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});