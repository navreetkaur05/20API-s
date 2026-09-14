import BookModel from "../models/book.model.js";

export const getBooksService = async () => {
  const books = await BookModel.find();
  return books;
};

export const addBookService = async (data) => {
  const newBook = await BookModel.create({
    name: data.name,
    author: data.author,
    year: data.year,
    available: true,
  });

  return newBook;
};

export const updateBookService = async (id, data) => {
  delete data.available;

  const book = await BookModel.updateOne(
    {
      _id: id,
    },
    {
      ...data,
    }
  );

  return book;
};

export const updateBookAvailabilityService = async (id, data) => {
  const book = await BookModel.updateOne(
    {
      _id: id,
    },
    {
      available: data,
    }
  );

  return book;
};

export const deleteBookService = async (id) => {
  const book = await BookModel.deleteOne({
    _id: id,
  });

  return book;
};