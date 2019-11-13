import * as users from "../../utils/api/users";
import { SET_USER } from "../constants";
import { stopLoading, startLoading } from ".";

export const fetchMe = () => dispatch => {
  dispatch(startLoading());
  return users
    .fetchMe()
    .then(({ data }) => {
      dispatch(setUser(data));
      dispatch(stopLoading());
    })
    .catch(() => {
      dispatch(stopLoading());
    });
};

export const setUser = user => ({
  type: SET_USER,
  user
});
