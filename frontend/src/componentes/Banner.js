import { Container } from '@mui/material';
import "./Banner.css"
const Banner = () => {
    return (
        <Container fixed>
            <img alt='banner' src={require(`../imagenes/banner.jpg`)} className="informacion-mascota-banner" />
        </Container>
    )
}

export default Banner;