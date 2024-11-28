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
  line-height: 80px;
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

export const LinkOut = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="w-full bg-primary-color px-6 text-white py-3 rounded-lg font-semibold hover:bg-transparent transition duration-300 hover:text-[#FF5A5F]"
  >
    {children}
  </Link>
);

