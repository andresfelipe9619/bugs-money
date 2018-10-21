// import authService from '../../../services/redux/authReducer';
import {
  LOGIN_PAGE_FAILED,
  LOGIN_PAGE_LOADING,
  LOGIN_PAGE_LOADED,
  REGISTER_PAGE_LOADED,
  REGISTER_PAGE_FAILED,
  REGISTER_PAGE_LOADING
} from "./constants";

function loginPageLoaded(message) {
  return { type: LOGIN_PAGE_LOADED, message };
}

function loginPageLoading(bool) {
  return { type: LOGIN_PAGE_LOADING, isLoading: bool };
}

function loginPageErrored(bool) {
  return { type: LOGIN_PAGE_FAILED, hasErrored: bool };
}

function registerPageLoaded(message) {
  return { type: REGISTER_PAGE_LOADED, message };
}

function registerPageLoading(bool) {
  return { type: REGISTER_PAGE_LOADING, isLoading: bool };
}

function registerPageErrored(bool) {
  return { type: REGISTER_PAGE_FAILED, hasErrored: bool };
}

export function loadLogin() {
  return dispatch => {
    dispatch(loginPageLoading(true));

    fetch("/ingreso")
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(loginPageLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(loginPageLoaded(items)))
      .catch(err => dispatch(loginPageErrored(err)));
  };
}
