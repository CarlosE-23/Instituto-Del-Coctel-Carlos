import "./ContenidoSection.style.css";

type TProps = {
  objetivos: string[];
  beneficios: string[];
  salidasLaborales: string[];
  efecto: "ocultar" | "mostrar";
};

function ContenidoSection(props: TProps) {
  const { beneficios, objetivos, salidasLaborales, efecto } = props;
  return (
    <section id="contenido-section" className={`${efecto}`}>
      <div className="objetivos">
        <h2 className="titulo-secundario">Objetivos</h2>
        {objetivos.map((el) => (
          <p className="texto-primario" key={crypto.randomUUID()}>
            {el}
          </p>
        ))}
      </div>
      <div className="beneficios">
        <h2 className="titulo-secundario">Beneficios</h2>
        {beneficios.map((el) => (
          <p className="texto-primario" key={crypto.randomUUID()}>
            {el}
          </p>
        ))}
      </div>
      <div className="salidas-laborales">
        <h2 className="titulo-secundario">Salidas Laborales</h2>
        {salidasLaborales.map((el) => (
          <p className="texto-primario" key={crypto.randomUUID()}>
            {el}
          </p>
        ))}
      </div>
    </section>
  );
}

export default ContenidoSection;
