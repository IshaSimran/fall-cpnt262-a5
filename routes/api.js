// Import modules

const express = require('express') // Run Express
const router = express.Router() // Connect to `server.js`

// Connect to MongoDB
const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
)
  .then(function () {
    console.log('Connected to DB...')
  })
  .catch(function (err) {
    console.log(err)
  });
