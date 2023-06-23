const express = require('express')
const notes = require('./src/data/notesMock.json')

const app = express()


let port = process.env.PORT

app.listen(port)

app.get('/', (request: any, response: any) => {
    response.send('<h1>SERVER UP</h1>')
})

app.get('/notes', (request: any, response: any) => {
    response.json(notes)
})
app.get('/notes/:id', (request: any, response: any) => {
    const note = notes.find((item: any) => item.id === Number(request.params.id))

    if (note) {
        response.json(notes.find((item: any) => item.id === Number(request.params.id)))

    } else {
        response.status('404')
    }
})

app.delete('/notes/:id', (request: any, response: any) => {
    const note = notes.filter((item: any) => item.id !== Number(request.params.id))

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
