import mongoose from "mongoose";
const { Schema, model } = mongoose;

const lessonSchema = new Schema({
  title: { type: String, required: true },
  content: String,          // could be markdown or html
  videoUrl: String,
  course: { type: Schema.Types.ObjectId, ref: "Course" },
  order: Number
});

export default model("Lesson", lessonSchema);
