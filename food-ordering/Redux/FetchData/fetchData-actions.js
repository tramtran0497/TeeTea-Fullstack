import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './fetchData-types.js';

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_DATA_REQUEST,
    });
    const url = `https://teetea-api.herokuapp.com/products`;
    const responseAPI = await fetch(url);
    const responseJSON = await responseAPI.json();
    const listProducts = responseJSON.map((product) => {
      return {
        id: product._id,
        name: product.name,
        type: product.type,
        size: product.size,
        price: product.price,
        description: product.description,
        ingredients: product.ingredients,
        extra: product.extra,
        image: product.image,
      };
    });
    dispatch({
      type: FETCH_DATA_SUCCESS,
      data: listProducts,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_DATA_FAILURE,
      message: error,
    });
  }
};
