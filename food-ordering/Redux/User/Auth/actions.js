import { FETCH_POST_LOGIN_ERROR, FETCH_POST_LOGIN_LOADING, FETCH_POST_LOGIN_SUCCESS } from "./types";

export const logInUser = ({ email, password }) => {
    return dispatch => {
      dispatch(loadingLogIn());
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password
        })}
        const url = `${process.env.NEXT_PUBLIC_API_URL}/login`;
        fetch(url, requestOptions)
        .then(res => res.json())
        .then(res => {
            console.log("WHAT",res);
            if(res.user && res.token) {
                console.log("VVVVOOO")
                dispatch(loggedInSuccess(res.user))
                sessionStorage.setItem("token", res.token)
            } else{
                console.log("VO MA ERROR")
                throw new Error("Incorrect Account")
            }
        })
        .catch(err => {
            dispatch(failLoggedIn(err.message))
        })
    };
  };
  
  const loggedInSuccess = (user) => ({
    type: FETCH_POST_LOGIN_SUCCESS,
    payload: {
      ...user
    }
  });
  
  const loadingLogIn = () => ({
    type: FETCH_POST_LOGIN_LOADING
  });
  
  const failLoggedIn = error => ({
    type: FETCH_POST_LOGIN_ERROR,
    payload: {
      error
    }
  });