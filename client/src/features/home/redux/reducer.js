import {HOME_PAGE_LOADED, } from './constants';

function homeLoaded(state = true, action) {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return action.isloaded;
    default:
      return state;
  }
}


export default function homeReducer(state = {}, action) {
  return {
    homeLoaded: homeLoaded(state.homeLoaded, action),
  };
}
