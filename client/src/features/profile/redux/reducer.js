import {PROFILE_PAGE_LOADED, } from './constants';

function profileLoaded(state = true, action) {
  switch (action.type) {
    case PROFILE_PAGE_LOADED:
      return action.isloaded;
    default:
      return state;
  }
}


export default function profileReducer(state = {}, action) {
  return {
    homeLoaded: profileLoaded(state.homeLoaded, action),
  };
}