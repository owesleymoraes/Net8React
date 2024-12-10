/* eslint-disable @typescript-eslint/no-explicit-any */
import { LOGIN_ROUTES } from "../../../../../_routers/paths";
import { LoginRequest, LoginResponse } from "../../domain/login";
import { api } from "../api/axios-config";

export const login = async (
  loginRequest: LoginRequest
): Promise<LoginResponse> => {
  try {
    const response = await api.post<LoginResponse>(LOGIN_ROUTES.login, {
      email: loginRequest.email,
      password: loginRequest.password,
    });

    const data = response?.data;
    if (!data?.token) {
      throw new Error("Token is undefined");
    }

    return data;
  } catch (error: any) {
    console.error("Error during login request:", error.message || error);
    throw new Error(
      error.response?.data?.message || "An error occurred during login"
    );
  }
};
