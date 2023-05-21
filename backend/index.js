const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
app.use(cors());
app.use(express.json());
const listaMascotas = [
  {
    imagen: "perro01.jpg",
    nombre: "Pepe",
    sexo: "Macho",
    ciudad: "Encarnacion",
    descripcion: "De raza",
  },
  {
    imagen: "perro02.jpg",
    nombre: "Travolta",
    sexo: "Macho",
    ciudad: "Encarnacion",
    descripcion: "De raza",
  },
  {
    imagen: "gatito01.jpg",
    nombre: "Zari",
    sexo: "Hembra",
    ciudad: "Encarnacion",
    descripcion: "De raza",
  },
  {
    imagen: "gatito02.jpg",
    nombre: "Pepito",
    sexo: "Macho",
    ciudad: "Encarnacion",
    descripcion: "De raza",
  },
];
app.get("/lista-mascotas", (request, response) => {
  response.json(listaMascotas);
});

app.post("/guardar-mascota", (request, response) => {
  const nuevaMascota = request.body;
  listaMascotas.push(nuevaMascota);

  response.json(nuevaMascota);
});

app.listen(port, () => {
  console.log("el servidor esta escuchando en el puerto " + port);
});
