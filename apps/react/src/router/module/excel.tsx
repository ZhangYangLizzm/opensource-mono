import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const ExcelExport = lazy(() => import("@/views/tools/excel/ExcelExport"));
const ExcelImport = lazy(() => import("@/views/tools/excel/ExcelImport"));

export const excelRoutes: RouteObject = {
  path: "excel",
  children: [
    {
      path: "import",
      id: "ExcelImport",
      element: <ExcelImport />,
    },
    {
      path: "export",
      id: "ExcelExport",
      element: <ExcelExport />,
    },
  ],
};
