import axios from "axios";
import {
  REQUEST_PROFILE,
  UPDATE_PROFILE,
  UPDATE_AVATAR } from "./constants";


export const requestProfile = data => {
  return dispatch => {
    return axios
      .get(`user/profile/`)
      .then(response => {
        dispatch({
          type: REQUEST_PROFILE,
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
