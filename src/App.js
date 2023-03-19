import React from 'react';
import { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
import InformacionMascota from './componentes/InformacionMascota';
import './App.css'

const animales = [
  {
    imagen: 'perro01.jpg',
    nombre: 'Pepe',
    sexo: 'Macho',
    ciudad: 'Encarnacion',
    descripcion: 'De raza'
  },
  {
    imagen: 'perro02.jpg',
    nombre: 'Travolta',
    sexo: 'Macho',
    ciudad: 'Encarnacion',
    descripcion: 'De raza'
  },
  {
    imagen: 'gatito01.jpg',
    nombre: 'Zari',
    sexo: 'Hembra',
    ciudad: 'Encarnacion',
    descripcion: 'De raza'
  },
  {
    imagen: 'gatito02.jpg',
    nombre: 'Pepito',
    sexo: 'Macho',
    ciudad: 'Encarnacion',
    descripcion: 'De raza'
  }

]
function App() {
  const [nombre, setNombre] = useState('')
  const [sexo, setSexo] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [listaAnimales, setListaAnimales] = useState(animales)

  const registrar = (e) => {
    const nuevoAnimal ={
      imagen: 'gatito02.jpg',
      nombre: nombre,
      sexo: sexo,
      ciudad: ciudad,
      descripcion: descripcion,
    }
    const nuevosAnimales = [nuevoAnimal,...listaAnimales];
    setListaAnimales(nuevosAnimales)
  }

  const setearNombre = (e) => {
    setNombre(e.target.value);
  }

  const setearSexo= (e) => {
    setSexo(e.target.value);
  }
  const setearDescripcion= (e) => {
    setDescripcion(e.target.value);
  }

  const setearCiudad= (e) => {
    setCiudad(e.target.value);
  }

  return (
    <>
      <img alt='banner' src={require(`./imagenes/banner.jpg`)} className="informacion-mascota-banner" />

      <Container fixed className="formulario">
        <form>
          <TextField id="nombre" label="Nombre" variant="outlined" onChange={setearNombre}/>
          <TextField id="sexo" label="Sexo" variant="outlined"  onChange={setearSexo}/>
          <TextField id="descripcion" label="Descripcion" variant="outlined" onChange={setearDescripcion}/>
          <TextField id="ciudad" label="Ciudad" variant="outlined" onChange={setearCiudad}/>
          <Button variant="contained" className='boton-registrar' onClick={registrar}>Agregar</Button>
        </form>
      </Container>

      <Container fixed className="informacion">
        {listaAnimales.map((animal, indice) => {
          return <InformacionMascota
            imagen={animal.imagen}
            nombre={animal.nombre}
            sexo={animal.sexo}
            ciudad={animal.ciudad}
            descripcion={animal.descripcion}
            key={indice}
          />
        })}
      </Container>

    </>
  );
}

export default App;
