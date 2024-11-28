import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import Header from "../components/Header";
import InputField from "../components/InputField";
import {
  LinkStyle,
  LinkArea,
  ButtonStyle,
  FormStyle,
  FormTitle,
  FormArea,
  FormWrap,
} from "../styles/FormStyle";
import formHandler from "../utils/formHandler";
import Swal from "sweetalert2";
import showAlert from "../utils/showAlert";
const Signup = () => {
  const navigate = useNavigate();
  const { formData, handleInputChange } = formHandler({});
  console.log(formData);

  const validateForm = ({ id, password, nickname }) => {
    if (!id) return { valid: false, message: "아이디를 입력해주세요." };
    if (!password) return { valid: false, message: "비밀번호를 입력해주세요." };
    if (!nickname) return { valid: false, message: "닉네임을 입력해주세요." };

    return { valid: true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id, password, nickname } = formData;
    const { valid, message } = validateForm({ id, password, nickname });
    console.log(formData);
    if (!valid) {
      showAlert({
        title: "회원가입 실패",
        icon: "error",
        text: message,
        confirmButtonText: "확인",
      });
      return;
    }
    try {
      await register(formData);
      showAlert({
        title: "회원가입 성공",
        icon: "success",
        text: "회원가입에 성공하셨습니다!",
        confirmButtonText: "확인",
        onConfirm: () => navigate("/login"),
      });
    } catch (error) {
      showAlert({
        title: "회원가입 실패",
        icon: "warning",
        text: "이미 존재하는 유저입니다.",
        confirmButtonText: "확인",
      });
      console.error("회원가입 실패:", error.response.data);
    }
  };

  return (
    <>
      <Header />
      <FormWrap>
        <FormArea onSubmit={handleSubmit}>
          <FormTitle align="center">회원가입</FormTitle>
          <FormStyle>
            <InputField
              label="아이디"
              type="text"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
            />
            <InputField
              label="비밀번호"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <InputField
              label="닉네임"
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleInputChange}
            />
            <ButtonStyle>회원가입</ButtonStyle>
          </FormStyle>
          <LinkArea>
            이미 계정이 있으신가요? <LinkStyle to="/login">로그인</LinkStyle>
          </LinkArea>
        </FormArea>
      </FormWrap>
    </>
  );
};

export default Signup;
