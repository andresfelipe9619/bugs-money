import {
  LOGIN_PAGE_FAILED,
  LOGIN_PAGE_LOADING,
  LOGIN_PAGE_LOADED,
  REGISTER_PAGE_LOADED,
  REGISTER_PAGE_FAILED,
  REGISTER_PAGE_LOADING,
} from './constants';

function registerErrored(state = false, action) {
  switch (action.type) {
    case REGISTER_PAGE_FAILED:
      return action.hasErrored;
    default:
      return state;
  }
}

function registerLoading(state = false, action) {
  switch (action.type) {
    case REGISTER_PAGE_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

function registerLoaded(state = 'Esperando para cargar registro...', action) {
  switch (action.type) {
    case REGISTER_PAGE_LOADED:
      return action.message;
    default:
      return state;
  }
}

function loginErrored(state = false, action) {
  switch (action.type) {
    case LOGIN_PAGE_FAILED:
      return action.hasErrored;
    default:
      return state;
  }
}

function loginLoading(state = false, action) {
  switch (action.type) {
    case LOGIN_PAGE_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

function loginLoaded(state = 'Esperando para cargar login...', action) {
  switch (action.type) {
    case LOGIN_PAGE_LOADED:
      return action.message;
    default:
      return state;
  }
}

export default function authReducer(state = {}, action) {
  return {
    registerErrored: registerErrored(state.registerErrored, action),
    registerLoading: registerLoading(state.registerLoading, action),
    registerLoaded: registerLoaded(state.registerLoaded, action),
    loginErrored: loginErrored(state.loginErrored, action),
    loginLoading: loginLoading(state.loginLoading, action),
    loginLoaded: loginLoaded(state.loginLoaded, action),
  };
}
