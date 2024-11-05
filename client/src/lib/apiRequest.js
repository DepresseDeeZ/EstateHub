import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:8800/api/",
  // baseURL: "https://realestate-website-1.onrender.com/api/",
  withCredentials: true,
});

export default apiRequest;

//updated this
