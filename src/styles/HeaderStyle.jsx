import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavWrap = styled.header`
  width: 100%;
  box-shadow: 0 3px 5px #ccc;
  position: fixed;
  z-index: 1;
  top: 0;
  background-color: #e7e7e7;
`;
export const Navigation = styled.nav`
  margin: 0 auto;
  max-width: 1150px;
  color: #ff0000;
  display: flex;
  justify-content: space-between;
  line-height: 60px;
`;
export const NavTitle = styled.h1`
  width: 77px;
  text-align: right;
`;

export const AccessArea = styled.div`
  padding: 0 30px;
`;

export const LinkColor = styled(Link)`
  margin-right: 15px;
  color: #ff0000;
`;
