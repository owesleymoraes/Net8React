import { ChangeEvent, useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Alert from "../../../../components/Alert";
import { FormModal, FormStudent } from "../../../../components/FormModal";
import { Header } from "../../../../components/Header";
import { Loader } from "../../../../components/Loader";
import { RegisterStudent } from "../../../../components/RegisterStudent";
import { StudentTable } from "../../../../components/StudentTable";
import { StudentResponse } from "../../../domain/student";
import { create } from "../../../services/students/createStudentService";
import { getAll } from "../../../services/students/getStudentService";

export const Home = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({ mutationFn: create });

  const { data, error, isLoading } = useQuery<StudentResponse[], Error>(
    ["getAll"],
    () => getAll(),
    {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  const messageError = error
    ? "Ocorreu um erro ao carregar os estudantes."
    : "Ocorreu um erro ao criar um estudante.";

  const [disabled, setDisabled] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [form, setForm] = useState<FormStudent>({
    name: "",
    email: "",
    age: "",
  });

  const handleCreateStudent = () => {
    mutation.mutate({
      name: form.name,
      email: form.email,
      age: Number(form.age),
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const validator = {
      name: /^[A-Za-z\s]+$/,
      age: /^\d+$/,
    };

    if (
      validator[name as keyof typeof validator] &&
      !validator[name as keyof typeof validator]?.test(value)
    ) {
      if (value === "" || value === undefined) {
        setForm((prevForm) => ({
          ...prevForm,
          [name]: value,
        }));
      }
      return;
    }

    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleCloseAlertError = () => {
    queryClient.resetQueries("getAll");
    mutation.reset()
  };

  const handleCloseForm = () => {
    setForm({
      name: "",
      email: "",
      age: "",
    });
    setIsOpenModal(!isOpenModal);
  };

  const isEmptyForm = (form: FormStudent): boolean => {
    return Object.values(form).some((value) => value === "");
  };

  if (isLoading || mutation.isLoading) {
    return <Loader isOpen={isLoading} />;
  }

  if (error || mutation.error) {
    return (
      <Alert
        title="Erro"
        typeButton="error"
        titleButtonPrimary="Fechar"
        message={messageError}
        onConfirm={handleCloseAlertError}
      />
    );
  }

  // useEffect(() => {
  //   setDisabled(isEmptyForm(form));
  // }, [form]);

  return (
    <div className="w-full">
      <FormModal
        isOpen={isOpenModal}
        onConfirm={handleCreateStudent}
        formValues={form}
        onChange={(event) => handleChange(event)}
        onClose={handleCloseForm}
        disabled={disabled}
      />
      <Header title="Cadastro de alunos" />
      <RegisterStudent
        title="Incluir novo Aluno"
        onClick={() => setIsOpenModal(!isOpenModal)}
      />
      <StudentTable students={data} />
    </div>
  );
};
