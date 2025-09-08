import express from "express";
import Course from "../models/Course.js";

const router = express.Router();

// GET all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST add course
router.post("/", async (req, res) => {
  try {
    const course = await Course.create({ name: req.body.name });
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
