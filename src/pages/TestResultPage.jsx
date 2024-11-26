import React from 'react'
import Header from "../components/Header";

const TestResultPage = () => {
  return (
    <>
      <Header />
      <div className="my-24 max-w-[1200px] rounded-xl m-auto w-full flex flex-col items-center justify-center bg-white">
        <h2 className="text-3xl my-5">모든 테스트 결과</h2>
        <ul className="w-3/5 bg-red-900">
          <li className="bg-slate-800 text-slate-50">
            <div className="w-full flex justify-between">
              <h3>제목</h3>
              <p>시간</p>
            </div>
            <div>
              <h3>MBTI</h3>
              <div>내용</div>
            </div>
            <div>
              <button>공개</button>
              <button>삭제</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TestResultPage