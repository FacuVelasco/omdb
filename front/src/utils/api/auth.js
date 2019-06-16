import axios from "axios";

export const postLogin = data => {
  return axios.post("/api/auth/login", data);
};

export const postRegister = data => {
  return axios.post("/api/auth/register", data);
};

export const postLogout = () => {
  return axios.post("/api/auth/logout");
};
