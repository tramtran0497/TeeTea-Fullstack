import { ADD_TO_CART, REMOVE_FROM_CART } from './types';

export const addToCart = (product) => {
  console.log("Action", product);
  return {
    type: ADD_TO_CART,
    payload: {
      id: product.id,
      name: product.name,
      image: product.image,
      size: product.size,
      price: product.price,
      note: product.note || 'Make my meal as normally',
      qty: product.qty,
      listAdds: product.extra,
    },
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: product._id,
      name: product.name,
    },
  };
};
