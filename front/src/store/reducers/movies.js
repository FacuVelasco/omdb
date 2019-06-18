import { SET_MOVIES } from "../constants";

export default (state = [], action) => {
  switch (action.type) {
    case SET_MOVIES:
      return action.movies;
    default:
      return state;
  }
};
