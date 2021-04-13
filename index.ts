const express = require('express')
//const http = require('http')

const notes = [
    {
        "name": 'nota 1',
        "value": "nodemon para que detecte los cambios y reinicie el servidor solo (Servidores con node)",
        "id": 1
    },
    {
        "name": 'nota 2',
        "value": "Añadimos express para gestionar las rutas npm install express",
        "id": 2
    },
    {
        "name": 'nota 3',
        "value": 8,
        "id": 3
    }
]
/*  PAra hacerlo con el require('http')
const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-type': 'application/json'}) //Cabezera, respuesta 200 si es correcto y respuesta de tipo plano
    response.end(JSON.stringify(notes))
})
*/

const app = express()



app.get('/', (request, response) => {
    response.send('<h1>Hola bb</h1>')
})

app.get('/notes', (request, response) => {
    response.json(notes)
})
app.get('/notes/:id', (request, response) => {
  const note = notes.find(item => item.id === Number(request.params.id))

if(note){
    response.json(notes.find(item => item.id === Number(request.params.id)))

}else{
    response.status('404')
}
})

app.delete('/notes/:id', (request, response) => {
    const note = notes.filter(item => item.id !== Number(request.params.id))
  
  if(note){
      response.json(note)
  
  }else{
      response.status('204').end()
  }
  })
const PORT = 3001
app.listen(PORT, () => {
    console.log(`SERVER RUNING ON PORT ${PORT}`)
})
