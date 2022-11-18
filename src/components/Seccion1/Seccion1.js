import React, { useEffect } from "react";
import imagen from "./Assets/huerta.jpg";
import { Button } from "primereact/button";
import Tittle from "./Tittle";
import Subtittle from "./Subittle";
import "aos/dist/aos.css";
import AOS from "aos";

const frases = [
  {
    id: 1,
    description:
      "Porque nos conecta con la tierra en la que vivimos y con las personas que viven aquí.",
  },
  {
    id: 2,
    description:
      "Porque es más significativo cocinar y comer algo hecho por una persona cercana que por una corporación distante.",
  },
  {
    id: 3,
    description:
      "Porque la buena comida local hace de nuestro rincón del mundo un lugar mejor para vivir.",
  },
  {
    id: 4,
    description: "Porque es apoyar empleos locales.",
  },
  {
    id: 5,
    description: "Porque tiene más sentido para el medio ambiente.",
  },
];
const buttonText = "Descubre a nuestros productores";
const tittleTextColor = "tu plato?";
const tittleTextBlack = "Quien hace ";
const subtittleText =
  "Nuestra misión es ayudar a hacer crecer el ecosistema alimentario local en Argentina. ¿Por qué?";

const Seccion1 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      id="seccion1"
      className="grid mx-auto p-2 md:my-2 lg:my-4"
    >
      <div className="col-12 pl- mb-3 md:pl-5 md:mb-3 md:col-12 lg:col-6 lg:mb-0">
        <Tittle color={tittleTextColor} nocolor={tittleTextBlack} />
        <Subtittle description={subtittleText} />
        {frases.map((item) => (
          <div className="flex p-3" key={item.id}>
            <i
              className="pi pi-check-circle pr-2 text-orange-500"
              style={{ fontSize: "1.5em" }}
            ></i>
            <p className="font-semibold">{item.description}</p>
          </div>
        ))}
        <Button label={buttonText} className="ml-3 p-button-warning" />
      </div>
      <div className="flex justify-content-center align-items-center col-12  md:col-12 lg:col-6">
        <img
          style={{ maxWidth: "600px" }}
          src={imagen}
          alt="huerta"
          className="w-11"
        />
      </div>
    </section>
  );
};

export default Seccion1;
