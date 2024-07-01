import { api } from "../api/axios-config";
import { StudentRequest, StudentResponse } from "../../domain/student";

const update = async (
  idStudent: number,
  student: StudentRequest
): Promise<number | Error> => {
  try {
    const urlRelative = `/student/${idStudent}`;
    const { data } = await api.put<StudentResponse>(urlRelative, {
      name: student.name,
      email: student.email,
      age: student.age,
    });

    if (data) {
      return data.id;
    } else {
      return new Error("Erro ao atualizar um estudante");
    }
  } catch (error) {
    return new Error(
      (error as { message: string }).message || "Erro ao atualizar um estudante"
    );
  }
};

export const StudentUpdate = {
  update,
};
