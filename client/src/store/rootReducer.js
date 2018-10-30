import { combineReducers } from "redux";
import home from "../features/home/redux/reducer";
// import common from '../features/common/redux/reducer';
import dashboard from "../features/dashboard/redux/reducer";
// import transactions from '../features/transactions/redux/reducer';
// import accounts from '../features/accounts/redux/reducer';
// import budgets from '../features/budgets/redux/reducer';
import authService from "../services/redux/auth";
import alert from "../services/redux/alert";

const reducerMap = {
  home,
  alert,
  dashboard,
  authService
};

export default combineReducers(reducerMap);
