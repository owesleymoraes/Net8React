import { ChangeEvent, useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Alert from "../../../../components/Alert";
import { ConfirmModal } from "../../../../components/ConfirmModal";
import { FormModal, FormStudent } from "../../../../components/FormModal";
import { Header } from "../../../../components/Header";
import { Loader } from "../../../../components/Loader";
import { RegisterStudent } from "../../../../components/RegisterStudent";
import { StudentTable } from "../../../../components/StudentTable";
import { StudentRequest, StudentResponse } from "../../../domain/student";
import { create } from "../../../services/students/createStudentService";
import { deleteById } from "../../../services/students/deleteStudentService";
import { getAll } from "../../../services/students/getStudentService";
import { update } from "../../../services/students/updateStudentService";

export const Home = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(create, {
    onSuccess: () => {
      queryClient.invalidateQueries("getAll");

      setIsOpenModal(false);

      setForm({
        name: "",
        email: "",
        age: "",
      });
    },
  });

  const mutationUpdate = useMutation(update, {
    onSuccess: () => {
      queryClient.invalidateQueries("getAll");

      setIsOpenModal(false);
      setIsEdit(false);

      setForm({
        name: "",
        email: "",
        age: "",
      });
    },
  });

  const mutationDelete = useMutation(deleteById, {
    onSuccess: () => {
      queryClient.invalidateQueries("getAll");

      setIsOpenModal(false);
      setIsOpenConfirmModal(false);
      setIsEdit(false);

      setForm({
        name: "",
        email: "",
        age: "",
      });
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

  const messageError = error
    ? "Ocorreu um erro ao carregar os estudantes."
    : "Ocorreu um erro ao criar um estudante.";

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [idStudent, setIdStudent] = useState<number | undefined>();
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [studentEdit, setStudentEdit] = useState<StudentRequest>({
    id: undefined,
    name: "",
    email: "",
    age: undefined,
  });
  const [disabledButton, setDisabledButton] = useState(false);
  const [form, setForm] = useState<FormStudent>({
    name: "",
    email: "",
    age: "",
  });

  const handleSubmitStudent = () => {
    if (isEdit) {
      mutationUpdate.mutate({
        id: studentEdit.id,
        name: form.name,
        email: form.email,
        age: Number(form.age),
      });
    } else {
      mutation.mutate({
        name: form.name,
        email: form.email,
        age: Number(form.age),
      });
    }
  };

  const handleDeleteStudent = () => {
    mutationDelete.mutate(idStudent!);
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
    mutation.reset();
  };

  const handleCloseForm = () => {
    setForm({
      name: "",
      email: "",
      age: "",
    });
    setIsEdit(false);
    setIsOpenModal(false);
  };

  const handleEditStudent = (student: StudentRequest) => {
    setDisabledButton(true);
    setStudentEdit({
      id: student.id,
      name: student.name,
      email: student.email,
      age: student.age,
    });
    setIsEdit(true);
    setForm({
      name: student.name,
      email: student.email,
      age: String(student.age),
    });
  };

  const handleClickDelete = (id: number) => {
    setIdStudent(id);
    setIsOpenConfirmModal(true);
  };

  const isEmptyForm = (form: FormStudent): boolean => {
    return Object.values(form).some((value) => value === "");
  };

  useEffect(() => {
    const compareStudents =
      form.name === studentEdit?.name &&
      form.email === studentEdit?.email &&
      form.age === String(studentEdit?.age);

    setDisabledButton(compareStudents || isEmptyForm(form));
  }, [form, disabledButton, studentEdit]);

  if (isLoading || mutation.isLoading) {
    return <Loader isOpen={isLoading || mutation.isLoading} />;
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

  return (
    <div className="w-full">
      <ConfirmModal
        isOpen={isOpenConfirmModal}
        onClose={() => setIsOpenConfirmModal(false)}
        onConfirm={handleDeleteStudent}
      />
      <FormModal
        isOpen={isOpenModal || isEdit}
        onConfirm={handleSubmitStudent}
        formValues={form}
        onChange={(event) => handleChange(event)}
        onClose={handleCloseForm}
        disabled={disabledButton}
      />
      <Header title="Cadastro de alunos" />
      <RegisterStudent
        title="Incluir novo Aluno"
        onClick={() => setIsOpenModal(!isOpenModal)}
      />
      <StudentTable
        students={data}
        onEdit={handleEditStudent}
        onDelete={handleClickDelete}
      />
    </div>
  );
};
