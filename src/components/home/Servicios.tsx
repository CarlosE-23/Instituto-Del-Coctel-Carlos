import { useContext } from "react";
import "./Servicios.style.css";
import { globalContext } from "../../global/globalContext";
import TargetaCurso from "./TarjetaCurso";
import imgCocteleria from "../../assets/tarjeta-cocteleria.avif";
import imgBarismo from "../../assets/tarjeta-barismo.avif";

function Servicios() {
  const { cursos } = useContext(globalContext);

  return (
    <section id="servicios">
      <h2 className="titulo">Servicios</h2>
      <p className="texto-primario">
        ¡Descubre tu pasión y transforma tu futuro! <br />
        En nuestros cursos de bartendería y barismo, aprenderás las técnicas
        esenciales para convertirte en un experto y sorprender a todos con tus
        creaciones.
      </p>
      <div className="cursos">
        <TargetaCurso curso={cursos[0]} img={imgCocteleria} url="/cursos" />
        <TargetaCurso curso={cursos[1]} img={imgBarismo} url="/cursos" />
      </div>
    </section>
  );
}

export default Servicios;
