import { Request, Response } from "express";
import Note from "../models/Note.js";
import Comment from "../models/Comment.js";

export async function getAllNotes(req: Request, res: Response) {
  try {
    console.info(`Retrive all notes`);
    const notes = await Note.find();
    return res.status(200).json({ notes });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Bad request" });
  }
}

export async function crateNote(req: Request, res: Response) {
  try {
    const { title } = req.body;
    console.info(`Creating note with title ${title}`);
    await Note.create({ title, content: title });
    return res.status(200).end();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Bad request" });
  }
}

export async function getAllComments(req: Request, res: Response) {
  try {
    const { noteId } = req.params;
    console.info(`Retrive all comments by note id ${noteId}`);
    const comments = await Comment.find({ note_id: noteId });
    return res.status(200).json({ comments });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Bad request" });
  }
}

export async function crateComment(req: Request, res: Response) {
  try {
    const { noteId } = req.params;
    const { text } = req.body;
    console.info(`Creating comment with title ${text} from note ${noteId}`);
    await Comment.create({ note_id: noteId, text });
    return res.status(200).end();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Bad request" });
  }
}
