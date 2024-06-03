import { createAxios } from "@packages/shared";

const { request } = createAxios("/api/auth");

export const postLogin = (data: {
  email: string;
  password: string;
}): IPromise<{ access_token: string }> =>
  request({
    url: "/login",
    method: "POST",
    data,
  });
