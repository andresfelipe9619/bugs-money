import {
  REQUEST_PROFILE,
  UPDATE_PROFILE,
  UPDATE_AVATAR  } from "./constants";

const requestProfile = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_PROFILE:
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

export default function profileReducer(state = {}, action) {
  return {
    profile: requestProfile(state.profile, action),
    profileUpdated: updateProfile(state.profileUpdated, action),
    avatarUpdated: updateAvatar(state.avatarUpdated, action)
  };
}
