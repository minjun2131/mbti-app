import { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../api/auth";
import Header from "../components/Header";
import { v4 as uuid } from "uuid";

const TestPage = ({ user }) => {
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  // 시간 표현하는 로직
  const date = new Date();
  const options = {
    month: "numeric", // 월을 숫자로
    day: "numeric", // 일을 숫자로
    year: "numeric", // 년도 4자리
    hour: "numeric", // 시간
    minute: "numeric", // 분
    hour12: true, // 12시간제 (AM/PM)
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);

  const handleTestSubmit = async (answers) => {
    const response = await getUserProfile(token);
    const mbtiResult = calculateMBTI(answers);
    const data = {
      id: uuid,
      userid: response.id,
      nickname: response.nickname,
      mbti: mbtiResult,
      descriptions: mbtiDescriptions[mbtiResult],
      registration: formatter.format(date),
      visibility:true,
    };
    setResult(mbtiResult);
    await createTestResult(data);
    /* Test 결과는 mbtiResult 라는 변수에 저장이 됩니다. 이 데이터를 어떻게 API 를 이용해 처리 할 지 고민해주세요. */
  };
  const handleNavigateToResults = () => {
    navigate("/testresultpage");
  };

  return (
    <div className="my-16 w-full flex flex-col items-center justify-center bg-white">
      <Header />
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              테스트 결과: {result}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="w-full bg-primary-color text-black py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 hover:text-[#FF5A5F]"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
