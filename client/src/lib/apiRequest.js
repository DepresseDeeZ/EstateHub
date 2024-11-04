import axios from "axios";
axios.defaults.withCredentials = true;
const apiRequest = axios.create({
  // baseURL: "http://localhost:8800/api/",
  baseURL: "https://estate-hub-back.vercel.app/api/",
  withCredentials: true,
});

export default apiRequest;
