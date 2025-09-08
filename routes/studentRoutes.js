import express from "express";
import Student from "../models/Student.js";
import multer from "multer";
import { storage } from "../config/cloudinary.js";

const router = express.Router();
const upload = multer({ storage });

// GET all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find().populate("course");
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST add student (with image upload)
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const student = await Student.create({
      name: req.body.name,
      email: req.body.email,
      course: req.body.course,
      image: req.file?.path || null, // Cloudinary URL
    });
    console.log(student.name+" "+student.image);
    
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update student
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const updateData = {
      name: req.body.name,
      email: req.body.email,
      course: req.body.course,
    };
    if (req.file) updateData.image = req.file.path;

    const student = await Student.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE student
router.delete("/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
