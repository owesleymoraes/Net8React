import axios from "axios";
import { Environment } from "../../../../../environment/index";
import { errorInterceptor, responseInterceptor } from "./interceptors";

const api = axios.create({
  baseURL: Environment.URL_BASE,
});

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export { api };
