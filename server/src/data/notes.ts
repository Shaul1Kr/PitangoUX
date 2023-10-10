import mongoose from "mongoose";
import Note from "../models/Note.js";

export default async function data() {
  // Insert first users
  Note.insertMany([
    {
      _id: new mongoose.Types.ObjectId(),
      title: "111",
      content: "111",
    },
    {
      _id: new mongoose.Types.ObjectId(),
      title: "222",
      content: "222",
    },
    {
      _id: new mongoose.Types.ObjectId(),
      title: "333",
      content: "333",
    },
    {
      _id: new mongoose.Types.ObjectId(),
      title: "444",
      content: "444",
    },
    {
      _id: new mongoose.Types.ObjectId(),
      title: "555",
      content: "555",
    },
  ]);
}
