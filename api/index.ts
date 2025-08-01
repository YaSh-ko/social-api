// src/index.ts
import express from 'express';
// import userRoutes from './routes/users'
import likeRoutes from './routes/likes'
import eventsRoutes from './routes/events'
// import commentRoutes from './routes/comments'
import postRoutes from './routes/posts'
import authRoutes from './routes/auth'
import cookieParser from 'cookie-parser';
import cors from "cors"
import multer from "multer"

const app = express();
const PORT = 8080;

//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})

const upload = multer({ storage: storage })

app.post("/api/upload", upload.single("file"), (req, res)=>{
  const file = req.file
  res.status(200).json(file?.filename)
})
app.use("/api/auth", authRoutes)
app.use("/api/events", eventsRoutes)
app.use("/api/likes", likeRoutes)
// app.use("/api/comments", commentRoutes)
app.use("/api/posts", postRoutes)

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});