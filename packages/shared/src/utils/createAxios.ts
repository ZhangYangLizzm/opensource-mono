import axios, { CreateAxiosDefaults } from "axios";
import { stringify } from "qs";

export const createAxios = (baseURL: string) => {
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
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });

  request.interceptors.response.use((response) => {
    const responseData = response.data;
    if (responseData.content["access_token"]) {
      localStorage.setItem(
        "access_token",
        responseData.content["access_token"],
      );
    }
    return responseData;
  });

  return { request };
};
