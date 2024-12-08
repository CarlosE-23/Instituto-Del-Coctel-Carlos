import "./Eligenos.style.css";

function Eligenos() {
  return (
    <section id="eligenos">
      <h2 className="titulo">¿Por qué elegirnos?</h2>
      <div className="razones">
        <div>
          <div className="number-container">
            <h3 className="number titulo-secundario">1</h3>
          </div>
          <h3 className="razon titulo-secundario">Formación Integral</h3>
          <p className="texto-primario">
            Nuestros cursos de Coctelería y Barismo ofrecen una formación
            completa, desde fundamentos hasta técnicas avanzadas, preparando a
            los estudiantes para el mundo laboral.
          </p>
        </div>
        <div>
          <div className="number-container">
            <h3 className="number titulo-secundario">2</h3>
          </div>
          <h3 className="razon titulo-secundario">Experiencia Práctica</h3>
          <p className="texto-primario">
            Los módulos incluyen contenido práctico que permite a los
            estudiantes aplicar lo aprendido en situaciones reales, mejorando su
            confianza y competitividad.
          </p>
        </div>
        <div>
          <div className="number-container">
            <h3 className="number titulo-secundario">3</h3>
          </div>
          <h3 className="razon titulo-secundario">Desarrollo Profesional</h3>
          <p className="texto-primario">
            Al finalizar, los estudiantes tendrán conocimientos y habilidades
            prácticas que les ayudarán a destacarse en la industria, además de
            apoyo en la búsqueda de empleo y networking.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Eligenos;
