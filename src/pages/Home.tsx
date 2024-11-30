import Footer from "../components/Footer";
import Header, { TSearchElements } from "../components/Header";
import Eligenos from "../components/home/Eligenos";
import Equipo from "../components/home/Equipo";
import HomeBanner from "../components/Banner";
import Nosotros from "../components/home/Nosotros";
import Servicios from "../components/home/Servicios";
import "./Home.style.css";
import { useEffect } from "react";

function Home() {
  const searchElements: TSearchElements = [
    { direction: "servicios", title: "servicios" },
    { direction: "sobre-nosotros", title: "nosotros" },
    { direction: "eligenos", title: "eligenos" },
    { direction: "equipo", title: "equipo" },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div id="home">
      <Header searchElements={searchElements} />
      <HomeBanner />
      <main className="main">
        <Servicios />
        <Nosotros />
        <Eligenos />
        <Equipo />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
