import { Button } from "../Button";

interface ConfirmModal {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmModal = ({
  isOpen = false,
  onClose,
  onConfirm,
}: ConfirmModal) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className=" flex items-end justify-end w-1/3 h-48 bg-white border border-gray-300 p-4 z-50 rounded-md">
            <div className=" w-full h-full ">
              <h2 className="font-semibold text-2xl mb-5">Excluir Aluno</h2>
            </div>
            <div className=" flex">
              <Button typeButton="success" onClick={onConfirm}>
                Excluir
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
