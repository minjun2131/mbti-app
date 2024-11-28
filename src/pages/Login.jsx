import Swal from "sweetalert2";
import { login } from "../api/auth";
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
import showAlert from "../utils/showAlert";

const Login = () => {
  const { formData, handleInputChange } = formHandler({});
  const validateForm = ({ id, password }) => {
    if (!id) return { valid: false, message: "아이디를 입력해주세요." };
    if (!password) return { valid: false, message: "비밀번호를 입력해주세요." };
    return { valid: true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id, password } = formData;
    const { valid, message } = validateForm({ id, password });
    console.log(formData);
    if (!valid) {
      showAlert({
        title: "로그인 실패",
        icon: "error",
        text: message,
        confirmButtonText: "확인",
      });
      return;
    }
    try {
      const response = await login(formData);
      const { accessToken } = response;
      localStorage.setItem("accessToken", accessToken);
      window.location.href("/");
    } catch (error) {
      showAlert({
        title: "로그인 실패",
        icon: "error",
        text: "아이디 비밀번호를 다시 확인해주세요.",
        confirmButtonText: "확인",
      });
      console.error("로그인 실패:", error.message || error.response?.data);
    }
  };

  return (
    <>
      <Header />
      <FormWrap>
        <FormArea onSubmit={handleSubmit}>
          <FormTitle align="left">로그인</FormTitle>
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
            <ButtonStyle type="submit">로그인</ButtonStyle>
          </FormStyle>
          <LinkArea align="left">
            계정이 없으신가요? <LinkStyle to="/signup">회원가입</LinkStyle>
          </LinkArea>
        </FormArea>
      </FormWrap>
    </>
  );
};

export default Login;
