import { api } from "../api/axios-config";
import { StudentResponse } from "../../domain/student";

const getById = async (
  id: number
): Promise<StudentResponse | Error | undefined> => {
  try {
    const urlRelative = `/student/${id}}`;
    const { data } = await api.get(urlRelative);

    if (data) {
      return data;
    } else {
      return new Error("Erro ao consultar o estudante");
    }
  } catch (error) {
    return new Error(
      (error as { message: string }).message || "Erro ao consultar o estudante"
    );
  }
};

export const StudentGetById = {
  getById,
};
