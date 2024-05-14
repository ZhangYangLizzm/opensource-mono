import { createAxios } from "@packages/shared";

const { request } = createAxios("/api/overview");

export const getOverviewInfo = () =>
  request({
    url: "",
  });

export const getOverviewItemInfo = (
  id: number,
): Promise<{ statusCode: number; content: any }> => request(`info?id=${id}`);
