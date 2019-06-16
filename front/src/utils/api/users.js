import axios from "axios";

export const fetchMe = () => {
  return axios.get("/api/users/me");
};
