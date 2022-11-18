import { TYPES } from "../actions/actions";

export const shoppingInitialState = {
  products: [
    {
      id: 1,
      name: "Pasta primavera",
      url:
        "https://aprende.com/wp-content/uploads/2020/02/iStock-1142869361.jpg",
      price: 100,
      discount: 80,
    },
    {
      id: 2,
      name: "Pechuga con verduras",
      url:
        "https://i.pinimg.com/originals/5e/0b/71/5e0b7184d7a18dd84cb26d49c7f19c21.jpg",
      price: 120,
      discount: 100,
    },
    {
      id: 3,
      name: "Tarta de zapallitos",
      url:
        "https://www.cucinare.tv/wp-content/uploads/2021/04/20210416_110328-1-596x384.jpg",
      price: 115,
      discount: 80,
    },
    {
      id: 4,
      name: "Torrejitas de verdura",
      url:
        "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/05/comidas-saludables-para-15-dias.jpg",
      price: 95,
      discount: 75,
    },
    {
      id: 5,
      name: "Sopa hamusta",
      url: "https://okdiario.com/img/recetas/2016/12/18/sopa-hamusta.jpg",
      price: 110,
      discount: 95,
    },
    {
      id: 6,
      name: "Milanesa napolitana con fritas",
      url:
        "https://www.196flavors.com/wp-content/uploads/2018/12/milanesa-7-FP-500x500.jpg",
      price: 160,
      discount: 140,
    },
    {
      id: 7,
      name: "Tacos de carne",
      url:
        "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/09/receta-tacos-de-chorizo-con-nopales.jpg",
      price: 180,
      discount: 165,
    },
    {
      id: 8,
      name: "Arroz",
      url:
        "https://cocina-casera.com/wp-content/uploads/2017/05/arroz_pollo.jpg",
      price: 175,
      discount: 150,
    },
    {
      id: 9,
      name: "Tortilla",
      url:
        "https://www.recetasderechupete.com/wp-content/uploads/2020/11/Tortilla-de-patatas-4.jpg",
      price: 200,
      discount: 185,
    },
    {
      id: 10,
      name: "Pasta con salsa roja",
      url:
        "https://food14.com/wp-content/uploads/2021/05/Receta-de-Pastas-Italianas-500x500.jpg",
      price: 195,
      discount: 160,
    },
    {
      id: 11,
      name: "Pizza con pepperoni",
      url:
        "https://st2.depositphotos.com/1692343/5636/i/950/depositphotos_56360353-stock-photo-hot-homemade-pepperoni-pizza.jpg",
      price: 210,
      discount: 180,
    },
    {
      id: 12,
      name: "Pizza muzzarella",
      url:
        "https://img.freepik.com/fotos-premium/pizza-mucho-queso-derretido_109285-10291.jpg?w=2000",
      price: 135,
      discount: 115,
    },
    {
      id: 13,
      name: "Pizza primavera",
      url:
        "https://images-gmi-pmc.edge-generalmills.com/fce31bdd-1931-4f30-adef-a5bac0864676.jpg",
      price: 205,
      discount: 185,
    },
    {
      id: 14,
      name: "Empanada de carne",
      url:
        "https://t2.rg.ltmcdn.com/es/posts/6/6/5/empanadas_de_carne_fritas_9566_orig.jpg",
      price: 300,
      discount: 250,
    },
    {
      id: 15,
      name: "Empanada de queso",
      url:
        "https://i.pinimg.com/originals/7c/61/44/7c6144766cfa3f28814f1d8bf0897d7f.jpg",
      price: 150,
      discount: 125,
    },
  ],
  cart: [
    {
      id: 1,
      name: "Pasta primavera",
      url:
        "https://aprende.com/wp-content/uploads/2020/02/iStock-1142869361.jpg",
      price: 100,
      discount: 80,
      quantity: 1,
    },
    {
      id: 2,
      name: "Pasta primavera",
      url:
        "https://aprende.com/wp-content/uploads/2020/02/iStock-1142869361.jpg",
      price: 100,
      discount: 80,
      quantity: 1,
    },
  ],
};

export function shoppingReducer(state, action) {
  console.log("se activo el shoppingreducer");
  console.log("state ", state);
  console.log("action", action);
  switch (action.type) {
    case TYPES.READ_STATE: {
      return {
        ...state,
        products: action.payload[0],
        cart: action.payload[1],
      };
    }
    case TYPES.ADD_TO_CART: {
      const newItem = state.products.find(
        (product) => product.id === action.payload
      );
      console.log("newitem", newItem);
      const itemInCart = state.cart.find((item) => item.id === newItem.id);
      console.log("itemincart", itemInCart);
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
