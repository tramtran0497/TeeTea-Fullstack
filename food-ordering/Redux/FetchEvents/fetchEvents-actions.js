import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
} from './fetchEvents-types';

export const fetchEvents = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_EVENTS_REQUEST,
    });
    const url = `https://teetea-api.herokuapp.com/events`;
    
    const responseAPI = await fetch(url);
    const responseJSON = await responseAPI.json();
    const listEvents = responseJSON.map((event) => {
      return {
        id: event._id,
        title: event.title,
        firstWord: event.firstWord,
        image: event.image,
        description: event.description,
      };
    });
    dispatch({
      type: FETCH_EVENTS_SUCCESS,
      data: listEvents,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_EVENTS_FAILURE,
      message: error,
    });
  }
};
