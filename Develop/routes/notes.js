//imported modules
const notesRouter = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving notes
notesRouter.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for new UX/UI note
notesRouter.post('/', (req, res) => {
    console.log(req.body);

    const { noteTitle, note } = req.body;

    if (req.body) {
        const newNote = {
            noteTitle,
            note,
            tip_id: uuidv4(),
        };

        readAndAppend(newTip, './db/db.json');
        res.json('Note added succesfully');
    } else {
        res.error('Error adding note')
    };
});

nodule.exports = tips;