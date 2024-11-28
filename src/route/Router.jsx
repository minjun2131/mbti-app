import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  const isAuthenticated = !!localStorage.getItem("accessToken");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
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
