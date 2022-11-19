import React from "react";
import "./RedesList.css";
import messenger from "./resources/messenger.svg";
import "primeicons/primeicons.css";

const RedesList = () => {
  return (
    <div className="social-container bg-pattern">
      <p className="redes-p">Dile a un amigo!</p>
      <div className="social-icons">
        <a href="/" className="icons">
          <i className="pi pi-facebook" style={{ fontSize: "32px" }}></i>
        </a>
        <a href="/" className="icons">
          <i className="pi pi-instagram" style={{ fontSize: "32px" }}></i>
        </a>
        <a href="/" className="icons">
          <i className="pi pi-twitter" style={{ fontSize: "32px" }}></i>
        </a>
        <a href="/" className="icons">
          <i className="pi pi-whatsapp" style={{ fontSize: "32px" }}></i>
        </a>
      </div>
    </div>
  );
};

export default RedesList;
