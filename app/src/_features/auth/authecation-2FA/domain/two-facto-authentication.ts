export type GenerateQrCodeAuthenticationRequest = {
  email: string;
  password: string;
};

export type GenerateQrCodeAuthenticationResponse = {
  secreteKey: string;
  qrCodeImage: string;
};
