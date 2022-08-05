import { FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS, FETCH_JOBS_FAILURE } from './fetchJobs-types';

export const fetchJobs = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_JOBS_REQUEST,
    });
    const url = `https://teetea-api.herokuapp.com/jobs`;
    const responseAPI = await fetch(url);
    const responseJSON = await responseAPI.json();
    const listJobs = responseJSON.map((job) => {
      return {
        id: job._id,
        title: job.title,
        quantity: job.quantity,
        image: job.image,
        description: job.description,
      };
    });
    dispatch({
      type: FETCH_JOBS_SUCCESS,
      data: listJobs,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_JOBS_FAILURE,
      message: error,
    });
  }
};
