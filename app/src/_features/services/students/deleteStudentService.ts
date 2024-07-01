import { api } from "../api/axios-config";
import { StudentResponse } from "../../domain/student";

const deleteById = async (idStudent: number): Promise<number | Error> => {
  try {
    const urlRelative = `/student/${idStudent}`;
    const { data } = await api.delete<StudentResponse>(urlRelative);

    if (data) {
      return data.id;
    } else {
      return new Error("Erro ao apagar um estudante");
    }
  } catch (error) {
    return new Error(
      (error as { message: string }).message || "Erro ao apagar um estudante"
    );
  }
};

export const StudentDelete = {
  deleteById,
};
