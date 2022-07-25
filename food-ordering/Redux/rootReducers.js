import { combineReducers } from "redux";
import cartReducer from "./Cart/reducer";
import fetchProductReducer from "./FetchData/fetchData-reducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    fetchProduct: fetchProductReducer
  }
);

export default rootReducer;