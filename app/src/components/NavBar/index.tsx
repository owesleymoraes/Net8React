import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { PAGES_ROUTES } from "../../_routers/paths";
import { useTokenStore } from "../../_store/use-token-store";

export const NavBar = () => {
  const navigate = useNavigate();
  const resetToken = useTokenStore((state) => state.resetToken);
  return (
    <div>
      <div className="fixed top-0 left-0 w-full flex items-center justify-end border border-gray-300 p-2 bg-slate-300 z-50">
        <p>Seja bem vindo</p>
        <Button
          typeButton="success"
          onClick={() => navigate(PAGES_ROUTES.student)}
        >
          Lista De Alunos
        </Button>
        <Button onClick={resetToken}>Sair</Button>
      </div>
      <div className="pt-[3rem]">
        <Outlet />
      </div>
    </div>
  );
};
