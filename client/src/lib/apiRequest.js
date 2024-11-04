import axios from "axios";
axios.defaults.withCredentials = true;
const apiRequest = axios.create({
  // baseURL: "http://localhost:8800/api/",
  baseURL:
    "https://estate-hub-back-kazc2w7s6-depressedeezs-projects.vercel.app/api/",
  withCredentials: true,
});

export default apiRequest;
