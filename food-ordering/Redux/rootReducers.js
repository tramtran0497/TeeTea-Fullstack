import { combineReducers } from "redux";
import cartReducer from "./Cart/reducer";
import fetchProductReducer from "./FetchData/fetchData-reducer";
import loveReducer from "./Love/reducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    fetchProduct: fetchProductReducer,
    love: loveReducer
  }
);

export default rootReducer;