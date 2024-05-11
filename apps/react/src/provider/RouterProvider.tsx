import { RouterProvider as ReactRouterProvider } from "react-router-dom";
import { Spin } from "antd";
import router from "@/router/router";

export const RouterProvider = () => {
  return (
    <ReactRouterProvider
      router={router}
      fallbackElement={<Spin />}
    />
  );
};
