import { Button } from "../../../../../components/Button";
import { Input } from "../../../../../components/Input";

export const CreateStudent = () => {
  return (
    <div className="h-[calc(100vh-3rem)] flex items-center justify-center">
      <div className=" w-2/5  bg-white border border-gray-300 p-4  rounded-md">
        <h2 className="font-semibold text-2xl mb-5">Incluir Alunos</h2>
        <Input label="Nome:" name="name" />
        <Input label="Email:" name="email" />
        <Input label="Idade:" name="age" />
        <div className="flex justify-end py-2">
          <Button typeButton="success" onClick={() => {}}>
            Salvar
          </Button>
          <Button typeButton="error" onClick={() => {}}>
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
};
