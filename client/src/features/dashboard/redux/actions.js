import {DASHBOARD_PAGE_LOADED} from './constants';

export function dashboardPageLoaded(isloaded) {
  return {type: DASHBOARD_PAGE_LOADED, isloaded};
}
