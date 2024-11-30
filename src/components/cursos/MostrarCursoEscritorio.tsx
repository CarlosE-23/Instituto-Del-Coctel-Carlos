import { TCurso } from "../../assets/servicios/cursos";
import "./MostrarCursoEscritorio.style.css";
import { useRef, memo } from "react";

type TProps = {
  cursos: TCurso[];
  curso: TCurso;
  setEfecto: React.Dispatch<React.SetStateAction<"mostrar" | "ocultar">>;
  setIsCocteleria: React.Dispatch<React.SetStateAction<boolean>>;
};

const MostrarCursoEscritorio = memo(function MostrarCursoEscritorio(
  props: TProps
) {
  const { cursos, curso, setIsCocteleria, setEfecto } = props;
  const refContainer = useRef<HTMLDivElement>(null);
  const refOverlayBtn = useRef<HTMLButtonElement>(null);

  const handleOverlayBtn = () => {
    refContainer.current?.classList.toggle("right-panel-active");
    refOverlayBtn.current?.classList.toggle("btnScaled");

    setEfecto("ocultar");
    setTimeout(() => {
      setEfecto("mostrar");
      setIsCocteleria(curso.nombre !== "Coctelería");
    }, 300);
  };

  return (
    <div className="elige-curso-escritorio-container" ref={refContainer}>
      {cursos.map((cursoItem, index) => (
        <div
          key={index}
          className={`pre-container ${cursoItem.nombre.toLowerCase()}-container`}
        >
          <div className="pre">
            <h1>{cursoItem.nombre}</h1>
            <span>{cursoItem.slogan}</span>
            <p>{cursoItem.descripcion}</p>
          </div>
        </div>
      ))}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Bienvenido</h1>
            <p>
              ¿Te gustaría el arte del café? <br /> ¡Entonces prueba nuestro
              curso profesional!
            </p>
            <button>Barismo</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>¡Hola!</h1>
            <p>
              ¿Lo tuyo son los cocteles? <br /> ¡Entonces prueba nuestro curso
              profesional!
            </p>
            <button>Coctelería</button>
          </div>
        </div>
        <button
          id="overlayBtn"
          onClick={handleOverlayBtn}
          ref={refOverlayBtn}
        ></button>
      </div>
    </div>
  );
});

export default MostrarCursoEscritorio;
