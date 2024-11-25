import Header from "../components/Header.jsx";
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
  TestAndResultLink,
  MainTitle,
} from "../styles/HomeStyle.jsx";
const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <TitleArea>
          <MainTitle>무료 성격 테스트</MainTitle>
          <SubTitle>
            자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
          </SubTitle>
        </TitleArea>
        <ChooseArea>
          <ChooseTest>
            <TestAndResult>
              <TestAndResultLink to="/testpage">
                <ListTitle>성격 유형 검사</ListTitle>
                <ListInfo>
                  자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을
                  미치는지 알아보세요.
                </ListInfo>
              </TestAndResultLink>
            </TestAndResult>
            <TestAndResult>
              <TestAndResultLink>
                <ListTitle>성격 유형 이해</ListTitle>
                <ListInfo>
                  다른 사람들이 어떻게 행동하는지 이해하는데 도움을 줄 수
                  있습니다.
                </ListInfo>
              </TestAndResultLink>
            </TestAndResult>
            <TestAndResult>
              <TestAndResultLink>
                <ListTitle>팀 평가</ListTitle>
                <ListInfo>
                  팀 내에서 자신의 동료들의 성격을 이해하고 협력할 수 있는
                  방법을 배워보세요.
                </ListInfo>
              </TestAndResultLink>
            </TestAndResult>
          </ChooseTest>
          <ButtonArea>
            <ButtonStyle>내 성격 알아보러 가기</ButtonStyle>
          </ButtonArea>
        </ChooseArea>
      </div>
    </div>
  );
};

export default Home;
