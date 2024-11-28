import { useEffect, useState } from "react";
import { getUserProfile, updateProfile } from "../api/auth";
import Header from "../components/Header";
import InputField from "../components/InputField";
import {
  ButtonStyle,
  FormStyle,
  FormTitle,
  FormArea,
  FormWrap,
  SuccessStyle,
} from "../styles/FormStyle";
import formHandler from "../utils/formHandler";
import showAlert from "../utils/showAlert";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { formData, setFormData, handleInputChange } = formHandler({});
  const [isChanged, setIsChanged] = useState(false);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getUserProfile(token);
        setFormData((prevData) => ({
          ...prevData,
          // 닉네임이 있으면 response 없으면 "" 값
          nickname: response.nickname || "",
        }));
      } catch (error) {
        console.error("프로필 데이터를 가져오는 데 실패했습니다.", error);
        showAlert({
          title: "데이터 로드 실패",
          icon: "error",
          text: "프로필 데이터를 불러오는 중 문제가 발생했습니다.",
          confirmButtonText: "확인",
        });
        navigate("/login");
      }
    };
    fetchProfile();
    // 한번만 가져와도 되니까 굳이 무언가 들어가지 않아도 된다고 생각합니다.
  }, []);

  const validateForm = ({ nickname }) => {
    if (!nickname) return { valid: false, message: "닉네임을 입력해주세요." };
    return { valid: true };
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { nickname } = formData;
    const { valid, message } = validateForm({ nickname });
    // 바뀐 데이터 확인하기
    if (!valid) {
      showAlert({
        icon: "error",
        text: message,
        confirmButtonText: "확인",
      });
      return;
    }
    const getResponse = await getUserProfile(token);
    if (getResponse.nickname == nickname) {
      showAlert({
        icon: "error",
        text: "동일한 닉네임입니다. 다시 확인해주세요.",
        confirmButtonText: "확인",
      });
      return;
    }

    try {
      await updateProfile(token, formData);
      console.log("성공!");
      showAlert({
        title: "닉네임 변경",
        icon: "success",
        text: "닉네임이 변경되었습니다.",
        confirmButtonText: "확인",
      });
      setIsChanged(true);
    } catch (error) {
      showAlert({
        title: "닉네임 변경 실패",
        icon: "error",
        text: error,
        confirmButtonText: "확인",
      });
      console.log("에러가 발생했습니다.", error);
    }
  };

  return (
    <>
      <Header />
      <FormWrap>
        <FormArea>
          <FormTitle align="left">프로필 수정</FormTitle>
          {!isChanged ? null : (
            <SuccessStyle>프로필이 수정되었습니다.</SuccessStyle>
          )}
          <FormStyle>
            <InputField
              label="닉네임"
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleInputChange}
            />
            <ButtonStyle type="button" onClick={handleUpdate}>
              프로필 업데이트
            </ButtonStyle>
          </FormStyle>
        </FormArea>
      </FormWrap>
    </>
  );
};

export default Profile;
