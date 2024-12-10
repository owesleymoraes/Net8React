import loginImage from "../src/assets/login.jpg";

export const NotFound = () => {
  return (
    <div className="flex w-[420px] h-screen justify-center items-center m-auto ">
      <div className="flex flex-col w-full justify-center border border-gray-300 bg-slate-100">
        <div className="flex justify-center">
          <img src={loginImage} alt="logo_cadastro" className="w-60 h-60" />
        </div>
        <div className="p-8 ">
          <h2 className="font-bold text-xl text-center">
            Desculpe, Página não Encontrada
          </h2>
        </div>
      </div>
    </div>
  );
};
