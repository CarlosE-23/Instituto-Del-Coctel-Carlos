import { useContext, useEffect, useState } from "react";
import Header, { TSearchElements } from "../components/Header";
import ContenidoSection from "../components/cursos/ContenidoSection";
import CursoSection from "../components/cursos/CursoSection";
import ModuloSection from "../components/cursos/ModuloSection";
import HomeBanner from "../components/Banner";
import "./Cursos.style.css";
import { globalContext } from "../global/globalContext";
import Footer from "../components/Footer";
import { TCurso } from "../assets/servicios/cursos";

function Cursos() {
  const searchElements: TSearchElements = [
    {
      direction: "curso-section",
      title: "cursos",
    },
    {
      direction: "contenido-section",
      title: "información",
    },
    {
      direction: "modulos-section",
      title: "modulos",
    },
  ];
  const { cursos } = useContext(globalContext);
  const [isCocteleria, setIsCocteleria] = useState(true);
  const [curso, setCurso] = useState<TCurso>({ ...cursos[0] });
  const [efecto, setEfecto] = useState<"mostrar" | "ocultar">("mostrar");

  useEffect(() => {
    isCocteleria ? setCurso({ ...cursos[0] }) : setCurso({ ...cursos[1] });
  }, [isCocteleria]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div id="cursos">
      <Header searchElements={searchElements} />
      <HomeBanner />
      <main className="main">
        <CursoSection
          curso={curso}
          efecto={efecto}
          isCocteleria
          setEfecto={setEfecto}
          setIsCocteleria={setIsCocteleria}
        />
        <ContenidoSection
          efecto={efecto}
          beneficios={curso.beneficios}
          objetivos={curso.objetivos}
          salidasLaborales={curso.salidasLaborales}
        />
        <ModuloSection efecto={efecto} curso={curso} />
      </main>
      <Footer />
    </div>
  );
}

export default Cursos;
