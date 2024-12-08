import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Equipo.style.css";
import Slider from "react-slick";
import TarjetaEquipo from "./TarjetaEquipo";
import { useContext } from "react";
import { globalContext } from "../../global/globalContext";

function Equipo() {
  const { equipo } = useContext(globalContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2200,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="equipo">
      <h2>Conoce a nuestro equipo</h2>
      <Slider {...settings} className="lista-tarjetas">
        {equipo.map((persona) => (
          <TarjetaEquipo persona={persona} key={persona.nombre} />
        ))}
      </Slider>
    </section>
  );
}

export default Equipo;
