import React, { useRef, useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import emailjs from "emailjs-com";
import Tittle from "../Seccion1/Tittle";

export const Contacto = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const renderAlert = () => {
    return (
      <div className="p-3 mb-3 bg-blue-100 text-blue-700 border-round">
        <p>su mensaje se envió satisfactoriamente</p>
      </div>
    );
  };
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
          setStatus("SUCCESS");
          console.log(result);
        },
        (error) => {
          alert("Cant send email, sorry!");
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const tittleTextColor = "tu opinion!";
  const tittleTextBlack = "Dejanos ";

  return (
    <section className="flex flex-column mx-auto p-3 h-full justify-content-center bg-gray-100">
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
        {status && renderAlert()}
        <div className="flex flex-column py-3 col-12 md:col-10 lg:col-6">
          <span className="p-float-label p-input-icon-right">
            <InputText
              name="name"
              className="w-12 "
              pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
              required
            />
            <label htmlFor="name">Nombre </label>
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
            <label htmlFor="email">Correo electronico</label>
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
            <label htmlFor="message">Mensaje</label>
          </span>
        </div>
        <Button
          className="my-2 p-button-raised p-button-warning col-12 md:col-6 lg:col-6 "
          type="submit"
          value="Send"
          label="Enviar"
        />
      </form>
    </section>
  );
};

export default Contacto;
