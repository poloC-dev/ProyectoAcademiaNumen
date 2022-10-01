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
      "Because it connects us to the land we live on, and to the people who live here.",
  },
  {
    id: 2,
    description:
      "Because it's more meaningful to cook and eat something made by a person nearby than by some distant corporation.",
  },
  {
    id: 3,
    description:
      "Because good local food makes our corner of the world a better place to live.",
  },
  {
    id: 4,
    description: "Because it's support local jobs.",
  },
  {
    id: 5,
    description: "Because it makes more sense for the environment.",
  },
];

const buttonText = "Discover Our Producers";
const tittleTextColor = "Your Food?";
const tittleTextBlack = "Who Makes ";
const subtittleText =
  "Our mission is to help grow the local food ecosystem in BC and across Canada. Why?";

const Seccion1 = () => {
  useEffect(() => {
    AOS.init();
    console.log("Hola");
  }, []);

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      id="seccion1"
      className="grid mx-auto p-3 md:my-2 lg:my-4"
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
        <img src={imagen} alt="huerta" className="w-11" />
      </div>
    </section>
  );
};

export default Seccion1;
