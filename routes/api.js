// Import modules

const express = require('express')
const router = express.Router()

// Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://isha:powder-cup@fall-cpnt262-a5.v84uk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true },
)

  .then(function () {
    console.log('Connected to DB...')
  })

  // Error Handling
  .catch(function (err) {
    console.log(err)
  });
