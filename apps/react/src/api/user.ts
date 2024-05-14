import { createAxios } from "@packages/shared";

const { request } = createAxios("/api/auth");

export const postLogin = (data: {
  email: string;
  password: string;
}): Promise<{
  statusCode: number;
  content: { access_token: string };
  message: string;
}> =>
  request({
    url: "/login",
    method: "POST",
    data,
  });
