import { Container, TextField, Button} from "@mui/material";
import ImageUploader from 'react-images-upload';

const Formulario = ({setearNombre, setearSexo, setearDescripcion, setearCiudad, registrar, subirImagen}) => {
    return (
        <Container fixed>
            <form>
                <TextField id="nombre" label="Nombre" variant="outlined" onChange={setearNombre} />
                <TextField id="sexo" label="Sexo" variant="outlined" onChange={setearSexo} />
                <TextField id="descripcion" label="Descripcion" variant="outlined" onChange={setearDescripcion} />
                <TextField id="ciudad" label="Ciudad" variant="outlined" onChange={setearCiudad} />
                <Button variant="contained" className='boton-registrar' onClick={registrar}>Agregar</Button>
                <ImageUploader
                    withIcon={true}
                    buttonText='Subir una imagen'
                    onChange={subirImagen}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    withPreview={true}
                />
            </form>
        </Container>
    )
}
export default Formulario;