import {
  SUCCESS_ALERT,
  ERROR_ALERT,
  WARNING_ALERT,
  CLEAR_ALERT
} from "./actions/constants";

export default function alert(state = {}, action) {
  switch (action.type) {
    case SUCCESS_ALERT:
      return {
        type: "success",
        message: action.message,
        icon: "thumbs up"
      };
    case ERROR_ALERT:
      return {
        type: "danger",
        message: action.message,
        icon: "close"
      };
    case WARNING_ALERT:
      return {
        type: "warning",
        message: action.message,
        icon:  "warning sign"
      };
    case CLEAR_ALERT:
      return {};
    default:
      return state;
  }
}
