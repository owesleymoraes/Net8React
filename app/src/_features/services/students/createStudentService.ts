import { api } from "../api/axios-config";
import { StudentRequest, StudentResponse } from "../../domain/student";

const create = async (student: StudentRequest): Promise<number | Error> => {
  try {
    const urlRelative = `/student`;
    const { data } = await api.post<StudentResponse>(urlRelative, {
      name: student.name,
      email: student.email,
      age: student.age,
    });

    if (data) {
      return data.id;
    } else {
      return new Error("Erro ao criar um estudante");
    }
  } catch (error) {
    return new Error(
      (error as { message: string }).message || "Erro ao criar um estudante"
    );
  }
};

export const StudentCreate = {
  create,
};
