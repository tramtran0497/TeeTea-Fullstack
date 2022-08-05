import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
} from './fetchEvents-types';

const INITIAL_STATE = {
  loading: false,
  success: false,
  listEvents: [],
  error: '',
};

function fetchEventsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_EVENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        listEvents: action.data,
      };
    case FETCH_EVENTS_FAILURE:
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

export default fetchEventsReducer;
