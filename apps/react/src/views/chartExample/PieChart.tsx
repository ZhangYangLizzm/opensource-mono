import ReactEcharts from "echarts-for-react";
import ChartWrap from "./ChartWrap";
import { useLoaderData } from "react-router-dom";
const option = {
  legend: {
    top: "bottom",
    textStyle: {
      color: "black",
    },
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  series: {
    type: "pie",
    radius: [50, 250],
    center: ["50%", "50%"],
    roseType: "area",
    itemStyle: {
      borderRadius: 8,
    },
  },
};

const PieChart = () => {
  const data = useLoaderData() as any;

  const _option = {
    ...option,
    series: {
      ...option.series,
      ...data,
    },
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

export default PieChart;
