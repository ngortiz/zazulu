import React from "react";
import { useState } from "react";
import Formulario from "./componentes/Formulario";

import "./App.css";
import Banner from "./componentes/Banner";
import ListaMascotas from "./componentes/ListaMastocas";

const animales = [
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
function App() {
  const [nombre, setNombre] = useState("");
  const [sexo, setSexo] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [listaAnimales, setListaAnimales] = useState(animales);
  const [imagen, setImagen] = useState();

  const registrar = (e) => {
    const nuevoAnimal = {
      imagen: "gatito02.jpg",
      nombre: nombre,
      sexo: sexo,
      ciudad: ciudad,
      descripcion: descripcion,
    };
    const nuevosAnimales = [nuevoAnimal, ...listaAnimales];
    setListaAnimales(nuevosAnimales);
  };

  const setearNombre = (e) => {
    setNombre(e.target.value);
  };

  const setearSexo = (e) => {
    setSexo(e.target.value);
  };
  const setearDescripcion = (e) => {
    setDescripcion(e.target.value);
  };

  const setearCiudad = (e) => {
    setCiudad(e.target.value);
  };

  const subirImagen = (imagenes, pictureDataURLs) => {
    console.log(imagenes);
    console.log(pictureDataURLs);
    setImagen(pictureDataURLs[0]);
  };

  return (
    <>
      <Banner />
      <Formulario
        setearNombre={setearNombre}
        setearCiudad={setearCiudad}
        setearSexo={setearSexo}
        setearDescripcion={setearDescripcion}
        subirImagen={subirImagen}
        registrar={registrar}
      />
      <ListaMascotas listaAnimales={listaAnimales} />
    </>
  );
}

export default App;
