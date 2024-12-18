import { create } from "zustand";
import { GenerateQrCodeAuthenticationResponse } from "../domain/two-facto-authentication";

const INITIAL_GENERATE_QR_CODE_AUTHENTICATION: GenerateQrCodeAuthenticationResponse =
  {
    qrCodeImage: "",
    secreteKey: "",
  };

type GenerateQrCodeAuthenticationStore = {
  qrCode: GenerateQrCodeAuthenticationResponse;
  setQrCode: (student: GenerateQrCodeAuthenticationResponse) => void;
  resetQrCode: () => void;
};

export const useGenerateQrCodeAuthenticationStore =
  create<GenerateQrCodeAuthenticationStore>((set) => ({
    qrCode: INITIAL_GENERATE_QR_CODE_AUTHENTICATION,
    setQrCode: (qrCode) => set({ qrCode }),
    resetQrCode: () => set({ qrCode: INITIAL_GENERATE_QR_CODE_AUTHENTICATION }),
  }));
