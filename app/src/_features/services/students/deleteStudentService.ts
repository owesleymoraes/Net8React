import { StudentDeleteResponse } from "../../domain/student";
import { api } from "../api/axios-config";

export const deleteById = async (idStudent: number): Promise<number> => {
  const urlRelative = `/student/Delete/${idStudent}`;
  const response = await api.delete<StudentDeleteResponse>(urlRelative, {
    data: {
      id: idStudent,
    },
  });
  const id = response?.data?.id;
  if (id === undefined) {
    throw new Error("ID is undefined");
  }
  return id;
};
