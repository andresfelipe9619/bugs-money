import {
  INCOME_EXPENSE_REPORT_PAGE_LOADED,
  SPENDING_REPORT_PAGE_LOADED,
} from './constants';


function incomeExpensereportPageLoaded(state = null, action) {
  switch (action.type) {
    case INCOME_EXPENSE_REPORT_PAGE_LOADED:
      return action.isloaded;
    default:
      return state;
  }
}

function spendingreportPageLoaded(state = null, action) {
  switch (action.type) {
    case SPENDING_REPORT_PAGE_LOADED:
      return action.isloaded;
    default:
      return state;
  }
}

export default function reportsRededucer(state = {}, action) {
  return {
    spendingreportPageLoaded: spendingreportPageLoaded(
        state.spendingreportPageLoaded,
        action
    ),
    incomeExpensereportPageLoaded: incomeExpensereportPageLoaded(
        state.incomeExpensereportPageLoaded,
        action
    ),
  };
}
