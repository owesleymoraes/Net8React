import { OTP } from "@/components/OTP";
import { useNavigate } from "react-router-dom";
import { HOME } from "../../../../../_routers/paths";
import otp from "../../../../../assets/otp.png";
import { Button } from "../../../../../components/Button";

export const OtpAuthentication = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-[420px] h-screen justify-center items-center m-auto ">
      <div className="flex flex-col w-full justify-center border border-gray-300 bg-slate-100">
        <div className="flex justify-center">
          <img src={otp} alt="logo_cadastro" className="w-52 h-52" />
        </div>
        <div className="flex flex-col p-6 items-center ">
          <p className="text-base font-semibold">
            Digite o código de 6 números
          </p>
          <div className="flex flex-col  justify-center  w-full h-48">
            <OTP token={() => {}} />
          </div>

          <Button
            className="w-full bg-yellow-300 h-10 rounded-md font-semibold mt-5"
            typeButton="success"
            type="submit"
            onClick={() => navigate(HOME.home)}
          >
            Verificar
          </Button>
        </div>
      </div>
    </div>
  );
};
