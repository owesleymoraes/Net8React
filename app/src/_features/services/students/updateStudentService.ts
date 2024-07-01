import { api } from "../api/axios-config";
import { StudentRequest, StudentResponse } from "../../domain/student";

export const update = async (
  idStudent: number,
  student: StudentRequest
): Promise<number> => {
  const urlRelative = `/student/${idStudent}`;
  const response = await api.put<StudentResponse>(urlRelative, {
    name: student.name,
    email: student.email,
    age: student.age,
  });

  return response?.data?.id;
};
