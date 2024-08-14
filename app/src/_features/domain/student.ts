export type StudentList = {
  data: StudentResponse[];
  totalCount: number;
};

export type StudentResponse = {
  id?: number;
  name: string;
  email: string;
  age: number;
};

export type StudentRequest = {
  name: string;
  email: string;
  age: number;
};

export type StudentUpdateRequest = {
  id?: number;
  name: string;
  email: string;
  age?: number;
};

export type StudentDeleteResponse = {
  id: number;
};
