import {
  LOGIN_REQUEST,
  LOGIN_GOOGLE_REQUEST,
  LOGIN_FACEBOOK_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  GET_PROFILE,
  UPDATE_PROFILE,
  UPDATE_AVATAR
} from "./actions/constants";

const loginFailure = (state = false, action) => {
  switch (action.type) {
    case LOGIN_FAILURE:
      return action.error;
    default:
      return state;
  }
};

const logoutRequest = (state = false, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return action.user;
    default:
      return state;
  }
};

const registerRequest = (state = null, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return action.user;
    default:
      return state;
  }
};

const registerSuccess = (state = null, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return action.user;
    default:
      return state;
  }
};

const registerFailure = (state = null, action) => {
  switch (action.type) {
    case REGISTER_FAILURE:
      return action.error;
    default:
      return state;
  }
};

const loginRequest = (state = null, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return action.user;
    default:
      return state;
  }
};

const loginFacebookRequest = (state = null, action) => {
  switch (action.type) {
    case LOGIN_FACEBOOK_REQUEST:
      return action.user;
    default:
      return state;
  }
};

const loginGoogleRequest = (state = null, action) => {
  switch (action.type) {
    case LOGIN_GOOGLE_REQUEST:
      return action.user;
    default:
      return state;
  }
};

const loginSuccess = (state = null, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.user;
    default:
      return state;
  }
};

const getProfile = (state = {}, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return action.usuario;
    default:
      return state;
  }
};

const updateProfile = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return action.usuario;
    default:
      return state;
  }
};

const updateAvatar = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_AVATAR:
      return action.avatar;
    default:
      return state;
  }
};

export default function reducer(state = {}, action) {
  return {
    profile: getProfile(state.profile, action),
    loginFailure: loginFailure(state.loginFailure, action),
    loginRequest: loginRequest(state.loginRequest, action),
    registerSuccess: registerSuccess(state.registerSuccess, action),
    registerFailure: registerFailure(state.registerFailure, action),
    loginGoogle: loginGoogleRequest(state.loginGoogle, action),
    loginFacebook: loginFacebookRequest(state.loginFacebook, action),
    loginSuccess: loginSuccess(state.loginSuccess, action),
    logoutRequest: logoutRequest(state.logoutRequest, action),
    profileUpdated: updateProfile(state.profileUpdated, action),
    avatarUpdated: updateAvatar(state.avatarUpdated, action)
  };
}
