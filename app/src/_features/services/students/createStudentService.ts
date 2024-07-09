import { api } from "../api/axios-config";
import { StudentRequest, StudentResponse } from "../../domain/student";

export const create = async (student: StudentRequest): Promise<number> => {
  const urlRelative = `/Student`;
  const response = await api.post<StudentResponse>(urlRelative, {
    name: student.name,
    email: student.email,
    age: student.age,
  });

  return response?.data.id;
};
