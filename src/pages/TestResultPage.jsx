import Header from "../components/Header";
import TestResultList from "../components/TestResultList";

const TestResultPage = () => {
  return (
    <>
      <Header />
      <div className="my-24 max-w-[1200px] rounded-xl m-auto w-full flex flex-col items-center justify-center bg-white">
        <h2 className="text-3xl my-5">모든 테스트 결과</h2>
        <TestResultList />
      </div>
    </>
  );
};

export default TestResultPage;
