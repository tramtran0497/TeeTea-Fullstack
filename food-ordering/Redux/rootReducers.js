import { combineReducers } from 'redux';
import cartReducer from './Cart/reducer';
import fetchProductReducer from './FetchData/fetchData-reducer';
import fetchEventsReducer from './FetchEvents/fetchEvents-reducer';
import fetchJobsReducer from './FetchJobs/fetchJobs-reducer';
import fetchNewsReducer from './FetchNews/fetchNews-reducer';
import fetchOneProductReducer from './FetchOneProduct/fetchOneProduct-reducer';
import loveReducer from './Love/reducer';
import loggedInReducer from './User/Auth/reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  fetchProduct: fetchProductReducer,
  love: loveReducer,
  fetchNews: fetchNewsReducer,
  fetchEvents: fetchEventsReducer,
  fetchJobs: fetchJobsReducer,
  fetchOneProduct: fetchOneProductReducer,
  userLoggedIn: loggedInReducer,
});

export default rootReducer;
