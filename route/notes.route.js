import express from "express"
import { createNoteController, deleteNoteController, getNotesController, updateNoteController, updateNotePriorityController } from "../controller/notes.controller.js";

const notesRouter = express.Router();

notesRouter.get("/", getNotesController);

notesRouter.post("/", createNoteController);

notesRouter.put("/:id", updateNoteController);

notesRouter.patch("/:id/priority", updateNotePriorityController);

notesRouter.delete("/:id", deleteNoteController);

export default notesRouter