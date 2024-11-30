import { useContext, useEffect, useState } from "react";
import "./CursoSection.style.css";
import MostrarCursoEscritorio from "./MostrarCursoEscritorio";
import { globalContext } from "../../global/globalContext";
import MostrarCursoMobile from "./MostrarCursoMobil";
import { TCurso } from "../../assets/servicios/cursos";

type TProps = {
  curso: TCurso;
  isCocteleria: boolean;
  setIsCocteleria: React.Dispatch<React.SetStateAction<boolean>>;
  efecto: "mostrar" | "ocultar";
  setEfecto: React.Dispatch<React.SetStateAction<"mostrar" | "ocultar">>;
};

function CursoSection(props: TProps) {
  const { curso, isCocteleria, setIsCocteleria, efecto, setEfecto } = props;
  const { cursos } = useContext(globalContext);
  const [isDesk, setIsDesk] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 900px)");
    const handleMedia = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) setIsDesk(false);
      else setIsDesk(true);
    };
    media.addEventListener("change", handleMedia);
    handleMedia(media);

    return () => {
      media.removeEventListener("change", handleMedia);
    };
  }, []);

  return (
    <section id="curso-section" className="curso-section">
      {isDesk ? (
        <MostrarCursoEscritorio
          setEfecto={setEfecto}
          cursos={cursos}
          curso={curso}
          setIsCocteleria={setIsCocteleria}
        />
      ) : (
        <MostrarCursoMobile
          curso={curso}
          isCocteleria={isCocteleria}
          setIsCocteleria={setIsCocteleria}
          efecto={efecto}
          setEfecto={setEfecto}
        />
      )}
    </section>
  );
}

export default CursoSection;
