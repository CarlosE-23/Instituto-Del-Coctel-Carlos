import { TEquipo } from "../../assets/servicios/Equipo";

function TarjetaEquipo(props: { persona: TEquipo }) {
  const { frase, img, nombre, trabajo } = props.persona;
  return (
    <div data-frase={frase} className="tarjeta-equipo">
      <img src={img} alt={nombre} className="img-usuario" />
      <h3 className="nombre">{nombre}</h3>
      <p className="trabajo">{trabajo}</p>
    </div>
  );
}

export default TarjetaEquipo;
