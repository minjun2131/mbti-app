import axios from "axios";
import showAlert from "../utils/showAlert";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

export const register = async (userData) => {
  const registerResponse = await axios.post(`${API_URL}/register`, userData);
  return registerResponse.data;
};

export const login = async (userData) => {
  const loginResponse = await axios.post(`${API_URL}/login`, userData);
  return loginResponse.data;
};

export const logout = async () => {
  localStorage.removeItem("accessToken");
};

export const getUserProfile = async (token) => {
  try {
    const getUserResponse = await axios.get(`${API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return getUserResponse.data;
  } catch (error) {
    if (error.response && error.response.sattus === 401) {
      showAlert({
        title: "토큰만료",
        icon: "error",
        text: "토큰이 만료되어 로그인창으로 돌아갑니다.",
        confirmButtonText: "확인",
      });
      window.location.href = "/login";
    }
    throw error;
  }
};
export const updateProfile = async (token, formData) => {
  const updateResponse = await axios.patch(`${API_URL}/profile`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": `multipart/form-data`,
    },
  });
};
