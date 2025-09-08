import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";

dotenv.config();

if (process.env.CLOUDINARY_URL) {
  console.log("URL is there!");
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
} else {
  console.log("Something is wrong!");

}

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "students",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

export { cloudinary, storage };