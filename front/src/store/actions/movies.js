import * as movies from "../../utils/api/movies";
import { SET_MOVIES } from "../constants";
import { stopLoading, startLoading } from ".";

export const searchMovies = query => dispatch => {
  dispatch(startLoading());
  return movies
    .searchMovies(query)
    .then(res => res.data.Search)
    .then(movies => {
      dispatch(setMovies(movies));
      dispatch(stopLoading());
    })
    .catch(() => {
      dispatch(clearMovies());
      dispatch(stopLoading());
    });
};

export const setMovies = movies => ({
  type: SET_MOVIES,
  movies
});

export const clearMovies = () => ({
  type: SET_MOVIES,
  movies: []
});
