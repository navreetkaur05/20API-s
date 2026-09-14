import mongoose from "mongoose"

const notesSchema = new mongoose.Schema({
  title: String,
  content: String,
  priority: String
});

const NotesModel = mongoose.model('notes', notesSchema);

export default NotesModel
