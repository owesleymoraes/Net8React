import { create } from "zustand";
import { StudentResponse } from "../_features/student/domain/student";

const INITIAL_STUDENT: StudentResponse = {
  name: "",
  age: 0,
  email: "",
  id: undefined,
};

type StudentStore = {
  student: StudentResponse;
  setStudent: (student: StudentResponse) => void;
  resetStudent: () => void;
};

export const useStudentStore = create<StudentStore>((set) => ({
  student: INITIAL_STUDENT,
  setStudent: (student) => set({ student }),
  resetStudent: () => set({ student: INITIAL_STUDENT }),
}));
