import axios from "axios";
import { Environment } from "../../../../../environment";
import { errorInterceptor, responseInterceptor } from "./interceptors";
import { useTokenStore } from "../../../../../_store/use-token-store";

const api = axios.create({
  baseURL: Environment.URL_BASE,
});

api.interceptors.request.use(
  (config) => {
    const token = useTokenStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export { api };
