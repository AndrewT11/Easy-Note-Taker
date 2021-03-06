//importing boiler plate modules

const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js'); 

//calling port

const PORT = process.env.PORT || 3001;

//making an instance of express

const app = express();

//import clog middleware to have terminal read what is going on.
app.use(clog);

// Middleware for parsing JSON and urlencoded form data

app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use('/api', api); // if const api above is needed

// middleware for grabbing static files

app.use(express.static('public'));

//GET Route for landing page

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

//GET Route for notes page
//* `GET /notes` should return the `notes.html` file.
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

//* `GET *` should return the `index.html` file. Wildcard route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
});
