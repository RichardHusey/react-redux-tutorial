import { combineReducers } from "redux";
import counter from "./counter.js";
import currentUser from "./currentUser.js";

const rootReducer = combineReducers({
  counter,
  currentUser
});

export default rootReducer;
