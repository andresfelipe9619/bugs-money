import {
  REPORTS_PAGE_LOADED,
  INCOME_EXPENSE_REPORT_PAGE_LOADED,
  SPENDING_REPORT_PAGE_LOADED,
} from './constants';

function reportsPageLoaded(state = null, action) {
  switch (action.type) {
    case REPORTS_PAGE_LOADED:
      return action.isloaded;
    default:
      return state;
  }
}

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
    reportsPageLoaded: reportsPageLoaded(state.reportsPageLoaded, action),
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
