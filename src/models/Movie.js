const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  image: String,
  releaseDate: Date,
  characters: Array,
  genre: String,
  rate: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
