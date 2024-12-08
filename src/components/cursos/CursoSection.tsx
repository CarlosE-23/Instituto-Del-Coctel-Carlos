import { TCurso } from "../../assets/servicios/cursos";
import "./CursoSection.style.css";
import bgBarismo from "../../assets/tarjeta-barismo.avif";
import bgCocteleria from "../../assets/tarjeta-cocteleria.avif";

type TProps = {
  curso: TCurso;
  isCocteleria: boolean;
  setIsCocteleria: React.Dispatch<React.SetStateAction<boolean>>;
  efecto: "mostrar" | "ocultar";
  setEfecto: React.Dispatch<React.SetStateAction<"mostrar" | "ocultar">>;
};

function CursoSection(props: TProps) {
  const { curso, setIsCocteleria, isCocteleria, efecto, setEfecto } = props;

  const handleNav = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const nombreCurso = e.currentTarget.dataset.curso;
    setEfecto("ocultar");
    await new Promise((resolve) => {
      setTimeout(resolve, 300);
    });
    setEfecto("mostrar");
    if (nombreCurso === "cocteleria") setIsCocteleria(true);
    if (nombreCurso === "barismo") setIsCocteleria(false);
  };

  return (
    <div className={`section-curso ${efecto}`}>
      <div className="section-curso-content">
        <nav className="cursos-disponibes">
          <li
            className={`titulo-secundario ${isCocteleria && "active"}`}
            data-curso="cocteleria"
            onClick={handleNav}
          >
            Coctelería
          </li>
          <li
            className={`titulo-secundario ${!isCocteleria && "active"}`}
            data-curso="barismo"
            onClick={handleNav}
          >
            Barismo
          </li>
        </nav>
        <div className="curso-info">
          <img
            src={isCocteleria ? bgCocteleria : bgBarismo}
            alt={`${isCocteleria ? "coctel" : "cafe"}`}
          />
          <div className="curso-descripcion">
            <h2 className="titulo">{curso.nombre}</h2>
            <p className="texto-primario">{curso.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CursoSection;
