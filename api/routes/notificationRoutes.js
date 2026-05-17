import express from "express";
import { auth } from "../middlewares/auth.js";
import { 
  getUserNotifications, 
  markNotificationsAsRead, 
  markAllNotificationsAsRead 
} from "../controllers/notificationController.js";

const router = express.Router();

router.get("/", auth, getUserNotifications);

router.post("/mark-read", auth, markNotificationsAsRead);

router.post("/mark-all-read", auth, markAllNotificationsAsRead);

export default router; 