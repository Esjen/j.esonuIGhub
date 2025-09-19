import mongoose from "mongoose";
import dotenv from "dotenv";
import Course from "./models/Course.js";
import Lesson from "./models/Lesson.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "your_mongo_uri_here";

// Seed data
const coursesData = [
  {
    title: "JavaScript Basics",
    description: "Learn the fundamentals of JavaScript.",
    lessons: [
      { title: "Variables & Data Types", content: "Introduction to JS variables and types." },
      { title: "Functions & Scope", content: "Learn how to create functions." },
    ],
  },
  {
    title: "Node.js Fundamentals",
    description: "Backend development with Node.js",
    lessons: [
      { title: "Intro to Node", content: "What is Node.js and why use it?" },
      { title: "File System Module", content: "Working with files in Node.js" },
    ],
  },
  {
    title: "Express.js Basics",
    description: "Build web apps with Express.js",
    lessons: [
      { title: "Routing", content: "Learn about routes in Express.js" },
      { title: "Middleware", content: "Understanding middleware functions" },
    ],
  },
  {
    title: "MongoDB with Mongoose",
    description: "Database management with MongoDB",
    lessons: [
      { title: "Schemas & Models", content: "Defining schemas in Mongoose" },
      { title: "CRUD Operations", content: "Create, Read, Update, Delete" },
    ],
  },
  {
    title: "React Basics",
    description: "Frontend development with React",
    lessons: [
      { title: "Components", content: "Functional and class components" },
      { title: "Props & State", content: "Managing state in React" },
    ],
  },
  {
    title: "React Router",
    description: "Navigation in React applications",
    lessons: [
      { title: "Routing Basics", content: "Setting up React Router" },
      { title: "Dynamic Routes", content: "Using parameters in routes" },
    ],
  },
  {
    title: "Redux Essentials",
    description: "State management with Redux",
    lessons: [
      { title: "Actions & Reducers", content: "Learn Redux workflow" },
      { title: "Store & Dispatch", content: "Connecting Redux to React" },
    ],
  },
  {
    title: "TypeScript Basics",
    description: "Static typing with TypeScript",
    lessons: [
      { title: "Types & Interfaces", content: "Learn TS types" },
      { title: "Classes & Functions", content: "Type-safe classes & functions" },
    ],
  },
  {
    title: "HTML & CSS Fundamentals",
    description: "Building static web pages",
    lessons: [
      { title: "HTML Basics", content: "Structure your webpage" },
      { title: "CSS Styling", content: "Add style to your pages" },
    ],
  },
  {
    title: "Advanced CSS & Flexbox",
    description: "Layouts and responsive design",
    lessons: [
      { title: "Flexbox", content: "Learn Flexbox layouts" },
      { title: "CSS Grid", content: "Grid-based layouts" },
    ],
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Clear previous data
    await Lesson.deleteMany({});
    await Course.deleteMany({});

    for (let c of coursesData) {
      // Create course
      const course = new Course({
        title: c.title,
        description: c.description,
        lessons: [],
      });
      await course.save();

      // Create lessons linked to course
      const lessons = await Lesson.insertMany(
        c.lessons.map((l, idx) => ({
          ...l,
          course: course._id,
          order: idx + 1, // optional: keep lesson order
        }))
      );

      // Link lessons to course
      course.lessons = lessons.map((l) => l._id);
      await course.save();
    }

    console.log("✅ Seed data inserted successfully");
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Error seeding database:", err);
    mongoose.disconnect();
  }
};

seedDB();
