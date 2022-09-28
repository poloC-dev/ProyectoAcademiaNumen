import React, { useRef, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import emailjs from "emailjs-com";
import Tittle from "../Seccion1/Tittle";
import "aos/dist/aos.css";
import AOS from "aos";

export const Contacto = () => {
  useEffect(() => {
    AOS.init();
    console.log("Hola");
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_un6xokh",
        "template_vxxqlsa",
        form.current,
        "HYNG1pty_fFWH6v-N"
      )
      .then(
        (result) => {
          alert("Message sended!!");
          console.log(result.text);
        },
        (error) => {
          alert("Cant send email, sorry!");
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const tittleTextColor = "your opinion!";
  const tittleTextBlack = "Leave us ";

  return (
    <section
      data-aos="fade-down"
      data-aos-duration="2000"
      id="contacto"
      className="flex flex-column mx-auto p-3 h-full justify-content-center bg-gray-100"
    >
      <div className="align-self-center">
        <Tittle
          className="text-4xl"
          color={tittleTextColor}
          nocolor={tittleTextBlack}
        />
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-column justify-content-center align-items-center p-1 mt-2 border-round"
      >
        <div className="flex flex-column py-3 col-12 md:col-10 lg:col-6">
          <span className="p-float-label p-input-icon-right">
            <InputText
              name="name"
              className="w-12 "
              pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
              required
            />
            <label htmlFor="name">Your name </label>
            <i className="pi pi-user" />
          </span>
        </div>
        <div className="flex flex-column py-3 col-12 md:col-10 lg:col-6">
          <span className="p-float-label p-input-icon-right">
            <InputText
              name="email"
              className="w-12"
              pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
              required
            />
            <label htmlFor="email">Your email</label>
            <i className="pi pi-envelope" />
          </span>
        </div>
        <div className="flex flex-column py-3 col-12 md:col-10 lg:col-6">
          <span className="p-float-label">
            <InputTextarea
              name="message"
              className="w-12"
              style={{ resize: "none", height: "150px" }}
              required
            />
            <label htmlFor="message">Message</label>
          </span>
        </div>
        <Button
          className="my-2 p-button-raised col-12 md:col-6 lg:col-6 "
          type="submit"
          value="Send"
          label="Send"
        />
      </form>
    </section>
  );
};

export default Contacto;
