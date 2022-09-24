import React, { useRef,useState } from "react";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import emailjs from "emailjs-com";
import Tittle from "../Seccion1/Tittle";

export const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const tittleTextColor = "your opinion!";
  const tittleTextBlack = "Leave us ";

  return (
    <section id="contacto" className="flex flex-column m-3 h-screen justify-content-center">
      <div className="align-self-center">
        <Tittle className="text-4xl" color={tittleTextColor} nocolor={tittleTextBlack} />
      </div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-column justify-content-center align-items-center p-1 mt-2 border-round">
        <div className="flex flex-column py-3 col-12 md:col-6 lg:col-6">
          <span className="p-float-label p-input-icon-right">
            <InputText id="name" className="w-12 " pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required/>
            <label htmlFor="name" >Your name </label>
            <i className="pi pi-user" />
          </span>
        </div>
        <div  className="flex flex-column py-3 col-12 md:col-6 lg:col-6">
        <span className="p-float-label p-input-icon-right">
            <InputText id="email" className="w-12" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required/>
            <label htmlFor="email" >Your email</label>
            <i className="pi pi-envelope" />
          </span>
        </div>
        <div  className="flex flex-column py-3 col-12 md:col-6 lg:col-6">
        <span className="p-float-label">
            <InputTextarea id="message" className="w-12" style={{resize:"none", height:"150px"}} required />
            <label htmlFor="message">Message</label>
          </span>
        </div>
        <Button className="my-2 p-button-raised col-12 md:col-6 lg:col-6 " type="submit" value="Send" label="Send" /> 
      </form>
    </section>
  );
};

export default Contacto;
