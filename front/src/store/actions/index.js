import * as userActions from "./users";
import { TOGGLE_LOADING } from "../constants";

export const toggleLoading = () => ({
  type: TOGGLE_LOADING
});

export default {
  ...userActions,
  toggleLoading
};
