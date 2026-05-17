import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/authRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";
import editorRoutes from "./routes/editorRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import conversationRoutes from "./routes/conversationRoutes.js"
import notificationRoutes from "./routes/notificationRoutes.js"
import { setupWebSocket } from "./websockets/socket.js";

dotenv.config();
import connectToDatabase from "./config/database.js";
connectToDatabase();

import cloudinaryConnect from "./config/cloudinary.js";
cloudinaryConnect();

const app = express();

app.use(express.json());

app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? true  // same-origin, no CORS needed when serving frontend from Express
    : ["http://localhost:5173", "http://127.0.0.1:5173"],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin']
}));

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp"
}));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/editor", editorRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/user", userRoutes);
app.use("/api/conversation", conversationRoutes);
app.use("/api/notifications", notificationRoutes);

// --- Serve Frontend (Vite build) ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../client/dist")));

// React SPA fallback — all non-API routes serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
setupWebSocket(server);
server.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
