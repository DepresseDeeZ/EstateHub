import axios from "axios";

const apiRequest = axios.create({
  // baseURL: "http://localhost:8800/api/",
  baseURL:
    "https://estate-hub-kwlq.vercel.app/?vercelToolbarCode=mjp2CMu5I0qqSDB/api/",
  withCredentials: true,
});

export default apiRequest;

//updated this
