//organizing all routes
const express = require('express');

//import modular routers for /notes
const notesRouter = require('./notes');

//instance of express
const app = express();

// use routes on notes.js
app.use('/notes', notesRouter);

module.exports = app;