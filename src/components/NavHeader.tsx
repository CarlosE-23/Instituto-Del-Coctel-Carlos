import { useEffect, useState } from "react";
import letterUpercase from "../helpers/letterUppercase";
import { TSearchElements } from "./Header";
import handleSearchSection from "../helpers/handleSerchSection";

type TProps = {
  searchElements: TSearchElements;
  efectoHeader: boolean;
};

function NavHeader(props: TProps) {
  const { efectoHeader } = props;
  const { searchElements } = props;
  const [efectoOcultar, setEfectoOcular] = useState(false);

  useEffect(() => {
    let prevScrollY = 0;
    const handleScroll = () => {
      if (window.scrollY > prevScrollY) setEfectoOcular(true);
      else setEfectoOcular(false);
      prevScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="nav-header-container">
      <nav
        className={`nav-header ${efectoHeader && "efecto-header"} ${
          efectoOcultar && "efecto-ocultar"
        }`}
      >
        {searchElements.map((el) => (
          <a
            className="texto-nav"
            href={el.title}
            data-direction={el.direction}
            key={el.title}
            onClick={handleSearchSection}
          >
            {letterUpercase(el.title)}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default NavHeader;
