import "./TarjetaCurso.style.css";
import { TCurso } from "../../assets/servicios/cursos";
import { Link } from "react-router-dom";

type TProps = {
  curso: TCurso;
  imgSrc: string;
  url: string;
};

function TargetaCurso(props: TProps) {
  const { curso, imgSrc, url } = props;
  return (
    <article className="card-curso">
      <div>
        <img src={imgSrc} alt="Imagen de referencia" />
        <h5>{curso.nombre}</h5>
        <p className="descripcion">{curso.descripcion}</p>
      </div>
      <p>
        <Link to={url}>
          <button>Más</button>
        </Link>
      </p>
    </article>
  );
}

export default TargetaCurso;
