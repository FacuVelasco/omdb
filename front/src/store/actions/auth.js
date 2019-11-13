import * as auth from "../../utils/api/auth";
import { setUser } from "./users";
import { stopLoading, startLoading } from ".";

export const postLogin = credentials => dispatch => {
  dispatch(startLoading());
  return auth
    .postLogin(credentials)
    .then(res => res.data)
    .then(user => {
      dispatch(setUser(user));
      dispatch(stopLoading());
    })
    .catch(() => {
      dispatch(stopLoading());
      throw new Error("Invalid credentials");
    });
};

export const postLogout = () => dispatch => {
  return auth
    .postLogout()
    .then(() => dispatch(setUser({})))
    .catch(() => {
      // dispatch(errorMessage());
    });
};

export const postRegister = credentials => dispatch => {
  dispatch(startLoading());
  return auth
    .postRegister(credentials)
    .then(() => {
      dispatch(stopLoading());
    })
    .catch(() => {
      dispatch(stopLoading());
      throw new Error("Email taken");
    });
};
