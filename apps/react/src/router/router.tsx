import { createBrowserRouter, RouteObject } from "react-router-dom";
import { lazy } from "react";

import AppLayout from "@/layout/AppLayout";
import Login from "@/views/login/Login";

import { chartExampleRoutes } from "./module/chartExample";
import { excelRoutes } from "./module/excel";
import { webRtcRoutes } from "./module/webRtc";

const Dashbard = lazy(() => import("@/views/dashboard/Dashboard"));

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
        path: "dashboard",
        id: "Dashboard",
        element: <Dashbard />,
        loader: async () => {
          const res = await import("@/mock/dashboard.mock");
          return res.RowCardItems;
        },
      },
      chartExampleRoutes,
      excelRoutes,
      webRtcRoutes
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: "/",
});

export default router;
