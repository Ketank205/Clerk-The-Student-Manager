import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    image: { type: String }, // Cloudinary URL
  },  
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);
