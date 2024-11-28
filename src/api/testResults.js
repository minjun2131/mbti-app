import API_INSTANCE from "./axiosInstance";

export const getTestResults = async () => {
  const response = await API_INSTANCE.get("/");
  console.log(response.data);
  return response.data;
};

export const createTestResult = async (resultData) => {
  await API_INSTANCE.post("/", resultData);
};

export const deleteTestResult = async (id) => {
  const deleteResponse = await API_INSTANCE.delete(`/${id}`);
  return deleteResponse.data;
};

export const updateTestResultVisibility = async (id, visibility) => {
  const visibilityResponse = await API_INSTANCE.patch(`/${id}`, {
    visibility: visibility,
  });
  console.log(visibilityResponse);
  return visibilityResponse.data;
};
