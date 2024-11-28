import { logout } from "../api/auth";
import {
  AccessArea,
  NavTitle,
  Navigation,
  NavWrap,
  LinkColor,
  LinkOut,
} from "../styles/HeaderStyle";
import showAlert from "../utils/showAlert";

const Header = () => {
  // token 값 truthy falshy한 값으로 만들기
  const token = !!localStorage.getItem("accessToken");
  const handleLogout = () => {
    logout();
    showAlert({
      title: "로그아웃",
      icon: "error",
      confirmButtonText: "확인",
    });
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
            <LinkOut to="/login" onClick={handleLogout}>
              로그아웃
            </LinkOut>
          </AccessArea>
        )}
      </Navigation>
    </NavWrap>
  );
};

export default Header;
