import {
  LOGIN_REQUEST,
  LOGIN_FAILED,
  LOGIN_SUCCEED,
  REGISTER_REQUEST,
  REGISTER_FAILED,
  REGISTER_SUCCEED,
  LOGOUT_REQUEST,
} from './constants';
import {Redirect} from 'react-router-dom';

// import {
//   alertError,
//   alertSuccess,
//   alertClear,
//   clearAlerts,
// } from './alertActions';

function logoutRequest(user) {
  return {type: LOGOUT_REQUEST, user};
}

function loginRequest(user) {
  return {type: LOGIN_REQUEST, user};
}

function loginSuccess(user) {
  return {type: LOGIN_SUCCEED, user};
}

function loginFailure(error) {
  return {type: LOGIN_FAILED, error};
}

export function logout() {
  return (dispatch) => {
    dispatch(loginSuccess(false));
  };
}

export function login(user) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  return (dispatch) => {
    dispatch(loginRequest(user));

    fetch('/authenticate', requestOptions)
        .then((response) => {
          if (!response.ok) {
            return Promise.reject(response.statusText);
          }
          dispatch(loginRequest(null));
          return response.json();
        })
        .then((user) => {
          if (user.err) {
            // dispatch(alertError(user.err));
          } else {
            dispatch(loginSuccess(user));
          }
        })
        .catch((err) => {
        //   dispatch(alertError(err));
          dispatch(loginFailure(err));
        });
  };
}
