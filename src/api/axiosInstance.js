import axios from "axios";

const API_INSTANCE = axios.create({
  baseURL: "http://localhost:5000/testResults",
  timeout: 5000,
});

API_INSTANCE.interceptors.request.use(
  function (config) {
    console.log("인터셉트 요청 성공!");
    return config;
  },
  function (error) {
    console.log("인터셉트 요청 오류!");
    return Promise.reject(error);
  }
);
API_INSTANCE.interceptors.response.use(
  function (response) {
    console.log("응답 받았습니다.");
    return response;
  },
  function (error) {
    console.log("응답 받지 못했습니다.");
    return Promise.reject(error);
  }
);

export default API_INSTANCE;
