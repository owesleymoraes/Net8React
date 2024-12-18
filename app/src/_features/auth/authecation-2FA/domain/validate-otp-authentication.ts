export type ValidateOtpAuthenticationRequest = {
  email: string;
  password: string;
  otpCode: string;
};

export type ValidateOtpAuthenticationResponse = {
  token: string;
  expiration: string;
};
