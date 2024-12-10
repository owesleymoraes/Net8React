import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { HOME, PAGES_ROUTES } from "../../../../../_routers/paths";
import { useStudentStore } from "../../../../../_store/use-student-store";
import Alert from "../../../../../components/Alert";
import { ConfirmModal } from "../../../../../components/ConfirmModal";
import { Header } from "../../../../../components/Header";
import { Loader } from "../../../../../components/Loader";
import { RegisterStudent } from "../../../../../components/RegisterStudent";
import { StudentTable } from "../../../../../components/StudentTable";
import { StudentResponse } from "../../../domain/student";
import { deleteById } from "../../../services/students/deleteStudentService";
import { getAll } from "../../../services/students/getStudentService";

export const StudentList = () => {
  const queryClient = useQueryClient();
  const addStudent = useStudentStore((state) => state.setStudent);
  const navigate = useNavigate();

  const mutation = useMutation(deleteById, {
    onSuccess: () => {
      queryClient.invalidateQueries("getAll");
      setIsOpenConfirmModal(false);
    },
  });

  const { data, error, isLoading } = useQuery<StudentResponse[], Error>(
    ["getAll"],
    () => getAll(),
    {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  const [idStudent, setIdStudent] = useState<number | undefined>();
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);

  const handleDeleteStudent = () => {
    mutation.mutate(idStudent!);
  };

  const handleCloseAlertError = () => {
    queryClient.resetQueries("getAll");
    navigate(HOME.home);
  };

  const handleClickDelete = (id: number) => {
    setIdStudent(id);
    setIsOpenConfirmModal(true);
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
      <ConfirmModal
        isOpen={isOpenConfirmModal}
        onClose={() => setIsOpenConfirmModal(false)}
        onConfirm={handleDeleteStudent}
      />
      <Header title="Cadastro de alunos" />
      <RegisterStudent
        title="Incluir novo Aluno"
        onClick={() => navigate(PAGES_ROUTES.createStudent)}
      />
      <StudentTable
        students={data}
        onEdit={(student) => {
          addStudent(student), navigate(PAGES_ROUTES.editStudent);
        }}
        onDelete={handleClickDelete}
      />
    </div>
  );
};
