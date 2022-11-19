import React, { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../../context/context";
import { Button } from "primereact/button";
import "./Carrito.css";
import "primeicons/primeicons.css";

const CarritoModal = ({ open, onClose, titulo = "Alerta", mostrarHeader }) => {
  if (!open) return null;
  const { cart, addToCart, deleteFromCart, clearCart } = useContext(
    CartContext
  );

  return (
    <>
      <div className="overlay">
        <div className="modalContainer">
          {mostrarHeader && (
            <div className="encabezadomodal">
              <h3> {titulo}</h3>
            </div>
          )}
          <button className="cerrar" onClick={onClose}>
            <i className="pi pi-times"></i>
          </button>
          <div className="flex flex-row flex-wrap">
            {cart.map((item, index) => (
              <CartItem
                key={index}
                data={item}
                deleteFromCart={deleteFromCart}
                addToCart={addToCart}
              />
            ))}
          </div>
          <Button className="p-button-warning p-c mr-3" onClick={clearCart}>
            Limpiar Carrito
          </Button>
          <Button className="p-button-warning p-c">Comprar</Button>
        </div>
      </div>
    </>
  );
};

export default CarritoModal;
