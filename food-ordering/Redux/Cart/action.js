import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: {
        id: product.id,
        name: product.name,
        des: product.des,
        img: product.img,
        size: product.size,
        price: product.price,
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
        des: product.des,
        img: product.img,
        size: product.size,
        price: product.price,
        listAddIngredient: product.listAddIngredient,
    },
  };
};