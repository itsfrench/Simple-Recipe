const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require("cors")


const app = express();
const PORT = 3000;
const mongoURI = 'mongodb+srv://cluster0.efre890.mongodb.net/';
mongoose.connect(mongoURI);

app.use(express.json());
app.use(cors())

const index = path.join(__dirname, '../client/index.js');
app.get('/', (req, res) => res.sendFile(index) )

const images = path.join(__dirname, '../client/assets');
app.use('/assets', express.static(images));


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