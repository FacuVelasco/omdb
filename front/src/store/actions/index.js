import * as userActions from "./users";
import * as authActions from "./auth";
import { TOGGLE_LOADING } from "../constants";

export const toggleLoading = () => ({
  type: TOGGLE_LOADING
});

export default {
  ...userActions,
  ...authActions,
  toggleLoading
};
