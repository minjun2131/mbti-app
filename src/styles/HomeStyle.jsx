import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeWrap = styled.div`
  max-width: 1200px;
  margin: 94px auto 0;
`;

export const TitleArea = styled.section`
  width: 100%;
  text-align: center;
  margin-top: 30px;
`;
export const ChooseArea = styled.section`
  width: 100%;
  margin-top: 30px;
`;
export const MainTitle = styled.h2`
  font-size: 36px;
  margin-top: 30px;
`;
export const SubTitle = styled.p`
  margin-top: 30px;
`;

export const ChooseTest = styled.ul`
  width: 90%;
  padding: 0 5%;
  display: flex;
`;

export const TestAndResult = styled.li`
  background-color: #fff;
  margin: 0 2%;
  border-radius: 5px;
  box-shadow: 1px 3px 3px #ccc;
`;

export const TestAndResultLink = styled(Link)`
  display: inline-block;
  padding: 20px;
`;

export const ListTitle = styled.h3`
  font-size: 20px;
`;

export const ListInfo = styled.div`
  margin-top: 20px;
  line-height: 30px;
`;

export const ButtonArea = styled.div`
  width: 100%;
  margin-top: 100px;
  height: 100px;
  text-align: center;
`;

export const ButtonStyle = styled(Link)`
  background-color: red;
  padding: 12px 20px;
  border-radius: 30px;
  color: #fff;
`;
