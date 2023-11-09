const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  id: {type: Number, required: true, unique: true},
  title: {type: String, required: true, unique: true},
  ingredients: {type: Array, required: true},
  instructions: {type: Array, required: true}
});

module.exports = mongoose.model('Recipe', recipeSchema);