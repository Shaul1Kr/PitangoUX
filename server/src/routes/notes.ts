import express from "express";
import {
  crateComment,
  crateNote,
  getAllComments,
  getAllNotes,
} from "../controllers/notes.js";
const router = express.Router();

router.post("/", crateNote);
router.get("/", getAllNotes);
router.get("/:noteId/comments", getAllComments);
router.post("/:noteId/comments", crateComment);

export default router;
