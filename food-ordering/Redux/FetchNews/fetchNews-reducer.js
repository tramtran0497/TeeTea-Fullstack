import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE } from './fetchNews-types.js';

const INITIAL_STATE = {
  loading: false,
  success: false,
  listNews: [],
  error: '',
};

function fetchNewsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        listNews: action.data,
      };
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.message,
      };
    default:
      return state;
  };
};

export default fetchNewsReducer;
