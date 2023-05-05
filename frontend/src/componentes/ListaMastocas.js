import { Container } from "@mui/material";
import InformacionMascota from "./InformacionMascota";
const ListaMascotas = ({ listaAnimales }) => {
  return (
    <Container fixed className="informacion">
      {listaAnimales.map((animal, indice) => {
        return (
          <InformacionMascota
            imagen={animal.imagen}
            nombre={animal.nombre}
            sexo={animal.sexo}
            ciudad={animal.ciudad}
            descripcion={animal.descripcion}
            key={indice}
          />
        );
      })}
    </Container>
  );
};
export default ListaMascotas;
