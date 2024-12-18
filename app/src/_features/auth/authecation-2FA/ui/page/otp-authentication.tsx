import { useTokenStore } from "@/_store/use-token-store";
import { OTP } from "@/components/OTP";
import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { PAGES_ROUTES } from "../../../../../_routers/paths";
import otp from "../../../../../assets/otp.png";
import { Button } from "../../../../../components/Button";
import { useUpdatedLoginStore } from "../../context/use-otp-authentication-store";
import { validateOtpAuthentication } from "../../service/validateOtpAuthenticationService";
import { Loader } from "@/components/Loader";

export const OtpAuthentication = () => {
  const navigate = useNavigate();
  const loginUpdated = useUpdatedLoginStore((state) => state.updatedLogin);
  const addToken = useTokenStore((state) => state.addToken);
  const [otpCode, setOtpCode] = useState<string>("");

  const mutation = useMutation(validateOtpAuthentication, {
    onSuccess: (data) => {
      addToken(data?.token);
      navigate(PAGES_ROUTES.student);
    },
  });

  const onSubmit = () => {
    mutation.mutate({
      email: loginUpdated.email,
      password: loginUpdated.password,
      otpCode: otpCode,
    });
  };

  const { isLoading } = mutation;

  if (isLoading) {
    return <Loader isOpen={isLoading} />;
  }

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
            <OTP token={setOtpCode} />
          </div>

          <Button
            className="w-full bg-yellow-300 h-10 rounded-md font-semibold mt-5"
            onClick={onSubmit}
            disabled={otpCode.length === 6 ? false : true}
          >
            Verificar
          </Button>
          <Button
            className="w-full bg-gray-300 h-10 rounded-md font-semibold mt-5"
            onClick={() => navigate(-1)}
          >
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
};
