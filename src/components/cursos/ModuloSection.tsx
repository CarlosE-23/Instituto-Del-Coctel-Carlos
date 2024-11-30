import "./ModuloSection.style.css";
import Modulo from "./Modulo";
import { TCurso } from "../../assets/servicios/cursos";

type TProps = {
  curso: TCurso;
  efecto: "mostrar" | "ocultar";
};

function ModuloSection(props: TProps) {
  const { curso, efecto } = props;
  return (
    <section id="modulos-section" className={`${efecto}`}>
      <Modulo modulo={curso.modulos.basico} />
      <Modulo modulo={curso.modulos.avanzado} />
    </section>
  );
}

export default ModuloSection;
