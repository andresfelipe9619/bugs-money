import {combineReducers} from 'redux';
import home from '../features/home/redux/reducer';
// import auth from '../features/auth/redux/reducer';
// import common from '../features/common/redux/reducer';
import dashboard from '../features/dashboard/redux/reducer';
// import transactions from '../features/transactions/redux/reducer';
// import accounts from '../features/accounts/redux/reducer';
// import budgets from '../features/budgets/redux/reducer';
// import authService from '../service/auth/redux/reducer';
import alert from '../services/redux/alertReducer';

const reducerMap = {
  home,
  dashboard,
  alert,
};

export default combineReducers(reducerMap);
