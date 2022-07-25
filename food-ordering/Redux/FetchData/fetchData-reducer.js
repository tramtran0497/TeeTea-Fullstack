import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
  } from "./fetchData-types.js";
  
  const INITIAL_STATE = {
    loading: false,
    success: false,
    listProducts: [],
    error: "",
  };
  
  function fetchProductReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          listProducts: action.data,
        };
      case FETCH_DATA_FAILURE:
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
  
  export default fetchProductReducer;