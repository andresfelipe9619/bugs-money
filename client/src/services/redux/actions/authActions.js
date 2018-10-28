import axios from "axios";
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
  UPDATE_AVATAR,
  LOGIN_PAGE_FAILED,
  LOGIN_PAGE_LOADING,
  LOGIN_PAGE_LOADED
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
const loginSuccess = (email, password) => {
  return { type: LOGIN_SUCCESS, user: { email, password } };
};

const loginFailure = error => {
  return { type: LOGIN_FAILURE, error };
};

const registerSuccess = (email, password) => {
  return { type: REGISTER_SUCCESS, user: { email, password } };
};

const registerFailure = error => {
  return { type: REGISTER_FAILURE, error };
};

export const getProfile = data => {
  return dispatch => {
    return axios
      .get(`user/profile/`)
      .then(res => {
        dispatch({
          type: GET_PROFILE,
          usuario: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const updateProfile = user => {
  return dispatch => {
    dispatch({
      type: UPDATE_PROFILE,
      usuario: user
    });
    return axios
      .put(`user/updateprofile/`, { ...user })
      .then(res => {
        dispatch({
          type: UPDATE_PROFILE,
          usuario: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const updateAvatar = user => {
  return dispatch => {
    return axios
      .post(`user/avater/`, { user })
      .then(res => {
        dispatch({
          type: UPDATE_AVATAR,
          avatar: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const loginFacebookRequest = user => {
  return dispatch => {
    dispatch({
      type: LOGIN_FACEBOOK_REQUEST,
      user
    });
    return axios
      .get("login/facebook")
      .then(e => {
        if (e.data.status == "SUCCESS") {
          dispatch(loginSuccess(e.data.user));
          // window.location.href = "/";
        } else {
          dispatch(loginFailure(e.data.message));
        }
        dispatch({
          type: LOGIN_REQUEST,
          user: null
        });
      })
      .catch(err => {
        dispatch(loginFailure(err));
      });
  };
};

export const loginGoogleRequest = user => {
  return dispatch => {
    dispatch({
      type: LOGIN_GOOGLE_REQUEST,
      user
    });
    return axios
      .then(e => {
        
        dispatch({
          type: LOGIN_REQUEST,
          user: null
        });
      })
      .catch(err => {
        dispatch(loginFailure(err));
      });
  };
};

export const loginRequest = user => {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
      user
    });
    return axios
      .post("api/login", user)
      .then(e => {
        dispatch(loginSuccess(e.data));

        // if (e.data.status == "SUCCESS") {
        //   window.location.href = "/";
        // } else {
        //   dispatch(loginFailure(e.data.message));
        // }
        dispatch({
          type: LOGIN_REQUEST,
          user: null
        });
      })
      .catch(err => {
        dispatch(loginFailure(err.response.data));
      });
  };
};
export const registerRequest = user => {
  return dispatch => {
    dispatch({
      type: REGISTER_REQUEST,
      user
    });
    return axios
      .post("user/sign_up", { ...user })
      .then(e => {
        if (e.data.status == "SUCCESS") {
          dispatch(registerSuccess(user));
        } else {
          dispatch(registerFailure(e.data.message));
        }
      })
      .catch(err => {
        dispatch(registerFailure(err));
      });
  };
};

export const logoutRequest = data => {
  return dispatch => {
    return axios
      .get(`logout`)
      .then(res => {
        dispatch({
          type: LOGOUT_REQUEST,
          usuario: res.data
        });
        window.location.href = "/";
      })
      .catch(err => {
        loginFailure(err);
      });
  };
};
