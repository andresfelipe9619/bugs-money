import {
  INCOME_EXPENSE_REPORT_PAGE_LOADED,
  SPENDING_REPORT_PAGE_LOADED,
} from './constants';

export function incomeExpenseReportPageLoaded(isloaded) {
  return {type: INCOME_EXPENSE_REPORT_PAGE_LOADED, isloaded};
}

export function spendingReportPageLoaded(isloaded) {
  return {type: SPENDING_REPORT_PAGE_LOADED, isloaded};
}
