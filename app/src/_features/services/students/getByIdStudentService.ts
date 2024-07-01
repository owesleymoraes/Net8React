import { api } from "../api/axios-config";
import { StudentResponse } from "../../domain/student";

export const getById = async (id: number): Promise<StudentResponse> => {
  const urlRelative = `/student/${id}}`;
  const response = await api.get<StudentResponse>(urlRelative);
  return response?.data;
};
