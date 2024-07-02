import { StudentResponse } from "../../domain/student";
import { api } from "../api/axios-config";

export const getAll = async (): Promise<StudentResponse[]> => {
  const urlRelative = `/Student`;
  const response = await api.get<StudentResponse[]>(urlRelative);
  return response?.data;
};
