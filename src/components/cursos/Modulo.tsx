type TProps = {
  modulo: {
    titulo: string;
    duracion: string;
    contenido: {
      tema: string;
      aprendizaje: string;
    }[];
  };
};

function Modulo(props: TProps) {
  const { modulo } = props;

  return (
    <div className="modulo">
      <div className="title">
        <h2 className="titulo">{modulo.titulo}</h2>
        <p className="texto-primario duracion">{modulo.duracion}</p>
      </div>
      <div className="contenido">
        <table>
          <thead>
            <tr>
              <th className="titulo-secundario">Tema</th>
              <th className="titulo-secundario">Aprendizaje</th>
            </tr>
          </thead>
          <tbody>
            {modulo.contenido.map((el) => (
              <tr key={el.tema}>
                <td className="texto-primario">{el.tema}</td>
                <td className="texto-primario">{el.aprendizaje}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Modulo;
