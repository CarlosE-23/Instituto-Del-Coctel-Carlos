import "./Nosotros.style.css";

function Nosotros() {
  return (
    <section id="sobre-nosotros">
      <div className="nosotros-texto">
        <h2 className="titulo">Sobre nosotros</h2>
        <p className="texto-primario">
          En el Instituto del Cóctel Carlos, somos un grupo apasionado de
          expertos en coctelería y barismo dedicados a compartir nuestro amor
          por las bebidas y la cultura que las rodea. Fundado con la visión de
          elevar el arte de la coctelería y el barismo, nuestro instituto se ha
          convertido en un referente en la formación de profesionales y
          aficionados en el mundo de las bebidas.
        </p>
      </div>
      <div className="img-container">
        <img
          src="https://haciendasantateresa.com.ve/wp-content/uploads/2024/01/LO100097.jpg"
          alt="Nosotros"
        />
      </div>
    </section>
  );
}

export default Nosotros;
