import express from "express";
import Course from "../models/Course.js";
import Lesson from "../models/Lesson.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

// create course (protected - instructor/admin)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, description } = req.body;
    // Basic role check
    if (!["instructor","admin"].includes(req.user.role)) {
      return res.status(403).json({ message: "Not allowed" });
    }
    const course = await Course.create({ title, description, instructor: req.user.id });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// list courses
router.get("/", async (req, res) => {
  const courses = await Course.find().populate("instructor", "name email");
  res.json(courses);
});

// get single course with lessons
router.get("/:id", async (req, res) => {
  const course = await Course.findById(req.params.id).populate("lessons");
  if (!course) return res.status(404).json({ message: "Not found" });
  res.json(course);
});

// add lesson to course
router.post("/:id/lessons", authMiddleware, async (req, res) => {
  try {
    const { title, content, videoUrl, order } = req.body;
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    // optional: only instructor who owns course or admin allowed
    const lesson = await Lesson.create({ title, content, videoUrl, order, course: course._id });
    course.lessons.push(lesson._id);
    await course.save();
    res.json(lesson);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
