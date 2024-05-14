import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import { lazy } from "react";

import AppLayout from "@/layout/AppLayout";

import { chartExampleRoutes } from "./module/chartExample";
import { excelRoutes } from "./module/excel";
import { webRtcRoutes } from "./module/webRtc";
import { getOverviewInfo } from "@/api/overview";
import Login from "@/views/user/Login";

const Overview = lazy(() => import("@/views/overview/Overview"));

const routes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
    id: "Login",
  },
  {
    path: "/",
    element: <AppLayout />,
    id: "AppLayout",
    children: [
      {
        path: "overview",
        id: "Overview",
        element: <Overview />,
        loader: async () => {
          const res = await getOverviewInfo();
          return res.content;
        },
      },
      chartExampleRoutes,
      excelRoutes,
      webRtcRoutes,
    ],
  },
  {
    path: "/:catchAll(.*)",
    element: <Navigate to="/overview" />,
  },
];

const router = createBrowserRouter(routes, {
  basename: "/",
});

export default router;
