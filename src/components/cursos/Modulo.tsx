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
        <h2>{modulo.titulo}</h2>
        <p className="duracion">{modulo.duracion}</p>
      </div>
      <div className="contenido">
        <table>
          <thead>
            <tr>
              <th>Tema</th>
              <th>Aprendizaje</th>
            </tr>
          </thead>
          <tbody>
            {modulo.contenido.map((el) => (
              <tr key={el.tema}>
                <td>{el.tema}</td>
                <td>{el.aprendizaje}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Modulo;
