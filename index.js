var express = require('express');
var notes = require('./src/data/notesMock.json');
var app = express();
var port = process.env.PORT || 3001;
app.get('/', function (request, response) {
    response.send('<h1>SERVER UP</h1>');
});
app.get('/notes', function (request, response) {
    response.json(notes);
});
app.get('/notes/:id', function (request, response) {
    var note = notes.find(function (item) { return item.id === Number(request.params.id); });
    if (note) {
        response.json(note);
    }
    else {
        response.status(404).send('Note not found');
    }
});
app.delete('/notes/:id', function (request, response) {
    var note = notes.filter(function (item) { return item.id !== Number(request.params.id); });
    if (note) {
        response.json(note);
    }
    else {
        response.status(204).end();
    }
});
app.listen(port, function () {
    console.log("SERVER RUNNING ON PORT ".concat(port));
});
