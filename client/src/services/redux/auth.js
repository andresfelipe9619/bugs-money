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
    registerRequest: registerRequest(state.registerRequest, action),
    loginGoogle: loginGoogleRequest(state.loginGoogle, action),
    loginFacebook: loginFacebookRequest(state.loginFacebook, action),
    loginSuccess: loginSuccess(state.loginSuccess, action),
    logoutRequest: logoutRequest(state.logoutRequest, action),
    profileUpdated: updateProfile(state.profileUpdated, action),
    avatarUpdated: updateAvatar(state.avatarUpdated, action)
  };
}

// import {
//   LOGIN_PAGE_FAILED,
//   LOGIN_PAGE_LOADING,
//   LOGIN_PAGE_LOADED,
//   REGISTER_PAGE_LOADED,
//   REGISTER_PAGE_FAILED,
//   REGISTER_PAGE_LOADING,
// } from './constants';

// function registerErrored(state = false, action) {
//   switch (action.type) {
//     case REGISTER_PAGE_FAILED:
//       return action.hasErrored;
//     default:
//       return state;
//   }
// }

// function registerLoading(state = false, action) {
//   switch (action.type) {
//     case REGISTER_PAGE_LOADING:
//       return action.isLoading;
//     default:
//       return state;
//   }
// }

// function registerLoaded(state = 'Esperando para cargar registro...', action) {
//   switch (action.type) {
//     case REGISTER_PAGE_LOADED:
//       return action.message;
//     default:
//       return state;
//   }
// }

// function loginErrored(state = false, action) {
//   switch (action.type) {
//     case LOGIN_PAGE_FAILED:
//       return action.hasErrored;
//     default:
//       return state;
//   }
// }

// function loginLoading(state = false, action) {
//   switch (action.type) {
//     case LOGIN_PAGE_LOADING:
//       return action.isLoading;
//     default:
//       return state;
//   }
// }

// function loginLoaded(state = 'Esperando para cargar login...', action) {
//   switch (action.type) {
//     case LOGIN_PAGE_LOADED:
//       return action.message;
//     default:
//       return state;
//   }
// }

// export default function authReducer(state = {}, action) {
//   return {
//     registerErrored: registerErrored(state.registerErrored, action),
//     registerLoading: registerLoading(state.registerLoading, action),
//     registerLoaded: registerLoaded(state.registerLoaded, action),
//     loginErrored: loginErrored(state.loginErrored, action),
//     loginLoading: loginLoading(state.loginLoading, action),
//     loginLoaded: loginLoaded(state.loginLoaded, action),
//   };
// }
