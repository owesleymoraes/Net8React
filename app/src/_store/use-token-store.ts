import { create } from "zustand";

type LoginStore = {
  token: string;
  addToken: (token: string | undefined) => void;
  resetToken: () => void;
};

export const useTokenStore = create<LoginStore>((set) => ({
  token: "",
  addToken: (token) => set(() => ({ token })),
  resetToken: () => set(() => ({ token: "" })),
}));
