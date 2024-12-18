/* eslint-disable @typescript-eslint/no-explicit-any */
import { LOGIN_ROUTES } from "../../../../../_routers/paths";
import { LoginRequest, LoginAuthenticationResponse } from "../../domain/login";
import { api } from "../api/axios-config";

export const login = async (
  loginRequest: LoginRequest
): Promise<LoginAuthenticationResponse> => {
  try {
    const response = await api.post<LoginAuthenticationResponse>(
      LOGIN_ROUTES.login,
      {
        email: loginRequest.email,
        password: loginRequest.password,
      }
    );

    const data = response?.data;
    if (!data) {
      throw new Error("Error, null");
    }

    return data;
  } catch (error: any) {
    console.error("Error during login request:", error.message || error);
    throw new Error(
      error.response?.data?.message || "An error occurred during login"
    );
  }
};
