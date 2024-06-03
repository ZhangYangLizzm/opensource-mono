import router from "@/router/router";
import { createAxios } from "@packages/shared";

const { request } = createAxios("/api/charts", {
  responseInterceptor(response) {
    if (response.data.statusCode === 401) {
      router.navigate("/login");
    }
  },
});

export const getChartData = (name: "bar" | "pie" | "dot"): IPromise =>
  request({
    url: name,
  });

export const getBarChartData = (): IPromise => getChartData("bar");

export const getPieChartData = (): IPromise => getChartData("pie");

export const getDotChartData = (): IPromise => getChartData("dot");
