import { combineReducers } from "redux";
import alert from "../services/redux/alert";
import authService from "../services/redux/auth";
//import budgets from '../features/budgets/redux/reducer';
import profile from '../features/profile/redux/reducer';
//import accounts from '../features/accounts/redux/reducer';
//import transactions from '../features/transactions/redux/reducer';

const reducerMap = {
  alert,
  profile,
  authService,
};

export default combineReducers(reducerMap);
