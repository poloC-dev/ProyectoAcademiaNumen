import React, { useEffect, useState, useReducer } from "react";
import { shoppingInitialState, shoppingReducer } from "../../reducer/reducer";
import "primeicons/primeicons.css";
import "./Productos.css";
import { TYPES } from "../../actions/actions";
import Producto from "./Producto";
import axios from "axios";

const Productos = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const [data, setData] = useState([]);

  const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id });

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://numen-react-vercel-server.vercel.app/products"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Productos en oferta</h2>
      <div className="box grid-responsive">
        {data.map((product) => (
          <Producto key={product.id} data={product} addToCart={addToCart} />
        ))}
        ,
      </div>
    </>
  );
};

export default Productos;
