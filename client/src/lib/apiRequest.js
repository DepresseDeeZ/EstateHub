import axios from "axios";

const apiRequest = axios.create({
  // baseURL: "http://localhost:8800/api/",
  baseURL: "https://estate-hub-backend.vercel.app/api/",
  // baseURL: "estate-hub-back-i4jszqeli-depressedeezs-projects.vercel.app/api/",
  withCredentials: true,
});

export default apiRequest;

//updated this
