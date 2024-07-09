import { ChangeEvent } from "react";
import { Button } from "../Button";
import { Input } from "../Input";

interface FormModal {
  isOpen: boolean;
  formValues: FormStudent;
  onChange: (values: ChangeEvent<HTMLInputElement>) => void;
  onClose: () => void;
  onConfirm: () => void;
  disabled: boolean;
}

export type FormStudent = {
  name: string;
  email: string;
  age: string;
};

export const FormModal = ({
  isOpen = false,
  formValues,
  disabled,
  onClose,
  onChange,
  onConfirm,
}: FormModal) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="w-2/5 h-96 bg-white border border-gray-300 p-4 z-50 rounded-md">
            <h2 className="font-semibold text-2xl mb-5">Incluir Alunos</h2>
            <Input
              label="Nome:"
              name="name"
              value={formValues.name}
              onChange={onChange}
            />
            <Input
              label="Email:"
              name="email"
              value={formValues.email}
              onChange={onChange}
            />
            <Input
              label="Idade:"
              name="age"
              value={formValues.age}
              onChange={onChange}
            />
            <div className="flex justify-end py-2">
              <Button
                typeButton="success"
                onClick={onConfirm}
                disabled={disabled}
              >
                Salvar
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
