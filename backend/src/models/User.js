import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true }, // must match your route code
    role: { type: String, enum: ["student", "instructor", "admin"], default: "student" }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;   // 👈 default export so `import User from ...` works
