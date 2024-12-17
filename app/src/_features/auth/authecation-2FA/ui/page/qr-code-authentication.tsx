import { useNavigate } from "react-router-dom";
import { AUTHENTICATION_2FA, HOME } from "../../../../../_routers/paths";
import device from "../../../../../assets/device.png";
import { Button } from "../../../../../components/Button";
import { QRCodeImage } from "../../../../../components/QrCodeImage";
import { useGenerateQrCodeAuthenticationStore } from "../../context/use-qr-code-authentication-store";

export const QRCodeAuthentication = () => {
  const qrCode = useGenerateQrCodeAuthenticationStore((state) => state.qrCode);

  const { qrCodeImage } = qrCode;
  const navigate = useNavigate();

  return (
    <div className="flex w-[420px] h-screen justify-center items-center m-auto ">
      <div className="flex flex-col w-full justify-center border border-gray-300 bg-slate-100">
        <div className="flex justify-center">
          <img src={device} alt="logo_cadastro" className="w-52 h-52" />
        </div>
        <div className="flex flex-col p-6 items-center ">
          <p>Use um Autenticador para prosseguir</p>
          <QRCodeImage qrCodeImage={qrCodeImage} altText="Qr Code" />
          <Button
            className="bg-transparent text-gray-800 font-semibold"
            typeButton="success"
            onClick={() => navigate(AUTHENTICATION_2FA.manualAuthentication)}
          >
            Inserir Manualmente
          </Button>
          <Button
            className="w-full bg-yellow-300 h-10 rounded-md font-semibold mt-5"
            typeButton="success"
            type="submit"
            onClick={() => navigate(HOME.home)}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};
