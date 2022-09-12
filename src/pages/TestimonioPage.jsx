import Testimonio from '../componentes/Testimonio.js';
import { personas } from '../componentes/Persona.ts';

function TestimonioPage() {
  return (
    <div className="TestimonioPage">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos de Mirando el código y más</h1>
        <Testimonio
        imagen={personas[0].imagen}
        nombre={personas[0].nombre}
        pais={personas[0].pais}
        empresa={personas[0].empresa}
        cargo={personas[0].cargo}
        testimonio={personas[0].testimonio}
        />

      <Testimonio
        imagen={personas[1].imagen}
        nombre={personas[1].nombre}
        pais={personas[1].pais}
        empresa={personas[1].empresa}
        cargo={personas[1].cargo}
        testimonio={personas[1].testimonio}
        />
      </div>
    </div>
  );
}

export default TestimonioPage;