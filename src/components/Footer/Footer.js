import React from "react";
import "./footer.css";
import imagen from "./images/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <span
          style={{ backgroundImage: `url(${imagen})`, backgroundSize: 110 }}
          className="logoFooter"
        ></span>

        <ul className="listF">
          <li className="titleF">Ocaciones </li>

          <a href="google.com">Trabajando desde casa</a>
          <a href="google.com">Merienda</a>
          <a href="google.com">Desayuno</a>
        </ul>

        <ul className="listF">
          <li className="titleF">Categorias</li>

          <a href="google.com">Cocina</a>
          <a href="google.com">Desayunos</a>
          <a href="google.com">Condimentos</a>
          <a href="google.com">Bebidas</a>
        </ul>

        <ul className="listF">
          <li className="titleF">Regalos & PAquetes</li>

          <a href="google.com">Dulce especial</a>
          <a href="google.com">Box pasteleria</a>
          <a href="google.com">Box picante </a>
        </ul>

        <ul className="listF mapFooter">
          <li className="titleF titleLocation">Ubicacion</li>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.218855333479!2d-3.607488884914922!3d37.076094059820626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fa9913a33da7%3A0x7778885ab9d59ed7!2sRestaurante%20Casa%20Ana%20Las%20Mimbres!5e0!3m2!1ses-419!2ses!4v1665838616283!5m2!1ses-419!2ses"
            width="500"
            height="250"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="map"
            className="mapOnly"
          />
        </ul>
      </footer>
    </>
  );
};

export default Footer;
