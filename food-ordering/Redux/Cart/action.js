import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const addToCart = (product) => {
  console.log("Action", product)
  return {
    type: ADD_TO_CART,
    payload: {
        id: product.id,
        name: product.name,
        img: product.img,
        size: product.size,
        price: product.price,
        note: product.note,
        qty: product.qty,
        listAddIngredient: product.listAddIngredient,
    },
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
        id: product.id,
        name: product.name,
    },
  };
};