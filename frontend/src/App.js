import React from "react";
import { useState, useEffect } from "react";
import Formulario from "./componentes/Formulario";

import "./App.css";
import Banner from "./componentes/Banner";
import ListaMascotas from "./componentes/ListaMastocas";
import axios from "axios";

function App() {
  const [nombre, setNombre] = useState("");
  const [sexo, setSexo] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [listaMascotas, setListaMascotas] = useState([]);
  const [imagen, setImagen] = useState();

  const obtenerListaMascota = async () => {
    const response = await axios.get("http://localhost:3001/lista-mascotas");
    setListaMascotas(response.data);
  };

  useEffect(() => {
    obtenerListaMascota();
  }, []);

  const registrar = async (e) => {
    const nuevaMascota = {
      imagen: "gatito02.jpg",
      nombre: nombre,
      sexo: sexo,
      ciudad: ciudad,
      descripcion: descripcion,
    };
    const response = await axios.post(
      "http://localhost:3001/guardar-mascota",
      nuevaMascota
    );
    obtenerListaMascota();
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
      <ListaMascotas listaAnimales={listaMascotas} />
    </>
  );
}

export default App;
