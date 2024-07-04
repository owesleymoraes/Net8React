import { Button } from "../Button";
import { Input } from "../Input";

interface FormModal {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const FormModal = ({
  isOpen = false,
  onClose,
  onConfirm,
}: FormModal) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="w-2/5 h-96 bg-white border border-gray-300 p-4 z-50 rounded-md">
            <h2 className="font-semibold text-2xl mb-5">Incluir Alunos</h2>
            <Input label="Nome:" name="name" onChange={() => {}} />
            <Input label="Email:" name="email" onChange={() => {}} />
            <Input label="Idade:" name="age" onChange={() => {}} />
            <div className="flex justify-end py-2">
              <Button typeButton="success" onClick={onConfirm}>
                Incluir
              </Button>
              <Button typeButton="error" onClick={onClose}>
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
