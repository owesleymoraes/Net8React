import { api } from "../api/axios-config";
import { StudentResponse } from "../../domain/student";

export const deleteById = async (idStudent: number): Promise<number> => {
  const urlRelative = `/student/${idStudent}`;
  const response = await api.delete<StudentResponse>(urlRelative);
  return response?.data?.id;
};
