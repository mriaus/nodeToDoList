"use strict";
const express = require('express');
const notes = require('./src/data/notesMock.json');
const app = express();
const port = process.env.PORT || 3001;
app.get('/', (request, response) => {
    response.send('<h1>SERVER UP</h1>');
});
app.get('/notes', (request, response) => {
    response.json(notes);
});
app.get('/notes/:id', (request, response) => {
    const note = notes.find((item) => item.id === Number(request.params.id));
    if (note) {
        response.json(note);
    }
    else {
        response.status(404).send('Note not found');
    }
});
app.delete('/notes/:id', (request, response) => {
    const note = notes.filter((item) => item.id !== Number(request.params.id));
    if (note) {
        response.json(note);
    }
    else {
        response.status(204).end();
    }
});
app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT ${port}`);
});
