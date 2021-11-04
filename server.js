// Modules loaded
const path = require('path');
const express = require('express');
const app = express();

const pokemon = require('./data/gallery.js')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  response.send('Hello World!')
})

app.use(function (request, response) {
  response.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Server Start
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});