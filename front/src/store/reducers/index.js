import { combineReducers } from "redux";

import user from "./user";
import movies from "./movies";
import { TOGGLE_LOADING } from "../constants";

function loading(s = false, a) {
  if (a.type === TOGGLE_LOADING) return !s;
  return s;
}

export default combineReducers({
  movies,
  user,
  loading
});
