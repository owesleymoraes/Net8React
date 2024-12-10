import { Navigate } from "react-router-dom";
import { useGlobalStore } from "../_store/global-store";
import { NavBar } from "../components/NavBar";

export const PrivateRoute = () => {
  const token = useGlobalStore((state) => state.token);

  return token ? <NavBar /> : <Navigate to="/" replace />;
};
