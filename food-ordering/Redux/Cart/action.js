import { ADD_TO_CART, REMOVE_FROM_CART, DELETE } from './types';

export const addToCart = (product, qty) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: product.id,
      name: product.name,
      image: product.image,
      size: product.size,
      price: product.price,
      note: product.note || 'Make my meal as normally',
      qty: qty,
      listAdds: product.extra,
    },
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: product.id,
      name: product.name,
      note: product.note,
    },
  };
};

export const deleteFormCart = (product) => {
  return {
    type: DELETE,
    payload: {
      id: product.id,
      note: product.note,
    },
  };
};
