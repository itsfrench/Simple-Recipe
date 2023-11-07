const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

const index = path.join(__dirname, '../client/index.js');
app.get('/', (req, res) => res.sendFile(index) );

const images = path.join(__dirname, '../client/assets');
app.use('/assets', express.static(images));

app.listen(PORT);

module.exports = app;