import "./TarjetaCurso.style.css";
import { TCurso } from "../../assets/servicios/cursos";
import { Link } from "react-router-dom";

type TProps = {
  curso: TCurso;
  img: string;
  url: string;
};

function TargetaCurso(props: TProps) {
  const { curso, img, url } = props;
  return (
    <article className="card-curso">
      <div>
        <img src={img} alt="Imagen de referencia" />
        <h5 className="titulo-secundario">{curso.nombre}</h5>
        <p className="descripcion texto">{curso.descripcion}</p>
      </div>
      <p>
        <Link to={url}>
          <button className="texto">Más</button>
        </Link>
      </p>
    </article>
  );
}

export default TargetaCurso;
