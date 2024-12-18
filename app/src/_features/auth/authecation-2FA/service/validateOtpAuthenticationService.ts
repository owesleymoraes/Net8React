/* eslint-disable @typescript-eslint/no-explicit-any */
import { AUTHENTICATION_2FA } from "../../../../_routers/paths";
import { api } from "../../login/services/api/axios-config";
import {
  ValidateOtpAuthenticationRequest,
  ValidateOtpAuthenticationResponse,
} from "../domain/validate-otp-authentication";

export const validateOtpAuthentication = async (
  validateOtpAuthenticationRequest: ValidateOtpAuthenticationRequest
): Promise<ValidateOtpAuthenticationResponse> => {
  try {
    const response = await api.post<ValidateOtpAuthenticationResponse>(
      AUTHENTICATION_2FA.validateTwoFactorAuthentication,
      {
        email: validateOtpAuthenticationRequest.email,
        password: validateOtpAuthenticationRequest.password,
        otpCode: validateOtpAuthenticationRequest.otpCode,
      }
    );

    const data = response?.data;
    if (!data) {
      throw new Error("ERRO RESPONSE");
    }

    return data;
  } catch (error: any) {
    console.error(
      "Error during validation otp code request:",
      error.message || error
    );
    throw new Error(
      error.response?.data?.message ||
        "An error occurred during validation otp code"
    );
  }
};
