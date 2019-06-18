import * as movies from "../../utils/api/movies";
import { SET_MOVIES } from "../constants";
import { toggleLoading } from ".";

export const searchMovies = query => dispatch => {
  dispatch(toggleLoading());
  return movies
    .searchMovies(query)
    .then(res => res.data.Search)
    .then(movies => {
      dispatch(setMovies(movies));
      dispatch(toggleLoading());
    })
    .catch(() => {
      dispatch(toggleLoading());
    });
};

export const setMovies = movies => ({
  type: SET_MOVIES,
  movies
});
