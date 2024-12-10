import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { PAGES_ROUTES } from "../../../../../_routers/paths";
import { useTokenStore } from "../../../../../_store/use-token-store";
import loginImage from "../../../../../assets/login.jpg";
import { Button } from "../../../../../components/Button";
import { Input } from "../../../../../components/Input";
import { formLoginSchema } from "../../../../validation/form-login-schema";
import { LoginResponse } from "../../domain/login";
import { login } from "../../services/login-client/loginService";

export const Login = () => {
  const addToken = useTokenStore((state) => state.addToken);
  const navigate = useNavigate();

  const mutation = useMutation(login, {
    onSuccess: (data: LoginResponse) => {
      addToken(data.token);
      setValue("email", "");
      setValue("password", "");
      navigate(PAGES_ROUTES.student);
    },
    onError: (error) => {
      console.error("Erro no login:", error);
    },
  });

  type FormLoginSchema = z.infer<typeof formLoginSchema>;

  const {
    reset,
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginSchema>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const onSubmit = () => {
    mutation.mutate({
      email: getValues("email"),
      password: getValues("password"),
    });
  };

  return (
    <div className="flex w-[420px] h-screen justify-center items-center m-auto ">
      <div className="flex flex-col w-full justify-center border border-gray-300 bg-slate-100">
        <div className="flex justify-center">
          <img src={loginImage} alt="logo_cadastro" className="w-60 h-60" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="p-8 ">
          <div className="flex flex-col">
            <Input label="Email" {...register("email")} />
            {errors.email && (
              <caption className="text-xs text-left text-red-600 m-0">
                {errors.email.message}
              </caption>
            )}
          </div>
          <div className="flex flex-col">
            <Input label="Password" {...register("password")} />
            {errors.password && (
              <caption className="text-xs text-left text-red-600 mb-2">
                {errors.password.message}
              </caption>
            )}
          </div>
          <Button
            className="w-full bg-yellow-300 h-10 rounded-md font-semibold mt-5"
            typeButton="success"
            type="submit"
          >
            Login
          </Button>
          <Button
            className="w-full bg-slate-300 h-10 rounded-md mt-4 font-semibold"
            typeButton="success"
            onClick={() => reset()}
          >
            Limpar
          </Button>
        </form>
      </div>
    </div>
  );
};
