import * as users from "../../utils/api/users";
import { SET_USER } from "../constants";
import { toggleLoading } from ".";

export const fetchMe = () => dispatch => {
  dispatch(toggleLoading());
  return users
    .fetchMe()
    .then(user => {
      dispatch(setUser(user));
      dispatch(toggleLoading());
    })
    .catch(() => {
      dispatch(toggleLoading());
    });
};

export const setUser = user => ({
  type: SET_USER,
  user
});