import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormWrap = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormArea = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 1px 3px 3px #ccc;
  border-radius: 10px;
`;
export const FormTitle = styled.h2`
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  text-align: ${({ align }) => align || "left"};
`;
export const FormStyle = styled.form`
  margin: 30px 0;
  background-color: #f6f6f6;
  padding: 0 25px 25px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 3px 3px #ccc;
  border-radius: 10px;
`;
export const InputArea = styled.div`
  margin-top: 20px;
`;

// sr label 접근성 유지
export const LabelStyle = styled.label`
  width: 1px;
  height: 1px;
  position: absolute;
  padding: 0;
  margin: -1px;
  white-space: nowrap;
  overflow: hidden;
  border-width: 0;
`;

export const InputStyle = styled.input`
  display: inline-block;
  width: 250px;
  height: 20px;
  line-height: 20px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  border: 1px solid #9c9c9c;
`;

export const ButtonStyle = styled.button`
  margin-top: 20px;
  padding: 10px;
  width: 100%;
  background-color: #ff0000;
  cursor: pointer;
  border: none;
  color: #fff;
  border-radius: 10px;
`;

export const LinkArea = styled.div`
  width: 100%;
  text-align: ${({ align }) => align || "center"};
  font-size: 14px;
`;

export const LinkStyle = styled(Link)`
  color: #ff0000;
`;
