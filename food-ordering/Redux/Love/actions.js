import { LOVE } from './types';

export const love = (product) => {
  return {
    type: LOVE,
    payload: {
      name: product.name,
      id: product.id,
    },
  };
};
