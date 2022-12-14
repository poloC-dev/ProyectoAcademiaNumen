import React, { useEffect } from "react";
import Tittle from "../Seccion1/Tittle";
import CardList from "./CardList";
import "aos/dist/aos.css";
import AOS from "aos";

const Iconos = () => {
  const tittleTextColor = "nuesto restaurant?";
  const tittleTextBlack = "Por que elegir";
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      data-aos="fade-down"
      data-aos-duration="1500"
      id="iconos"
      className="flex flex-column justify-content-center align-items-center my-3"
    >
      <div className="mb-4">
        <Tittle color={tittleTextColor} nocolor={tittleTextBlack} />
      </div>
      <CardList />
    </section>
  );
};

export default Iconos;
