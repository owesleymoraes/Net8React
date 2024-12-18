//home
export const HOME = {
  home: "/",
};

//auth - 2FA
export const AUTHENTICATION_2FA = {
  generateQrCodeAuthentication: "/Account/GenerateTwoFactorAuthentication",
  validateTwoFactorAuthentication: "/Account/ValidateTwoFactorAuthentication",
  manualAuthentication: "/Account/ManualTwoFactorAuthentication",
  otpAuthentication: "/Account/otpAuthentication",
};

//login
export const LOGIN_ROUTES = {
  login: "/Account/LoginUser",
};

//pages
export const PAGES_ROUTES = {
  student: "/Student",
  createStudent: "/CreateStudent",
  editStudent: "/EditStudent",
  dashboard: "/Dashboard",
};
