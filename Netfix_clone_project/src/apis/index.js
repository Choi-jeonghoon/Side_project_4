import axios from "axios";

const customAxios = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3000,
});

customAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject({
      message: "실패",
      data: error,
    });
  }
);

customAxios.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject({
      message: "실패",
      data: error,
    });
  }
);

export default customAxios;
