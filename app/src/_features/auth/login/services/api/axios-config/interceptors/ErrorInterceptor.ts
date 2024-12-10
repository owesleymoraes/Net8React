import { AxiosError } from "axios";

export const errorInterceptor = (axiosError: AxiosError) => {
  if (axiosError.message === "Networker Error") {
    return Promise.reject(new Error("Erro de conexão"));
  }
  if (axiosError.response?.status === 401) {
    // do something
  }

  return Promise.reject(axiosError);
};
