import initialState from "./initialState";
import { reducer as counterPlusOneReducer } from "./counterPlusOne";
import { reducer as counterMinusOneReducer } from "./counterMinusOne";
import { reducer as counterResetReducer } from "./counterReset";
import { reducer as fetchRedditListReducer } from "./fetchRedditList";

const reducers = [
  counterPlusOneReducer,
  counterMinusOneReducer,
  counterResetReducer,
  fetchRedditListReducer
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
