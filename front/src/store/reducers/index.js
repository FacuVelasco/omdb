import { combineReducers } from "redux";

import user from "./user";
import movies from "./movies";
import { START_LOADING, STOP_LOADING } from "../constants";

function loading(s = 0, { type }) {
  if (type === START_LOADING) return s + 1;
  if (type === STOP_LOADING) return s - 1;
  return s;
}

export default combineReducers({
  movies,
  user,
  loading
});
