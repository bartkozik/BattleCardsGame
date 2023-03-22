import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import env from "utils/env";
import qs from "qs";

export const api = axios.create({
  baseURL: env.backendUrl,
  paramsSerializer: {
    serialize: (params) => {
      return qs.stringify(params, { arrayFormat: "repeat" });
    }
  }
});

api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return new Promise((resolve) => {
      resolve({
        ...config,
        headers: {
          ...config.headers
        } as AxiosRequestHeaders
      });
    });
  },
  (err: unknown) => Promise.reject(err)
);

api.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    // eslint-disable-next-line no-console
    console.error("Error: ", error);
    return Promise.reject(error);
  }
);

export default api;
