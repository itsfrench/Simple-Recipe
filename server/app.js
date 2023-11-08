const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');


const app = express();
const PORT = 3000;
const mongoURI = 'mongodb+srv://cluster0.efre890.mongodb.net/';
mongoose.connect(mongoURI);

app.use(express.json());

const index = path.join(__dirname, '../client/index.js');
app.get('/', (req, res) => res.sendFile(index) )

const images = path.join(__dirname, '../client/assets');
app.use('/assets', express.static(images));

app.use('/start-new-recipe', (res, req) => {
  res.redirect('/start')
});


// app.use('/start', (res, req) => {

// })
app.listen(PORT);

module.exports = app;