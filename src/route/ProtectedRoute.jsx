import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, redirectedPath = "/login" }) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectedPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
