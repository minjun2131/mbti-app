import {
  AccessArea,
  NavTitle,
  Navigation,
  NavWrap,
  LinkColor,
} from "../styles/HeaderStyle";

const Header = () => {
  return (
    <NavWrap>
      <Navigation>
        <NavTitle>
          <LinkColor to="/">홈</LinkColor>
        </NavTitle>
        <AccessArea>
          <LinkColor to="/login">로그인</LinkColor>
        </AccessArea>
      </Navigation>
    </NavWrap>
  );
};

export default Header;
