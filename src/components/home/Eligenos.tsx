import "./Eligenos.style.css";

function Eligenos() {
  return (
    <section id="eligenos">
      <h2>¿Por qué elegirnos?</h2>
      <div className="razones">
        <div>
          <h3 className="number">1</h3>
          <h3 className="razon">Formación Integral</h3>
          <p>
            Nuestros cursos de Coctelería y Barismo ofrecen una formación
            completa, desde fundamentos hasta técnicas avanzadas, preparando a
            los estudiantes para el mundo laboral.
          </p>
        </div>
        <div>
          <h2 className="number">2</h2>
          <h3 className="razon">Experiencia Práctica</h3>
          <p>
            Los módulos incluyen contenido práctico que permite a los
            estudiantes aplicar lo aprendido en situaciones reales, mejorando su
            confianza y competitividad.
          </p>
        </div>
        <div>
          <h2 className="number">3</h2>
          <h3 className="razon">Desarrollo Profesional</h3>
          <p>
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
