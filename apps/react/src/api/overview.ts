import axios, { AxiosResponse } from "axios";

const request = axios.create();
request.interceptors.response.use((res: AxiosResponse) => {
  return res.data;
});

export const getOverview = () => axios.get("/api/overview");

export const getOverviewItem = (id: number) =>
  axios.get(`/api/overview?id=${id}`);
