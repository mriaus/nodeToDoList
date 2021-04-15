const express = require('express')
import {notes} from './src/data/notesMock'
//const http = require('http')


/*  PAra hacerlo con el require('http')
const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-type': 'application/json'}) //Cabezera, respuesta 200 si es correcto y respuesta de tipo plano
    response.end(JSON.stringify(notes))
})
*/

const app = express()


let port = process.env.PORT

app.listen(port)

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
