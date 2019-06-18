import axios from "axios";

export const searchMovies = query => {
  return axios.get(`/api/movies?s=${query}`);
};
