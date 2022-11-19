import React, { useContext } from "react";
import "primeicons/primeicons.css";
import "./Productos.css";
import Producto from "./Producto";
import { CartContext } from "../../context/context";

const Productos = () => {
  const { products, addToCart } = useContext(CartContext);

  return (
    <>
      <h2>Productos en oferta</h2>
      <div className="box grid-responsive">
        {products.map((product) => (
          <Producto key={product.id} data={product} addToCart={addToCart} />
        ))}
        ,
      </div>
    </>
  );
};

export default Productos;
