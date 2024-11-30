import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cursos from "./pages/Cursos";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
