import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    note_id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    text: {
      type: String,
      required: true,
      min: 1,
      max: 500,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Comment", CommentSchema);
export default User;
