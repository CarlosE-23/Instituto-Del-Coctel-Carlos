import { useRef } from "react";
import { TCurso } from "../../assets/servicios/cursos";
import "./MostrarCursoMobil.style.css";

type TProps = {
  curso: TCurso;
  isCocteleria: boolean;
  setIsCocteleria: React.Dispatch<React.SetStateAction<boolean>>;
  efecto: "mostrar" | "ocultar";
  setEfecto: React.Dispatch<React.SetStateAction<"mostrar" | "ocultar">>;
};

function MostrarCursoMobile(props: TProps) {
  const { curso, setIsCocteleria, isCocteleria, efecto, setEfecto } = props;
  const refLiCocteleria = useRef<HTMLLIElement | null>(null);
  const refLiBarismo = useRef<HTMLLIElement | null>(null);

  const handleNav = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const nombreCurso = e.currentTarget.dataset.curso;
    setEfecto("ocultar");
    await new Promise((resolve) => {
      setTimeout(resolve, 300);
    });
    setEfecto("mostrar");
    if (nombreCurso === "cocteleria") {
      setIsCocteleria(true);
      refLiCocteleria.current?.classList.add("active");
      refLiBarismo.current?.classList.remove("active");
    }
    if (nombreCurso === "barismo") {
      setIsCocteleria(false);
      refLiBarismo.current?.classList.add("active");
      refLiCocteleria.current?.classList.remove("active");
    }
  };
  return (
    <div className={`elige-curso-mobil-container ${efecto}`}>
      <nav className="cursos-disponibes">
        <li data-curso="cocteleria" onClick={handleNav} ref={refLiCocteleria}>
          Coctelería
        </li>
        <li data-curso="barismo" onClick={handleNav} ref={refLiBarismo}>
          Barismo
        </li>
      </nav>
      <div className="curso-info">
        <img
          src={`./src/assets/${
            isCocteleria ? "coctel-img.png" : "cafe-img.webp"
          }`}
          alt={`${isCocteleria ? "coctel" : "cafe"}`}
        />
        <div className="curso-descripcion">
          <h2>{curso.nombre}</h2>
          <p>{curso.descripcion}</p>
        </div>
      </div>
    </div>
  );
}

export default MostrarCursoMobile;
