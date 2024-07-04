import { useQuery, useQueryClient } from "react-query";
import { Header } from "../../../../components/Header";
import { StudentTable } from "../../../../components/StudentTable";
import { StudentResponse } from "../../../domain/student";
import { getAll } from "../../../services/students/getStudentService";
import { RegisterStudent } from "../../../../components/RegisterStudent";
import { Loader } from "../../../../components/Loader";
import Alert from "../../../../components/Alert";
import { FormModal } from "../../../../components/FormModal";
import { useState } from "react";

export const Home = () => {
  const queryClient = useQueryClient();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const { data, error, isLoading } = useQuery<StudentResponse[], Error>(
    ["getAll"],
    () => getAll(),
    {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  const handleCloseAlertError = () => {
    queryClient.resetQueries("getAll");
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
        message="Ocorreu um erro ao carregar os estudantes."
        onConfirm={handleCloseAlertError}
      />
    );
  }

  return (
    <div className="w-full">
      <FormModal
        isOpen={isOpenModal}
        onConfirm={() => {}}
        onClose={() => setIsOpenModal(!isOpenModal)}
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
