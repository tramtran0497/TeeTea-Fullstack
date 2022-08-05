import {
  FETCH_ONE_PRODUCT_FAILURE,
  FETCH_ONE_PRODUCT_SUCCESS,
  FETCH_ONE_PRODUCT_REQUEST,
} from './fetchOneProduct-types';

const INITIAL_STATE = {
  loading: false,
  success: false,
  product: {},
  error: '',
};

function fetchOneProductReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_ONE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ONE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        product: action.data,
      };
    case FETCH_ONE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.message,
      };
    default:
      return state;
  }
}

export default fetchOneProductReducer;
