import axios from "axios";
export const axiosClient = axios.create({
  baseURL: process.env.DOMAIN + "/api",
  headers: {
    "Content-Type": "application/json",
  },
});
