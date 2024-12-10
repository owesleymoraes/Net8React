import { Navigate } from "react-router-dom";
import { useTokenStore } from "../_store/use-token-store";
import { NavBar } from "../components/NavBar";

export const PrivateRoute = () => {
  const token = useTokenStore((state) => state.token);

  return token ? <NavBar /> : <Navigate to="/" replace />;
};
