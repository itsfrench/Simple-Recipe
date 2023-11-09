const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const controller = require('./controller.js')
const cors = require("cors")


const app = express();
const PORT = 3000;
const mongoURI = 'mongodb+srv://clynnfrench:3TVnc7YEybeWfMNt@cluster0.efre890.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI);

app.use(express.json());
app.use(cors());

//statically serving my images 
const images = path.join(__dirname, '../client/assets');
app.use('/assets', express.static(images));

//servering my home page 
const index = path.join(__dirname, '../client/index.js');
app.get('/', (req, res) => res.sendFile(index) )

//handler to update state
app.get('/update-state', controller.updateState, (req, res) => {
  const data = [res.locals.count, res.locals.data];
  res.status(200).json(data).end();
});

//handler to post a recipe
app.use('/create-new-recipe', controller.createRecipe, (req, res) => {
  res.sendStatus(200).end();
})

//global error handler function 
const errorHandler = (err, req, res, next) => {
  const defaultError = {
    log: 'Unexpected server error',
    status: 500,
    message: { err: 'Unexpected server error.'}
  }
  const errorObj = Object.assign(defaultError, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
}

app.use(errorHandler)


app.listen(PORT);
module.exports = app;