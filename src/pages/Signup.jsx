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
const Signup = () => {
  return (
    <>
      <Header />
      <FormWrap>
        <FormArea>
          <FormTitle align="center">회원가입</FormTitle>
          <FormStyle>
            <InputField label="아이디" type="text" />
            <InputField label="비밀번호" type="password" />
            <InputField label="닉네임" type="text" />
            <ButtonStyle type="button">회원가입</ButtonStyle>
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
