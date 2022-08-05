import {
  FETCH_ONE_PRODUCT_FAILURE,
  FETCH_ONE_PRODUCT_SUCCESS,
  FETCH_ONE_PRODUCT_REQUEST,
} from './fetchOneProduct-types';

export const fetchOneProduct = (productId) => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_ONE_PRODUCT_REQUEST,
    });
    const url = `https://teetea-api.herokuapp.com/product/${productId}`;
    const responseAPI = await fetch(url);
    const responseJSON = await responseAPI.json();
    const product = {
      ...responseJSON,
      id: responseJSON._id,
    };
    dispatch({
      type: FETCH_ONE_PRODUCT_SUCCESS,
      data: product,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_ONE_PRODUCT_FAILURE,
      message: error,
    });
  }
};
