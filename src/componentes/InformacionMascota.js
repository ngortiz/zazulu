import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const InformacionMascota = ({ imagen, nombre, sexo, ciudad, descripcion }) => (
    <Card sx={{ maxWidth: 345 }} className="informacion-mascota">
      <CardMedia
        sx={{ height: 140 }}
        image={require(`../imagenes/${imagen}`)}
        title={nombre}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Adpotar</Button>
        <Button size="small">Leer mas</Button>
      </CardActions>
    </Card>
)

export default InformacionMascota;