import axios from "axios";

const apiRequest = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.SERVER_URL,
  // baseURL: "estate-hub-back-i4jszqeli-depressedeezs-projects.vercel.app/api/",
  withCredentials: true,
});

export default apiRequest;

//updated this
