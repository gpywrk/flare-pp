import express from "express";
import { auth, isCreator, isEditor } from "../middlewares/auth.js";
import { getAssignedVideos, uploadEditedVideo } from "../controllers/editorController.js";

const router = express.Router();

router.get('/assigned-videos',  auth, isEditor, getAssignedVideos);
router.post('/upload-edited-video/:videoId', auth, uploadEditedVideo);


export default router;