import { createStore } from "redux";
import rootReducer from "./reducers";

const initialState = {
  counter: 100,
  currentUser: {
    user: {
      name: "Senior Frontend Engineer",
      loggedIn: false
    }
  }
};

const store = createStore(rootReducer, initialState);

export default store;
