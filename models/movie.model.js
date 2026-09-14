import mongoose from "mongoose"

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  genre: String,
  rating: Number
});

const MovieModel = mongoose.model('movies', movieSchema);

export default MovieModel
