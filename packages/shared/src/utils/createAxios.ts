import axios, {
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from "axios";
import { stringify } from "qs";
import { TokenUtil } from "./tokenUtil";

export const createAxios = (
  baseURL: string,
  interceptor?: {
    requestInterceptor?: (config: InternalAxiosRequestConfig) => any;
    responseInterceptor?: (response: AxiosResponse) => any;
  },
) => {
  const config: CreateAxiosDefaults = {
    baseURL: baseURL || "/",
    timeout: 6000,
    paramsSerializer: {
      serialize: (params) =>
        stringify(params, {
          arrayFormat: "repeat",
          filter: (_, value) =>
            value !== "" && value !== null && value !== undefined,
        }),
    },
  };
  const request = axios.create(config);

  request.interceptors.request.use((config) => {
    interceptor?.requestInterceptor?.(config);

    const token = TokenUtil.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  request.interceptors.response.use((response) => {
    interceptor?.responseInterceptor?.(response);

    const responseData = response.data;

    return responseData;
  });

  return { request };
};
