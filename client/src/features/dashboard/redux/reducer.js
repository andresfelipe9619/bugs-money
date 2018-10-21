import {
  DASHBOARD_PAGE_LOADED,
} from './constants';

function dashboardLoaded(state = null, action) {
  switch (action.type) {
    case DASHBOARD_PAGE_LOADED:
      return action.isloaded;
    default:
      return state;
  }
}

export default function dashboardReducer(state = {}, action) {
  return {
    dashboardLoaded: dashboardLoaded(state.dashboardLoaded, action),
  };
}
