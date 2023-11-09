
const PORT = 3000;
const mongoURI = 'mongodb+srv://clynnfrench:3TVnc7YEybeWfMNt@cluster0.efre890.mongodb.net/?retryWrites=true&w=majority';
const mongoose = require('mongoose');
mongoose.connect(mongoURI);

const Recipe = require('./recipeModel.js');


const dbResponse = Recipe.find({})
.then(dbResponse => {
  console.log('dbResponse: ', dbResponse);
})
.catch(err => {
  console.log("Could not find Recipes, err: ", err);
})
.finally( () => {
  console.log('Finished');
  mongoose.disconnect();
})