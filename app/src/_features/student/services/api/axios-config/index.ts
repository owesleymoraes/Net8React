import axios from "axios";
import { Environment } from "../../../../../environment";
import { errorInterceptor, responseInterceptor } from "./interceptors";
import { useGlobalStore } from "../../../../../_store/global-store";

const api = axios.create({
  baseURL: Environment.URL_BASE,
});

api.interceptors.request.use(
  (config) => {
    const token = useGlobalStore.getState().token;
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
