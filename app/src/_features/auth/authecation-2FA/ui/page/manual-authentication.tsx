import { useNavigate } from "react-router-dom";
import { HOME } from "../../../../../_routers/paths";
import device from "../../../../../assets/device.png";
import { Button } from "../../../../../components/Button";
import { useGenerateQrCodeAuthenticationStore } from "../../context/use-qr-code-authentication-store";
import { Input } from "../../../../../components/Input";

export const ManualAuthentication = () => {
  const qrCode = useGenerateQrCodeAuthenticationStore((state) => state.qrCode);

  const { secreteKey } = qrCode;
  const navigate = useNavigate();

  return (
    <div className="flex w-[420px] h-screen justify-center items-center m-auto ">
      <div className="flex flex-col w-full justify-center border border-gray-300 bg-slate-100">
        <div className="flex justify-center">
          <img src={device} alt="logo_cadastro" className="w-52 h-52" />
        </div>
        <div className="flex flex-col p-6 items-center ">
          <p className="text-base font-semibold">
            Digite o código no Autenticador para proseguir
          </p>
          <div className="flex flex-col  justify-center  w-full h-48">
            <Input disabled label="Chave Secreta" value={secreteKey} readOnly />
          </div>

          <Button
            className="w-full bg-yellow-300 h-10 rounded-md font-semibold mt-5"
            typeButton="success"
            type="submit"
            onClick={() => navigate(HOME.home)}
          >
            Login
          </Button>
          <Button
            className="w-full bg-gray-300 h-10 rounded-md font-semibold mt-5"
            typeButton="success"
            type="submit"
            onClick={() => navigate(-1)}
          >
            voltar
          </Button>
        </div>
      </div>
    </div>
  );
};
