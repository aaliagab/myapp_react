import React from "react";
import "../css/Testimonio.css";

function Testimonio(props){
    return(
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio"
             src={require(`../imagenes/testimonio-${props.imagen}.jpg`)}
             alt={"Foto de "+props.nombre}/>
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"> <b>{props.nombre}</b> in {props.pais}</p>
                <p className="cargo-testimonio"> {props.cargo} in <strong>{props.empresa}</strong></p>
                <p className="texto-testimonio">{props.testimonio}</p>
            </div>
        </div>        
    );
}

export default Testimonio;