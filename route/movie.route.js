import express from "express";
import { addMovieController, deleteMovieController, getMoviesController, updateMovieController, updateMovieRatingController } from "../controller/movie.controller.js";

const moviesRouter = express.Router();

moviesRouter.get("/", getMoviesController);

moviesRouter.post("/", addMovieController);

moviesRouter.put("/:id", updateMovieController);

moviesRouter.patch("/:id/rating", updateMovieRatingController);

moviesRouter.delete("/:id", deleteMovieController);


export default moviesRouter;
