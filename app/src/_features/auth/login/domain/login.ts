export type LoginRequest = {
  email: string;
  password: string;
  otpCode?: string;
};

export type LoginResponse = {
  token: string;
};

export type LoginAuthenticationResponse = {
  success: boolean;
  isFirstAccess: boolean;
};
