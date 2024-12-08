import { NavLink } from "react-router-dom";
import "./Header.style.css";
import { useEffect, useState } from "react";
import NavHeader from "./NavHeader";
import { TbCircleLetterC } from "react-icons/tb";

export type TSearchElements = {
  title: string;
  direction: string;
}[];

type TProps = {
  searchElements: TSearchElements;
};

function Header(props: TProps) {
  const { searchElements } = props;
  const [efectoHeader, setEfectoHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setEfectoHeader(false);
      else setEfectoHeader(true);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header-container">
      <header className={`${efectoHeader && "efecto-header"}`}>
        <TbCircleLetterC size={30} color="#f1f2f6" />
        <nav className="texto-nav">
          <NavLink to="/">Inicio</NavLink>{" "}
          <NavLink to="/cursos">Cursos</NavLink>
        </nav>
      </header>
      <NavHeader searchElements={searchElements} efectoHeader={efectoHeader} />
    </div>
  );
}

export default Header;
