import mongoose from "mongoose";
const { Schema, model } = mongoose;

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  instructor: { type: Schema.Types.ObjectId, ref: "User" },
  lessons: [{ type: Schema.Types.ObjectId, ref: "Lesson" }],
  createdAt: { type: Date, default: Date.now }
});

export default model("Course", courseSchema);
