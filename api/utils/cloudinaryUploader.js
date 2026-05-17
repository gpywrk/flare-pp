import { v2 as cloudinary } from "cloudinary";

export default async function (file, folder, height, width, quality) {
    const options = { folder };

    if (height) options.height = height;
    if (width) options.width = width;

    options.quality = quality || "auto";
    options.fetch_format = "auto";

    const isVideo = file.mimetype?.startsWith("video/");

    if (isVideo) {
        return await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_large(
                file.tempFilePath,
                {
                    ...options,
                    resource_type: "video",
                    chunk_size: 6000000,
                },
                (error, result) => {
                    if (error) return reject(error);
                    resolve(result);
                }
            );
        });
    }

    return await cloudinary.uploader.upload(file.tempFilePath, {
        ...options,
        resource_type: "image",
    });
}