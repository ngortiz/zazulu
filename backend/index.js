const express = require('express');
const app = express();
const port = 3001;

app.get('/lista-mascotas', (request, response) => {
 response.send('Hola mundo');
});

app.post('/guardar-mascota', (request, response) => {
    response.send('Se guardo una mascota');
})

app.listen(port, ()=>{
    console.log('el servidor esta escuchando en el puerto ' + port);
})