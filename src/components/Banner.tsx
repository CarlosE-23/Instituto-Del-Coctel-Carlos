import "./Banner.style.css";

function HomeBanner() {
  return (
    <div className="banner">
      <div className="titulo">
        <h1>CURSOS DE BARTENDER Y BARISTA</h1>
        <p>
          <i>Transforma tu pasión en profesión</i>
        </p>
      </div>
      <div className="extra">
        <div>
          <h2>+7</h2>
          <p>Años de experiencia</p>
        </div>
        <div>
          <h2>159</h2>
          <p>Clientes felices</p>
        </div>
        <div>
          <h2>18</h2>
          <p>Docentes</p>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
