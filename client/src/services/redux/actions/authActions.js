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
  UPDATE_AVATAR
} from "./constants";

const loginSuccess = user => {
  return { type: LOGIN_SUCCESS, user };
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
      .then(response => {
        dispatch({
          type: GET_PROFILE,
          usuario: response.data.usuario
        });
      })
      .catch(error => {
        console.log(error);
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
      .catch(error => {
        console.log(error);
      });
  };
};

export const updateAvatar = user => {
  return dispatch => {
    return axios
      .post(`user/avatar/`, { user })
      .then(res => {
        dispatch({
          type: UPDATE_AVATAR,
          avatar: res.data
        });
      })
      .catch(error => {
        console.log(error);
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
      .then(response => {
        if (response.data.ok) {
          dispatch(loginSuccess(response.data.user));
          // window.location.href = "/";
        } else {
          dispatch(loginFailure(response.data.error.message));
        }
        dispatch({
          type: LOGIN_REQUEST,
          user: null
        });
      })
      .catch(error => {
        dispatch(loginFailure(error));
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
      .then(response => {
        dispatch({
          type: LOGIN_REQUEST,
          user: null
        });
      })
      .catch(error => {
        dispatch(loginFailure(error));
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
      .then(response => {
        if (response.data.ok) {
          dispatch(loginSuccess(response.data.usuario));
        } else {
          dispatch(loginFailure(response.data));
        }
        dispatch({
          type: LOGIN_REQUEST,
          user: null
        });
      })
      .catch(error => {
        "response" in error ?
        dispatch(loginFailure(error.response.data)) :
        dispatch(loginFailure(error));
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
      .post("api/user", user)
      .then(response => {
        if (response.data.ok) {
          dispatch(registerSuccess(user));
        } else {
          dispatch(registerFailure(response.data));
        }
        dispatch({
          type: REGISTER_REQUEST,
          user: null
        });
      })
      .catch(error => {
        "data" in error ?
        dispatch(registerFailure(error.data.err)) :
        dispatch(registerFailure(error));
      });
  };
};

export const logoutRequest = user => {
  return dispatch => {
    dispatch({
      type: LOGOUT_REQUEST,
      user
    });
    // return axios
    //   .get(`api/logout`)
    //   .then(response => {
    //     if (response.data.ok) {
          dispatch(loginSuccess(null));
      //   }
      // })
      // .catch(error => {
      //   loginFailure(error);
      // });
  };
};
