import React from "react";

const InformacionMascota = ({imagen,  nombre, sexo, ciudad, descripcion}) => (
    <div className="informacion-mascota">
        <img src={require(`../imagenes/${imagen}`)}/>
        <p>Nombre:{nombre}</p>
        <p>Sexo:{sexo}</p>
        <p>Ciudad:{ciudad}</p>
        <p>Descripcion:{descripcion}</p>
    </div>
)

export default InformacionMascota;