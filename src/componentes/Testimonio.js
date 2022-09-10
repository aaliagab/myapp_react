import React from "react";

function Testimonio(){
    return(
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio"
             src={require("../imagenes/testimonio-adriel.jpg")}
             alt="Foto de Adriel"/>
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"> Adriel Aliaga</p>
                <p className="cargo-testimonio"> FullStack developer</p>
                <p className="texto-testimonio">
                    Un entusiasta programador que ha
                    dedicado toda su vida profesional
                    vinculado al desarrollo de software y a
                    la enseñanza de la programación, así
                    como técnicas de inteligencia artificial
                    en diversas universidades cubanas y
                    angolanas.
                </p>
            </div>
        </div>        
    );
}

export default Testimonio;