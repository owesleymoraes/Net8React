import { api } from "../api/axios-config";
import { LoginRequest, LoginResponse } from "../../domain/login";

export const create = async (Login: LoginRequest): Promise<string> => {
  const urlRelative = `/Login`;
  const response = await api.post<LoginResponse>(urlRelative, {
    email: Login.email,
    password: Login.password,
  });

  const token = response?.data?.token;
  if (token === undefined) {
    throw new Error("ID is undefined");
  }
  return token;
};
