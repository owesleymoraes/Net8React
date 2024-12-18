/* eslint-disable @typescript-eslint/no-explicit-any */
import { AUTHENTICATION_2FA } from "../../../../_routers/paths";
import { api } from "../../login/services/api/axios-config";
import {
  GenerateQrCodeAuthenticationRequest,
  GenerateQrCodeAuthenticationResponse,
} from "../domain/two-facto-authentication";

export const GenerateQrCodeAuthentication = async (
  generateQrCodeAuthenticationRequest: GenerateQrCodeAuthenticationRequest
): Promise<GenerateQrCodeAuthenticationResponse> => {
  try {
    const response = await api.post<GenerateQrCodeAuthenticationResponse>(
      AUTHENTICATION_2FA.generateQrCodeAuthentication,
      {
        email: generateQrCodeAuthenticationRequest.email,
        password: generateQrCodeAuthenticationRequest.password,
      }
    );

    const data = response?.data;
    if (!data) {
      throw new Error("ERRO RESPONSE");
    }

    return data;
  } catch (error: any) {
    console.error("Error during login request:", error.message || error);
    throw new Error(
      error.response?.data?.message || "An error occurred during login"
    );
  }
};
