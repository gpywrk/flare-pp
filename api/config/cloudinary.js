import { v2 as cloudinary } from 'cloudinary'

export default function () {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET,
            upload_prefix: "https://api-ap.cloudinary.com" // ← THIS
        });
        console.log("[Cloudinary] Configured - cloud_name:", process.env.CLOUD_NAME, "timeout: 600s");
    }
    catch (error) {
        console.log("[Cloudinary] Config error:", error);
    }
}