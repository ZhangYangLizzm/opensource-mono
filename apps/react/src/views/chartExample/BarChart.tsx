import ReactEcharts from "echarts-for-react";
import ChartWrap from "./ChartWrap";
import { useLoaderData } from "react-router-dom";

export const option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // Use axis to trigger tooltip
      type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
    },
  },
  legend: {
    textStyle: {
      color: "black",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
  },
  yAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
};

const BarChart = () => {
  const data = useLoaderData() as any;

  const _option = {
    ...option,
    series: data.map((item: { name: string; data: number[] }[]) => ({
      stack: "total",
      type: "bar",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      ...item,
    })),
  };

  return (
    <ChartWrap
      chart={(height: number) => (
        <ReactEcharts
          option={_option}
          className="w-full"
          style={{ height }}
        />
      )}
    />
  );
};

export default BarChart;
