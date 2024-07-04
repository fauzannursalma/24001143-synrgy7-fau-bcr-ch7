import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../utils/AuthUtils";

const PrivateRoute = () => {
  const isAuthenticatedUser = isAuthenticated();

  const isAuthorized =
    isAuthenticatedUser &&
    isAuthenticatedUser.token &&
    (isAuthenticatedUser.user.role === "admin" ||
      isAuthenticatedUser.user.role === "superadmin");

  return isAuthorized ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
