import { createBrowserRouter, RouteObject } from "react-router-dom";
import { lazy } from "react";

import AppLayout from "@/layout/AppLayout";
import Login from "@/views/login/Login";

import { chartExampleRoutes } from "./module/chartExample";
import { excelRoutes } from "./module/excel";
import { webRtcRoutes } from "./module/webRtc";
import { getOverview } from "@/api/overview";

const Dashboard = lazy(() => import("@/views/dashboard/Dashboard"));

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
        element: <Dashboard />,
        loader: async () => {
          const res = await getOverview();
          return res.data;
        },
      },
      chartExampleRoutes,
      excelRoutes,
      webRtcRoutes,
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: "/",
});

export default router;
