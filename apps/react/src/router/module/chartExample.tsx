import {
  getBarChartData,
  getDotChartData,
  getPieChartData,
} from "@/api/charts";
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const BarChart = lazy(() => import("@/views/chartExample/BarChart"));
const PieChart = lazy(() => import("@/views/chartExample/PieChart"));
const DotChart = lazy(() => import("@/views/chartExample/DotChart"));

export const chartExampleRoutes: RouteObject = {
  path: "charts",
  children: [
    {
      path: "bar-chart",
      element: <BarChart />,
      id: "BarChart",
      loader: async () => {
        const data = await getBarChartData();
        return data.content;
      },
    },
    {
      path: "pie-chart",
      element: <PieChart />,
      loader: async () => {
        const data = await getPieChartData();
        return data.content;
      },
      id: "PieChart",
    },
    {
      path: "dot-chart",
      element: <DotChart />,
      loader: async () => {
        const data = await getDotChartData();
        return data.content;
      },
      id: "DotChart",
    },
  ],
};
