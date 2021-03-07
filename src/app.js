const express = require('express');

const app = express();
const artistControllers = require('./controllers/artists');

app.use(express.json());

app.post('/artists', artistControllers.create);

app.get('/artists', artistControllers.list);

app.get('/artists/:id', artistControllers.getArtistById);




module.exports = app;