import {
  SUCCESS_ALERT,
  WARNING_ALERT,
  ERROR_ALERT,
  CLEAR_ALERT
} from "./constants";

export function successAlert(message) {
  return { type: SUCCESS_ALERT, message };
}

export function warningAlert(message) {
  return { type: WARNING_ALERT, message };
}

export function errorAlert(message) {
  return { type: ERROR_ALERT, message };
}

export function clearAlert() {
  return { type: CLEAR_ALERT };
}
