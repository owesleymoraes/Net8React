import { StudentCreate } from "./createStudentService";
import { StudentDelete } from "./deleteStudentService";
import { StudentGetById } from "./getByIdStudentService";
import { StudentGetAll } from "./getStudentService";
import { StudentUpdate } from "./updateStudentService";

export const StudentServiceData = {
  StudentGetAll,
  StudentGetById,
  StudentCreate,
  StudentUpdate,
  StudentDelete,
};
