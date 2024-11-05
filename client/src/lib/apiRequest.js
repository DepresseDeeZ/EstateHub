import axios from "axios";

const apiRequest = axios.create({
  // baseURL: "http://localhost:8800/api/",
  baseURL: "https://realestate-website-1.onrender.com/api/",
  withCredentials: true,
});
// Optionally, you can set up request/response interceptors here if needed
apiRequest.interceptors.request.use(
  (config) => {
    // You can modify request config here if needed
    // For example, add Authorization header if required
    // config.headers['Authorization'] = 'Bearer token';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiRequest.interceptors.response.use(
  (response) => {
    // You can handle responses here
    return response;
  },
  (error) => {
    // Handle errors globally here
    return Promise.reject(error);
  }
);

export default apiRequest;

//updated this
