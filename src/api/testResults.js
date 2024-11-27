import axios from "axios";

const API_URL = "http://localhost:5000/testResults";

export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTestResult = async (resultData) => {
  const createResponse = await axios.post(API_URL, resultData);
};

export const deleteTestResult = async (id) => {
  const deleteResponse = await axios.delete(`${API_URL}/${id}`);
  return deleteResponse.data;
};

export const updateTestResultVisibility = async (id, visibility) => {
  const visibilityResponse = await axios.patch(`${API_URL}/${id}`, {
    visibility: visibility,
  });
  console.log(visibilityResponse);
  return visibilityResponse.data;
};
