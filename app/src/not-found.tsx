import NotFoundPage from "../src/assets/not-found.png";

export const NotFound = () => {
  return (
    <div className="flex w-[420px] h-screen justify-center items-center m-auto ">
      <div className="flex flex-col w-full justify-center border border-gray-300 bg-slate-100">
        <div className="flex justify-center">
          <img src={NotFoundPage} alt="logo_cadastro" />
        </div>
        <div className="p-8 ">
          <h2 className="font-bold text-xl text-center">
            Desculpe, Página Abduzida.
          </h2>
        </div>
      </div>
    </div>
  );
};
