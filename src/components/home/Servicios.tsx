import { useContext } from "react";
import "./Servicios.style.css";
import { globalContext } from "../../global/globalContext";
import TargetaCurso from "./TarjetaCurso";

function Servicios() {
  const { cursos } = useContext(globalContext);

  return (
    <section id="servicios">
      <h2>Servicios</h2>
      <p>
        ¡Descubre tu pasión y transforma tu futuro! <br />
        En nuestros cursos de bartendería y barismo, aprenderás las técnicas
        esenciales para convertirte en un experto y sorprender a todos con tus
        creaciones.
      </p>
      <div className="cursos">
        <TargetaCurso
          curso={cursos[0]}
          imgSrc="./src/assets/tarjeta-cocteleria.avif"
          url="/cursos"
        />
        <TargetaCurso
          curso={cursos[1]}
          imgSrc="./src/assets/tarjeta-barismo.avif"
          url="/cursos"
        />
      </div>
    </section>
  );
}

export default Servicios;
