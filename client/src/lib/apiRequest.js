import axios from "axios";

const apiRequest = axios.create({
  // baseURL: "http://localhost:8800/api/",
  baseURL:
    "https://estate-hub-back-1i8araii4-depressedeezs-projects.vercel.app/api/",
  withCredentials: true,
});

export default apiRequest;
