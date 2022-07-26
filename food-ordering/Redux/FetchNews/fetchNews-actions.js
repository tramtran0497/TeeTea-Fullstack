import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE } from './fetchNews-types.js';

export const fetchNews = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_NEWS_REQUEST,
    });
    const url = `https://teetea-api.herokuapp.com/news`;
    const responseAPI = await fetch(url);
    const responseJSON = await responseAPI.json();
    const listNews = responseJSON.map((news) => {
      return {
        id: news._id,
        title: news.title,
        subtitle: news.subtitle,
        image: news.image,
      };
    });
    dispatch({
      type: FETCH_NEWS_SUCCESS,
      data: listNews,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_NEWS_FAILURE,
      message: error,
    });
  };
};
