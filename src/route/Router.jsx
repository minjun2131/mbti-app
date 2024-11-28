import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";
import ProtectedRoute from "./ProtectedRoute";
import { getUserProfile } from "../api/auth";
import { useEffect, useState } from "react";

const Router = () => {
  // 토큰 값이 바뀔 때마다 true false 측정해서 ProtectedRoute 사용
  // const [isToken, setIsToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = localStorage.getItem("accessToken");
  const fetchAuthenticated = async () => {
    if (token) {
      const userProfile = await getUserProfile(token);
      setIsAuthenticated(userProfile ? true : false);
    } else {
      setIsAuthenticated(false);
    }
  };
  useEffect(() => {
    fetchAuthenticated();
    console.log("바뀜");
  }, [user]);

  // 컴포넌트가 한번 렌더링 된 다음에 실행이 되는거임
  // 그래서 최초엔 null로 들어감
  // useEffect는 한번 더 공부를 해봐야 함
  // 그래서 새로고침을 하는 방식으로 수정함

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login setUser={setUser} />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/testpage" element={<TestPage />}></Route>
          <Route path="/testresultpage" element={<TestResultPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
