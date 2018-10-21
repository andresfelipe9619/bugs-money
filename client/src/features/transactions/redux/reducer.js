import {TRANSACTIONS_PAGE_LOADED} from './constants';

function transactionsLoaded(state = null, action) {
  switch (action.type) {
    case TRANSACTIONS_PAGE_LOADED:
      return action.isloaded;
    default:
      return state;
  }
}

export default function dashboardReducer(state = {}, action) {
  return {
    transactionsLoaded: transactionsLoaded(state.dashboardLoaded, action),
  };
}
