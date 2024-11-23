import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { Input } from "../Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormModal {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  disabled: boolean;
}

export const Form = ({
  isOpen = false,
  disabled,
  onClose,
  onConfirm,
}: FormModal) => {
  const formStudentSchema = z.object({
    name: z.string(),
    email: z
      .string()
      .min(1, { message: "Campo obrigatório" })
      .email("Email inválido")
      .refine((email) => {
        return email.endsWith("@gmail.com");
      }, "O email precisa do gmail"),

    age: z.coerce.number(),
    social: z.object({
      twitter: z.string(),
      facebook: z.string(),
    }),
    phoneNumbers: z.string().array(),
  });

  type FormStudentSchema = z.infer<typeof formStudentSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormStudentSchema>({
    resolver: zodResolver(formStudentSchema),
    defaultValues: {
      name: "",
      email: "",
      age: undefined,
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: ["", ""],
    },
  });

  const handleSubmitForm = (data: FormStudentSchema) => {
    console.log(data);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="w-2/5 h-96 bg-white border border-gray-300 p-4 z-50 rounded-md">
            <h2 className="font-semibold text-2xl mb-5">Incluir Alunos</h2>
            <form
              className="w-2/5 h-96 bg-white border border-gray-300 p-4 z-50 rounded-md"
              onSubmit={handleSubmit(handleSubmitForm)}
            >
              <Input label="Nome:" {...register("name")} />
              <Input label="Email:" {...register("email")} />
              {errors.email && <span>{errors.email.message}</span>}
              <Input label="Idade:" {...register("age", {})} />
              <div className="flex justify-end py-2">
                <Button
                  type="submit"
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
            </form>
          </div>
        </div>
      )}
    </>
  );
};
