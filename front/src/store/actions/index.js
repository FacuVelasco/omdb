import * as userActions from "./users";
import * as authActions from "./auth";
import * as moviesActions from "./movies";
import { START_LOADING, STOP_LOADING } from "../constants";

export const startLoading = () => ({
  type: START_LOADING
});

export const stopLoading = () => ({
  type: STOP_LOADING
});

export default {
  ...userActions,
  ...authActions,
  ...moviesActions,
  stopLoading,
  startLoading
};
