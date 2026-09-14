import express from "express";
import { addBookController, deleteBookController, getBooksController, updateBookAvailabilityController, updateBookController } from "../controller/library.controller.js";

const libraryRouter = express.Router();

libraryRouter.get("/books", getBooksController);

libraryRouter.post("/books",addBookController);

libraryRouter.put("/books/:id", updateBookController);

libraryRouter.patch("/books/:id/availability", updateBookAvailabilityController);

libraryRouter.delete("/books/:id", deleteBookController);

export default libraryRouter;
