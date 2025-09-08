import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URI, { dbName: "student_dashboard" })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(err));

// Routes
import studentRoutes from "./routes/studentRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import { cloudinary } from "./config/cloudinary.js";

app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes);

app.get("/", (req, res) => res.send("Student Backend API running..."));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
