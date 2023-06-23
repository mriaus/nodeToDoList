const express = require('express')
const notes = require('./src/data/notesMock.json')

const app = express()


let port = process.env.PORT

app.listen(port)

app.get('/', (request, response) => {
    response.send('<h1>SERVER UP</h1>')
})

app.get('/notes', (request, response) => {
    response.json(notes)
})
app.get('/notes/:id', (request, response) => {
    const note = notes.find(item => item.id === Number(request.params.id))

    if (note) {
        response.json(notes.find(item => item.id === Number(request.params.id)))

    } else {
        response.status('404')
    }
})

app.delete('/notes/:id', (request, response) => {
    const note = notes.filter(item => item.id !== Number(request.params.id))

    if (note) {
        response.json(note)

    } else {
        response.status('204').end()
    }
})
const PORT = 3001
app.listen(PORT, () => {
    console.log(`SERVER RUNING ON PORT ${PORT}`)
})
