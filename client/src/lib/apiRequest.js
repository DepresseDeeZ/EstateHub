// import axios from "axios";
// axios.defaults.withCredentials = true;
// const apiRequest = axios.create({
//   // baseURL: "http://localhost:8800/api/",
//   baseURL: "https://estate-hub-back.vercel.app/api/",
//   withCredentials: true,
// });

// export default apiRequest;

import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8800/api/"
    : "https://estate-hub-back.vercel.app/api/";

const apiRequest = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
});

// Add request interceptor for handling errors
apiRequest.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for handling errors
apiRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized error
      console.log("Unauthorized access");
    }
    return Promise.reject(error);
  }
);

export default apiRequest;
