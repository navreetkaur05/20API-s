import NotesModel from "../models/notes.model.js";

export const getNotesService = async () => {
  const notes = await NotesModel.find();
  return notes;
};

export const createNoteService = async (data) => {
  const newNote = await NotesModel.create({
    title: data.title,
    content: data.content,
    priority: data.priority,
  });

  return newNote;
};

export const updateNoteService = async (id, data) => {
  const note = await NotesModel.updateOne(
    {
      _id: id,
    },
    {
      ...data,
    }
  );

  return note;
};

export const updateNotePriorityService = async (id, priority) => {
  const note = await NotesModel.updateOne(
    {
      _id: id,
    },
    {
      priority: priority,
    }
  );

  return note;
};

export const deleteNoteService = async (id) => {
  const note = await NotesModel.deleteOne({
    _id: id,
  });

  return note;
};