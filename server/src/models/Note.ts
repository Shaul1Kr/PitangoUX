import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    content: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Notes", NoteSchema);
export default User;
