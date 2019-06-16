import * as auth from "../../utils/api/auth";
import { setUser } from "./users";
import { toggleLoading } from ".";

export const postLogin = credentials => dispatch => {
  dispatch(toggleLoading());
  return auth
    .postLogin(credentials)
    .then(res => res.data)
    .then(user => {
      dispatch(setUser(user));
      dispatch(toggleLoading());
    })
    .catch(() => {
      dispatch(toggleLoading());
      throw new Error("Invalid credentials");
    });
};

export const postLogout = credentials => dispatch => {
  return auth
    .postLogout()
    .then(() => dispatch(setUser({})))
    .catch(() => {
      // dispatch(errorMessage());
    });
};

export const postRegister = credentials => dispatch => {
  dispatch(toggleLoading());
  return auth
    .postRegister(credentials)
    .then(() => {
      dispatch(toggleLoading());
    })
    .catch(() => {
      dispatch(toggleLoading());
      throw new Error("Email taken");
    });
};
