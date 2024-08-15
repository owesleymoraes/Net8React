import { StudentRequest } from "../../domain/student";
import { api } from "../api/axios-config";

export const update = async (
  student: StudentRequest
): Promise<number> => {
  const urlRelative = `/student/Update/${student.id}`;
  const response = await api.put<StudentRequest>(urlRelative, {
    id: student.id,
    name: student.name,
    email: student.email,
    age: student.age,
  });

  const id = response?.data?.id;
  if (id === undefined) {
    throw new Error("ID is undefined");
  }
  return id;
};
