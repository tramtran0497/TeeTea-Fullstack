import { combineReducers } from 'redux';
import cartReducer from './Cart/reducer';
import fetchProductReducer from './FetchData/fetchData-reducer';
import fetchNewsReducer from './FetchNews/fetchNews-reducer';
import loveReducer from './Love/reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  fetchProduct: fetchProductReducer,
  love: loveReducer,
  fetchNews: fetchNewsReducer,
});

export default rootReducer;
