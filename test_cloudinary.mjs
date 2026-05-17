import dotenv from 'dotenv';
dotenv.config();

import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    timeout: 600000,
});

const config = cloudinary.config();
console.log("config.timeout:", config.timeout);

// Test 1: Remote URL upload
console.log("\nTest 1: Remote URL upload...");
const start1 = Date.now();
try {
    const r1 = await cloudinary.uploader.upload(
        "https://res.cloudinary.com/demo/image/upload/sample.jpg",
        { folder: "test", resource_type: "auto", timeout: 600000 }
    );
    console.log(`SUCCESS in ${((Date.now()-start1)/1000).toFixed(1)}s - ${r1.secure_url}`);
} catch (e) {
    const ae = e?.error || e;
    console.log(`FAILED in ${((Date.now()-start1)/1000).toFixed(1)}s - ${ae?.message} (${ae?.http_code})`);
    console.log("Full error:", JSON.stringify(e, null, 2));
}

// Test 2: Local small file
console.log("\nTest 2: Local small file upload...");
fs.writeFileSync('/tmp/test_upload.txt', 'Hello Cloudinary test ' + Date.now());
const start2 = Date.now();
try {
    const r2 = await cloudinary.uploader.upload(
        "/tmp/test_upload.txt",
        { folder: "test", resource_type: "raw", timeout: 600000 }
    );
    console.log(`SUCCESS in ${((Date.now()-start2)/1000).toFixed(1)}s - ${r2.secure_url}`);
} catch (e) {
    const ae = e?.error || e;
    console.log(`FAILED in ${((Date.now()-start2)/1000).toFixed(1)}s - ${ae?.message} (${ae?.http_code})`);
    console.log("Full error:", JSON.stringify(e, null, 2));
}

fs.unlinkSync('/tmp/test_upload.txt');
console.log("\nDone.");
