import { create } from "zustand";
import { LoginAuthenticationResponse } from "../_features/auth/login/domain/login";

const INITIAL_AUTHENTICATION: LoginAuthenticationResponse = {
  success: false,
  isFirstAccess: false,
};

type LoginAuthenticationStore = {
  authentication: LoginAuthenticationResponse;
  setAuthentication: (authentication: LoginAuthenticationResponse) => void;
  resetAuthentication: () => void;
};

export const useAuthenticationStore = create<LoginAuthenticationStore>((set) => ({
  authentication: INITIAL_AUTHENTICATION,
  setAuthentication: (authentication) => set({ authentication }),
  resetAuthentication: () => set({ authentication: INITIAL_AUTHENTICATION }),
}));
