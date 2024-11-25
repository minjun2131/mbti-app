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

const Login = () => {
  return (
    <>
      <Header />
      <FormWrap>
        <FormArea>
          <FormTitle align="left">로그인</FormTitle>
          <FormStyle>
            <InputField label="아이디" type="text" />
            <InputField label="비밀번호" type="password" />
            <ButtonStyle type="button">로그인</ButtonStyle>
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
