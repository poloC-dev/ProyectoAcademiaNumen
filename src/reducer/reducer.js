import { TYPES } from "../actions/actions";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "Producto A", price: 10 },
    { id: 2, name: "Producto B", price: 15 },
    { id: 3, name: "Producto C", price: 15 },
    { id: 4, name: "Producto D", price: 50 },
    { id: 5, name: "Producto E", price: 45 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  // ACTION contiene las acciones que voy a realizar y necesito el .type para acceder a ellas
  switch (action.type) {
    case TYPES.READ_STATE: {
      return {
        ...state,
        products: action.payload[0],
        cart: action.payload[1],
      };
    }
    case TYPES.ADD_TO_CART: {
      // me meto al estado y guardo el objeto que coincida con el id en el mapeo para poder agregarlo al carrito
      const newItem = state.products.find(
        (product) => product.id === action.payload
      );
      // busco si ya hay un item con el mismo id en el carrito
      const itemInCart = state.cart.find((item) => item.id === newItem.id);

      //   si encuentra un item igual en el carrito suma +1, sino lo agrega
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
      //   guardo una copia de state para no perder lo anterior y que no se rompa nada
      //   despues en el cart guardo una copia de state.cart que seria lo que habia en el carrito previamente para no perder la data
      //   le seteo una variable cantidad para contar
    }
    case TYPES.REMOVE_ONE_PRODUCT: {
      const itemToDelete = state.cart.find(
        (item) => item.id === action.payload
      );

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }

    case TYPES.REMOVE_ALL_PRODUCTS: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }

    case TYPES.CLEAR_CART: {
      return shoppingInitialState;
    }

    default:
      return state;
  }
}
