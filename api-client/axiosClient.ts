import axios from "axios";
export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DOMAIN + "/api",
  headers: {
    "Content-Type": "application/json",
  },
});
