import MovieModel from "../models/movie.model.js";

import { addMovieService, deleteMovieService, getMoviesService, updateMovieRatingService, updateMovieService } from "../services/movie.service.js";

export const getMoviesController = async (req, res) => {
  const movies = await getMoviesService();

  res.json({
    message: "Movies fetched successfully",

    data: movies,
  });
};

export const addMovieController = async (req, res) => {
  const data = req.body;

  const newMovie = await addMovieService(data);

  res.json({
    message: "Movie Added successfully",
    data: newMovie,
  });
};

export const updateMovieController = async (req, res) => {
  const data = req.body;

  const mId = req.params.id;

  const movie = await updateMovieService(mId, data);

  res.json({
    message: "Movie Updated successfully",
    movieID: mId,
    data: movie
  });
};

export const updateMovieRatingController = async (req, res) => {
  const data = req.body;

  const mId = req.params.id;

 const movie = await updateMovieRatingService(
    mId,
    data.rating
  );

  res.json({
    message: "Movie Rating Added successfully",
    movieID: mId,
    rating: data.rating,
    data: movie
  });
};

export const deleteMovieController = async (req, res) => {
  const mId = req.params.id;

  const movie = await deleteMovieService(mId);

  res.json({
    message: "Movie deleted successfully",
    movieID: mId,
    data: movie
  });
};
