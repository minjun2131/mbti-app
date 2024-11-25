import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavWrap = styled.div`
  width: 100%;
`;
export const Navigation = styled.nav`
  width: 100%;
  box-shadow: 0 3px 5px #ccc;
  color: #ff0000;
  display: flex;
  justify-content: space-between;
  line-height: 60px;
`;
export const NavTitle = styled.h1`
  padding: 0 30px;
`;

export const AccessArea = styled.div`
  padding: 0 30px;
`;

export const LinkColor = styled(Link)`
  color: #ff0000;
`;
