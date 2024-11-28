import Header from "../components/Header.jsx";
import Swal from "sweetalert2";
import {
  ChooseArea,
  TitleArea,
  SubTitle,
  ChooseTest,
  TestAndResult,
  ButtonStyle,
  ButtonArea,
  ListInfo,
  ListTitle,
  MainTitle,
  HomeWrap,
} from "../styles/HomeStyle.jsx";
import { useNavigate } from "react-router-dom";
import showAlert from "../utils/showAlert.js";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const handleClick = () => {
    showAlert({
      title: "로그인이 필요합니다.",
      text: "로그인 페이지로 이동합니다.",
      icon: "warning",
      confirmButtonText: "확인",
      onConfirm: () => navigate("/login"),
    });
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <HomeWrap>
        <TitleArea>
          <MainTitle>무료 성격 테스트</MainTitle>
          <SubTitle>
            자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
          </SubTitle>
        </TitleArea>
        <ChooseArea>
          <ChooseTest>
            <TestAndResult>
              <ListTitle>성격 유형 검사</ListTitle>
              <ListInfo>
                자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을
                미치는지 알아보세요.
              </ListInfo>
            </TestAndResult>
            <TestAndResult>
              <ListTitle>성격 유형 이해</ListTitle>
              <ListInfo>
                다른 사람들이 어떻게 행동하는지 이해하는데 도움을 줄 수
                있습니다.
              </ListInfo>
            </TestAndResult>
            <TestAndResult>
              <ListTitle>팀 평가</ListTitle>
              <ListInfo>
                팀 내에서 자신의 동료들의 성격을 이해하고 협력할 수 있는 방법을
                배워보세요.
              </ListInfo>
            </TestAndResult>
          </ChooseTest>
          <ButtonArea>
            {token ? (
              <ButtonStyle to="/testpage">내 성격 알아보러 가기</ButtonStyle>
            ) : (
              <ButtonStyle onClick={handleClick}>
                내 성격 알아보러 가기
              </ButtonStyle>
            )}
          </ButtonArea>
        </ChooseArea>
      </HomeWrap>
    </div>
  );
};

export default Home;
