import MovieModel from "../models/movie.model.js";

export const getMoviesService = async () => {
  const movies = await MovieModel.find();
  return movies;
};

export const addMovieService = async (data) => {
  const newMovie = await MovieModel.create({
    title: data.title,
    year: data.year,
    genre: data.genre,
    rating: data.rating,
  });

  return newMovie;
};

export const updateMovieService = async (id, data) => {
  delete data.rating;

  const movie = await MovieModel.updateOne(
    {
      _id: id,
    },
    {
      ...data,
    }
  );

  return movie;
};

export const updateMovieRatingService = async (id, rating) => {
  const movie = await MovieModel.updateOne(
    {
      _id: id,
    },
    {
      rating: rating,
    }
  );

  return movie;
};

export const deleteMovieService = async (id) => {
  const movie = await MovieModel.deleteOne({
    _id: id,
  });

  return movie;
};