import router from "@/router/router";
import { createAxios } from "@packages/shared";

const { request } = createAxios("/api/overview", {
  responseInterceptor(response) {
    if (response.data.statusCode === 401) {
      router.navigate("/login");
    }
  },
});

export const getOverviewInfo = (): IPromise =>
  request({
    url: "",
  });

export const getOverviewItemInfo = (
  id: number,
): Promise<{ statusCode: number; content: any }> => request(`info?id=${id}`);
