import { StudentUpdateRequest } from "../../domain/student";
import { api } from "../api/axios-config";

export const update = async (
  student: StudentUpdateRequest
): Promise<number> => {
  const urlRelative = `/student/Update/${student.id}`;
  const response = await api.put<StudentUpdateRequest>(urlRelative, {
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
