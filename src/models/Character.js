const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  name: String,
  story: String,
  image: String,
  age: Number,
  appearances: Array,
  weight: String,
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
