import React, { useReducer } from "react";
import { TYPES } from "../../actions/actions";
import { shoppingInitialState, shoppingReducer } from "../../reducer/reducer";
import CartItem from "./CartItem";


const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { cart } = state;

  // la unica forma de pasarle el id a la funcion reductora es por medio del dispatch()
  // abro la propiedad action y uso el type correspondiente y en payload paso el id
  const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id });

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
    }
  };

  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });

  return (
    <>
      <h2>Carrito de Compras</h2>
      <h3> Carrito</h3>
      <div className="box">
        {cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            deleteFromCart={deleteFromCart}
            addToCart={addToCart}
          />
        ))}
      </div>
      <button onClick={clearCart}>Limpiar Carrito</button>
    </>
  );
};

export default ShoppingCart;
