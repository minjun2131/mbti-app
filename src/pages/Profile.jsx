import { useState } from "react";
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

const Profile = () => {
  const { formData, handleInputChange } = formHandler({});
  const [isChanged, setIsChanged] = useState(false);
  const token = localStorage.getItem("accessToken");

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
      alert(message);
      return;
    }
    const getResponse = await getUserProfile(token);
    if (getResponse.nickname == nickname) {
      alert("동일한 닉네임입니다. 다시 한번 확인해주세요.");
      return;
    }

    try {
      await updateProfile(token, formData);
      console.log("성공!");
      alert("닉네임이 성공적으로 변경되었습니다.");
      setIsChanged(true);
    } catch (error) {
      console.log("에러가 발생했습니다.", error);
    }

    console.log(getResponse.nickname);
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
