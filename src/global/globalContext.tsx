import { createContext, useState } from "react";
import { TCurso, cursos as cursosValue } from "../assets/servicios/cursos";
import { TEquipo, equipo as equipoValue } from "../assets/servicios/Equipo";
type tGlobal = {
  cursos: TCurso[];
  equipo: TEquipo[];
};

const initialContext: tGlobal = {
  cursos: [],
  equipo: [],
};

const globalContext = createContext<tGlobal>(initialContext);

function ContextProvider({ children }: { children: JSX.Element }) {
  const [cursos] = useState(cursosValue);
  const [equipo] = useState(equipoValue);

  const data = { cursos, equipo };
  return (
    <globalContext.Provider value={data}>{children}</globalContext.Provider>
  );
}

export { ContextProvider, globalContext };
