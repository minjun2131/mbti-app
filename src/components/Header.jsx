import { logout } from "../api/auth";
import {
  AccessArea,
  NavTitle,
  Navigation,
  NavWrap,
  LinkColor,
} from "../styles/HeaderStyle";

const Header = () => {
  // token 값 truthy falshy한 값으로 만들기
  const token = !!localStorage.getItem("accessToken");
  const handleLogout = () => {
    logout();
  };

  return (
    <NavWrap>
      <Navigation>
        <NavTitle>
          <LinkColor to="/">홈</LinkColor>
        </NavTitle>
        {!token ? (
          <AccessArea>
            <LinkColor to="/login">로그인</LinkColor>
          </AccessArea>
        ) : (
          <AccessArea>
            <LinkColor to="/profile">프로필</LinkColor>
            <LinkColor to="/testpage">테스트</LinkColor>
            <LinkColor to="/testresultpage">결과보기</LinkColor>
            <LinkColor to="/login" onClick={handleLogout}>
              로그아웃
            </LinkColor>
          </AccessArea>
        )}
      </Navigation>
    </NavWrap>
  );
};

export default Header;
