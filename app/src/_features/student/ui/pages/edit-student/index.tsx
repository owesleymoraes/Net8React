import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { PAGES_ROUTES } from "../../../../../_routers/paths";
import { useStudentStore } from "../../../../../_store/use-student-store";
import Alert from "../../../../../components/Alert";
import { Button } from "../../../../../components/Button";
import { Input } from "../../../../../components/Input";
import { Loader } from "../../../../../components/Loader";
import { formCreateStudentSchema } from "../../../../validation/form-create-student-schema";
import { formEditStudentSchema } from "../../../../validation/form-edit-student-schema";
import { update } from "../../../services/students/updateStudentService";

export const EditStudent = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const student = useStudentStore((state) => state.student);

  type FormeEditStudentSchema = z.infer<typeof formEditStudentSchema>;

  const mutation = useMutation(update, {
    onSuccess: () => {
      queryClient.invalidateQueries("getAll");
      setValue("email", "");
      setValue("name", "");
      navigate(PAGES_ROUTES.student);
    },
  });

  const { isLoading, error } = mutation;

  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormeEditStudentSchema>({
    resolver: zodResolver(formCreateStudentSchema),
    defaultValues: {
      name: student.name,
      email: student.email,
      age: student.age,
    },
  });

  const onSubmit = () => {
    mutation.mutate({
      name: getValues("name"),
      email: getValues("email"),
      age: getValues("age"),
      id: student.id,
    });
  };

  const handleCloseAlertError = () => {
    mutation.reset();
    navigate(PAGES_ROUTES.student);
  };

  if (isLoading) {
    return <Loader isOpen={isLoading} />;
  }

  if (error) {
    return (
      <Alert
        title="Erro"
        typeButton="error"
        titleButtonPrimary="Fechar"
        message="Ocorreu um erro ao criar um estudante."
        onConfirm={handleCloseAlertError}
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-[calc(100vh-3rem)] flex items-center justify-center"
    >
      <div className=" w-2/5  bg-white border border-gray-300 p-4  rounded-md">
        <h2 className="font-semibold text-2xl mb-5">Cadastrar Aluno</h2>
        <div className="flex flex-col">
          <Input label="Nome" {...register("name")} />
          {errors.name && (
            <caption className="text-xs text-left text-red-600 m-0">
              {errors.name.message}
            </caption>
          )}
        </div>
        <div className="flex flex-col">
          <Input label="Email" {...register("email")} />
          {errors.email && (
            <caption className="text-xs text-left text-red-600 m-0">
              {errors.email.message}
            </caption>
          )}
        </div>
        <div className="flex flex-col">
          <Input
            label="Idade"
            type="text"
            {...register("age", { valueAsNumber: true })}
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(
                /[^0-9]/g,
                ""
              );
            }}
          />

          {errors.age && (
            <caption className="text-xs text-left text-red-600 m-0">
              {errors.age.message}
            </caption>
          )}
        </div>
        <div className="flex justify-end py-2 mt-5">
          <Button type="submit" typeButton="success">
            Salvar
          </Button>
          <Button
            type="button"
            typeButton="error"
            onClick={() => navigate(PAGES_ROUTES.student)}
          >
            Voltar
          </Button>
        </div>
      </div>
    </form>
  );
};
