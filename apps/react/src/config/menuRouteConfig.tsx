import {
  DashboardOutlined,
  BarChartOutlined,
  PieChartOutlined,
  DotChartOutlined,
  FileExcelOutlined,
  ImportOutlined,
  ExportOutlined,
} from "@ant-design/icons";

export interface MenuRouteConfigStruct {
  type: "link" | "menuGroup";
  path: string;
  label: string;
  key: string;
  icon?: React.ReactNode;
  children?: MenuRouteConfigStruct[];
}

export const MenuRouteConfig: MenuRouteConfigStruct[] = [
  {
    type: "link",
    path: "overview",
    icon: <DashboardOutlined />,
    label: "Overview",
    key: "Dashbard",
  },
  {
    type: "menuGroup",
    path: "charts",
    key: "Charts",
    label: "图表",
    icon: <BarChartOutlined />,
    children: [
      {
        type: "link",
        path: "bar-chart",
        label: "柱状图",
        key: "BarChart",
        icon: <BarChartOutlined />,
      },
      {
        type: "link",
        path: "pie-chart",
        label: "饼状图",
        key: "PieChart",
        icon: <PieChartOutlined />,
      },
      {
        type: "link",
        path: "dot-chart",
        label: "散点图",
        key: "DotChart",
        icon: <DotChartOutlined />,
      },
    ],
  },

  {
    type: "menuGroup",
    path: "excel",
    key: "Excel",
    label: "Excel",
    icon: <FileExcelOutlined />,
    children: [
      {
        type: "link",
        path: "import",
        label: "Excel导入",
        key: "ExcelImport",
        icon: <ImportOutlined />,
      },
      {
        type: "link",
        path: "export",
        label: "Excel导出",
        key: "ExcelExport",
        icon: <ExportOutlined />,
      },
    ],
  },
];
