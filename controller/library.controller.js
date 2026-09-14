import BookModel from "../models/book.model.js";

import { addBookService, deleteBookService, getBooksService, updateBookAvailabilityService, updateBookService } from "../services/library.service.js";

export const getBooksController = async (req, res) => {
  const books = await getBooksService();

  res.json({
    message: "Books fetched successfully",
    data: books,
  });
};

export const addBookController = async (req, res) => {
  const data = req.body;

  const newBook = await addBookService(data);

  res.json({
    message: "Book added successfully",
    data: newBook,
  });
};

export const updateBookController = async (req, res) => {
  const data = req.body;

  const bId = req.params.id;

  const book = await updateBookService(bId, data);

  res.json({
    message: "Book updated successfully",

    bookId: bId,

    data: book
  });
};

export const updateBookAvailabilityController = async (req, res) => {
  const data = req.body;
  const bId = req.params.id;

  const book = await updateBookAvailabilityService(
    bId,
    data.available
  );

  res.json({
    message: "Book availability updated successfully",
    bookId: bId,
    data: book
  });
};

export const deleteBookController = async (req, res) => {
  const bId = req.params.id;

const book = await deleteBookService(bId);

  res.json({
    message: "Book deleted successfully",
    bookId: bId,
    data: book
  });
};
