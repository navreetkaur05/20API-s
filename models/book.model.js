import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  year: Number,
  available: Boolean
});

const BookModel = mongoose.model('books', bookSchema);

export default BookModel