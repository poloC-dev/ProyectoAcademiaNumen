import React from "react";
import { createContext, useReducer } from "react";
import { TYPES } from "../actions/actions";
import { shoppingInitialState, shoppingReducer } from "../reducer/reducer";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const value = {
    products: state.products,
    cart: state.cart,
    addToCart: (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id }),
    deleteFromCart: (id, all = false) => {
      if (all) {
        dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
      } else {
        dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
      }
    },

    clearCart: () => dispatch({ type: TYPES.CLEAR_CART }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContextProvider;
