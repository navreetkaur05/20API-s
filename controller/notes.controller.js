import NotesModel from "../models/notes.model.js";

import { createNoteService, deleteNoteService, getNotesService, updateNotePriorityService, updateNoteService } from "../services/notes.service.js";

export const getNotesController = async (req, res) => {
const notes = await getNotesService();
  res.json({
    message: "Notes fetched successfully",
    data: notes,
  });
};

export const createNoteController = async (req, res) => {
  const data = req.body;

  const newNote = await createNoteService(data);

  res.json({
    message: "Note created successfully",
    data: newNote,
  });
};

export const updateNoteController = async (req, res) => {
  const data = req.body;

  const nId = req.params.id;

  const note = await updateNoteService(nId, data);

  res.json({
    message: "Note updated successfully",

    noteId: nId,

    data: note
  });
};

export const updateNotePriorityController = async (req, res) => {
  const data = req.body;

  const nId = req.params.id;

  const note = await updateNotePriorityService(
    nId,
    data.priority
  );

  res.json({
    message: "Note priority updated successfully",

    noteId: nId,

    priority: data.priority,

    data: note
  });
};

export const deleteNoteController = async (req, res) => {
  const nId = req.params.id;

 const note = await deleteNoteService(nId);

  res.json({
    message: "Note deleted successfully",

    noteId: nId,

    data: note
  });
};
