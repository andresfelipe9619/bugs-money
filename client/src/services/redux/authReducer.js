import {
  LOGIN_REQUEST,
  LOGIN_FAILED,
  LOGIN_SUCCEED,
  REGISTER_REQUEST,
  REGISTER_FAILED,
  REGISTER_SUCCEED,
  LOGOUT_REQUEST,
} from './actions';

function loginFailure(state = false, action) {
  switch (action.type) {
    case LOGIN_FAILED:
      return action.error;
    default:
      return state;
  }
}

function logoutRequest(state = {}, action) {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return action.user;
    default:
      return state;
  }
}

function loginRequest(state = {}, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return action.user;
    default:
      return state;
  }
}

function loginSuccess(state = false, action) {
  switch (action.type) {
    case LOGIN_SUCCEED:
      return action.user;
    default:
      return state;
  }
}

function registerFailed(state = false, action) {
  switch (action.type) {
    case REGISTER_FAILED:
      return action.error;
    default:
      return state;
  }
}

function registerRequest(state = null, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return action.user;
    default:
      return state;
  }
}

function registerSucceed(state = false, action) {
  switch (action.type) {
    case REGISTER_SUCCEED:
      return action.user;
    default:
      return state;
  }
}

export default function authServiceReducer(state = {}, action) {
  return {
    loginFailure: loginFailure(state.loginFailure, action),
    loginRequest: loginRequest(state.loginRequest, action),
    loginSuccess: loginSuccess(state.loginSuccess, action),
    logoutRequest: logoutRequest(state.logoutRequest, action),
    registerFailed: registerFailed(state.registerFailed, action),
    registerRequest: registerRequest(state.registerRequest, action),
    registerSucceed: registerSucceed(state.registerSucceed, action),
  };
}
