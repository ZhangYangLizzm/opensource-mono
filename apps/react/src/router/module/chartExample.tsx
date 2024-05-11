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
        return (await import("@/mock/charts/barChart.mock")).data;
      },
    },
    {
      path: "pie-chart",
      element: <PieChart />,
      loader: async () => {
        return (await import("@/mock/charts/pieChart.mock")).data;
      },
      id: "PieChart",
    },
    {
      path: "dot-chart",
      element: <DotChart />,
      id: "DotChart",
    },
  ],
};
