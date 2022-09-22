import { FETCH_POST_LOGIN_ERROR, FETCH_POST_LOGIN_LOADING, FETCH_POST_LOGIN_SUCCESS } from "./types";

const initialState = {
    userInfo: {},
    isLoading: false,
    error: "", 
    success: false
}

function loggedInReducer(state = initialState, action) {
    console.log("reducer", action.payload)
  switch (action.type) {
    case FETCH_POST_LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POST_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        userInfo: action.payload,
      };
    case FETCH_POST_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default loggedInReducer;
