import {
  SUCCESS_ALERT,
  WARNING_ALERT,
  ERROR_ALERT,
  CLEAR_ALERT,
} from './constants';

export function success(message) {
  return {type: SUCCESS_ALERT, message};
}

export function warning(message) {
  return {type: WARNING_ALERT, message};
}

export function error(message) {
  return {type: ERROR_ALERT, message};
}

export function clear() {
  return {type: CLEAR_ALERT};
}
