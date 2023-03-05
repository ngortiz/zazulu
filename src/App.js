import './App.css';
import InformacionMascota from './componentes/InformacionMascota';

const animales = [
  {
    imagen: 'perro01.jpg',
    nombre: 'pipi',
    sexo: 'macho',
    ciudad: 'Encarnacion',
    descripcion: 'de raza'
  },
  {
    imagen: 'perro02.jpg',
    nombre: 'travolta',
    sexo: 'macho',
    ciudad: 'Encarnacion',
    descripcion: 'de raza'
  },
  {
    imagen: 'gatito01.jpg',
    nombre: 'zari',
    sexo: 'hembra',
    ciudad: 'Encarnacion',
    descripcion: 'raza comun'
  },
  {
    imagen: 'gatito02.jpg',
    nombre: 'pepito',
    sexo: 'macho',
    ciudad: 'Encarnacion',
    descripcion: 'raza comun'
  }

]
function App() {
  return (
    <div className="contenedor">
      {animales.map((animal, indice)=>{
       return <InformacionMascota 
        imagen={animal.imagen}
        nombre={animal.nombre}
        sexo={animal.sexo}
        ciudad={animal.ciudad}
        descripcion={animal.descripcion}
        key={indice}
        />
      })}
      

    </div>
  );
}

export default App;
