import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_GOOGLE_REQUEST,
  LOGIN_FACEBOOK_REQUEST
} from "./constants";
import { successAlert } from "./alertActions";
import API from "../../api";

const loginRequest = user => ({ type: LOGIN_REQUEST, user });
const loginSuccess = user => ({ type: LOGIN_SUCCESS, user });
const loginFailure = error => ({ type: LOGIN_FAILURE, error });

const logoutRequest = user => ({ type: LOGOUT_REQUEST, user });
const loginGoogleRequest = user => ({ type: LOGIN_GOOGLE_REQUEST, user });
const loginFacebookRequest = user => ({ type: LOGIN_FACEBOOK_REQUEST, user });

const registerRequest = user => ({ type: REGISTER_REQUEST, user });
const registerSuccess = user => ({ type: REGISTER_SUCCESS, user });
const registerFailure = error => ({ type: REGISTER_FAILURE, error });

export const loginFacebook = user => {
  return dispatch => {
    dispatch(loginFacebookRequest(user));
    return axios
      .get("login/facebook")
      .then(response => {
        response.ok
          ? dispatch(loginSuccess(response.user))
          : dispatch(loginFailure(response.error.message));

        dispatch(loginFacebookRequest(null));
      })
      .catch(error => {
        dispatch(loginFailure(error));
      });
  };
};

export const loginGoogle = user => {
  return dispatch => {
    dispatch(loginGoogleRequest(user));

    // return API.Auth.loginGoogle(user)
    //   .then(response => {
    //     console.log("response", response);
    //     if (!response.ok) dispatch(loginFailure(response));
    //     dispatch(loginSuccess(response.usuario));
    //     dispatch(loginGoogleRequest(null));
    //   })
    //   .catch(error => {
    //     dispatch(loginFailure(error));
    //   });
  };
};

export const login = user => {
  return dispatch => {
    dispatch(loginRequest(user));

    return API.Auth.login(user)
      .then(response => {
        if (!response.ok) dispatch(loginFailure(response));
        dispatch(loginSuccess(response.usuario));
        dispatch(successAlert("Que Hay de Nuevo Viejo?"));
        dispatch(loginRequest(null));
      })
      .catch(error => {
        "response" in error
          ? dispatch(loginFailure(error.response))
          : dispatch(loginFailure(error));
      });
  };
};

export const register = user => {
  return dispatch => {
    dispatch(registerRequest(user));

    return API.Auth.register(user)
      .then(response => {
        response.ok
          ? dispatch(registerSuccess(user))
          : dispatch(registerFailure(response));

        dispatch(registerRequest(null));
      })
      .catch(error => {
        "data" in error
          ? dispatch(registerFailure(error.err))
          : dispatch(registerFailure(error));
      });
  };
};

export const logout = user => {
  return dispatch => {
    dispatch(logoutRequest(user));
    dispatch(loginSuccess(null));
  };
};
