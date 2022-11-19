import "primeicons/primeicons.css";
import "./Navbar.css";
import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/context";
import CarritoModal from "../Carrito/CarritoModal";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [openModal, setOpenModal] = useState(false);
  const { cart } = useContext(CartContext);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <>
      <div className="navcontainer">
        <img
          className="logo"
          alt="Logo"
          src={require("../Footer/images/logo.png")}
        />
        <nav>
          {(toggleMenu || screenWidth > 500) && (
            <div className="list">
              <div className="items">Inicio</div>

              <div className="items">Productos</div>

              <button
                onClick={() => {
                  setOpenModal(true);
                }}
                className="nav-bag items"
              >
                <i
                  className="pi pi-shopping-cart"
                  style={{ fontSize: "2rem" }}
                ></i>
                <span className="bag-quantity">
                  <span>{cart.length > 0 ? cart.length : 0}</span>
                </span>
              </button>
            </div>
          )}

          <button onClick={toggleNav} className="btn">
            <i className="pi pi-bars"></i>
          </button>
        </nav>
      </div>
      <CarritoModal
        titulo="Carrito"
        mostrarHeader={true}
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      />
    </>
  );
}
