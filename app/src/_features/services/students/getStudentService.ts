import { Environment } from "../../../environment";
import { StudentList } from "../../domain/student";
import { api } from "../api/axios-config";

export const getAll = async (page = 1): Promise<StudentList[]> => {
  const urlRelative = `/student?_page=${page}&_limit=${Environment.LIMIT_LINES}`;
  const response = await api.get<StudentList[]>(urlRelative);
  return response?.data;
};
