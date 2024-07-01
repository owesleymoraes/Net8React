import { Environment } from "../../../environment";
import { StudentList } from "../../domain/student";
import { api } from "../api/axios-config";

type DataResponse = {
  data: StudentList[];
  totalCount: number;
};

const getAll = async (page = 1): Promise<DataResponse | Error | undefined> => {
  try {
    const urlRelative = `/student?_page=${page}&_limit=${Environment.LIMIT_LINES}`;
    const { data, headers } = await api.get(urlRelative);

    if (data) {
      return {
        data,
        totalCount: Number(headers["x-total-count"] || Environment.LIMIT_LINES),
      };
    } else {
      return new Error("Erro ao listar os estudantes");
    }
  } catch (error) {
    return new Error(
      (error as { message: string }).message || "Erro ao listar os estudantes"
    );
  }
};

export const StudentGetAll = {
  getAll,
};
