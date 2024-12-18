import { create } from "zustand";
import { LoginRequest } from "../../login/domain/login";

const INITIAL_UPDATED_LOGIN: LoginRequest = {
  email: "",
  password: "",
  otpCode: "",
};

type UpdatedLoginStore = {
  updatedLogin: LoginRequest;
  setUpdatedLogin: (updatedLogin: LoginRequest) => void;
  resetUpdatedLogin: () => void;
};

export const useUpdatedLoginStore = create<UpdatedLoginStore>((set) => ({
  updatedLogin: INITIAL_UPDATED_LOGIN,
  setUpdatedLogin: (updatedLogin) => set({ updatedLogin }),
  resetUpdatedLogin: () => set({ updatedLogin: INITIAL_UPDATED_LOGIN }),
}));
