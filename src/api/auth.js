import axios from "axios";

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
  alert("로그아웃 되었습니다.");
};

export const getUserProfile = async (token) => {
  const getUserResponse = await axios.get(`${API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return getUserResponse.data;
};

export const updateProfile = async (token, formData) => {
  const updateResponse = await axios.patch(`${API_URL}/profile`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": `multipart/form-data`,
    },
  });
};
