import { FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS, FETCH_JOBS_FAILURE } from './fetchJobs-types';

const INITIAL_STATE = {
    loading: false,
    success: false,
    listJobs: [],
    error: '',
  };
  
function fetchJobsReducer(state = INITIAL_STATE, action) {
switch (action.type) {
    case FETCH_JOBS_REQUEST:
    return {
        ...state,
        loading: true,
    };
    case FETCH_JOBS_SUCCESS:
    return {
        ...state,
        loading: false,
        success: true,
        listJobs: action.data,
    };
    case FETCH_JOBS_FAILURE:
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
  
export default fetchJobsReducer;
  