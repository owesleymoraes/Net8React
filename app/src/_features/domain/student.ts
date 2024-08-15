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
  id?: number;
  name: string;
  email: string;
  age?: number;
};

export type StudentIdResponse = {
  id: number;
};
