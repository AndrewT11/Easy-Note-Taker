//imported modules
const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile, } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all notes
notes.get('/notes', (req, res) => {
    readFromFile('./db/db.json')
    .then((data) => res.json(JSON.parse(data)));
});



// POST route for new UX/UI note
notes.post('/notes', (req, res) => {
    console.log(req.body);

    const { noteTitle, note } = req.body;

    if (req.body) {
        const newNote = {
            noteTitle,
            note,
            tip_id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json('Note added succesfully');
    } else {
        res.error('Error adding note')
    };
});

module.exports = notes;