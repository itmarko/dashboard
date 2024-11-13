import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const PrivateRouter = () => {
  const { isAuthenticated } = useAuth();
  console.log("Is Authenticated", isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to={"/log-in"} />;
};

export default PrivateRouter;
