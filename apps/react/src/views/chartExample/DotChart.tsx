import ReactEcharts from "echarts-for-react";
import ChartWrap from "./ChartWrap";
import { useLoaderData } from "react-router-dom";

const schema = [
  { name: "date", index: 0, text: "日" },
  { name: "AQIindex", index: 1, text: "AQI指数" },
  { name: "PM25", index: 2, text: "PM2.5" },
  { name: "PM10", index: 3, text: "PM10" },
  { name: "CO", index: 4, text: "一氧化碳（CO）" },
  { name: "NO2", index: 5, text: "二氧化氮（NO2）" },
  { name: "SO2", index: 6, text: "二氧化硫（SO2）" },
];

const itemStyle = {
  opacity: 0.8,
  shadowBlur: 10,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: "rgba(0,0,0,0.3)",
};

const option = {
  color: ["#dd4444", "#fec42c", "#80F1BE"],
  legend: {
    top: 10,
    data: ["北京", "上海", "广州"],
    textStyle: {
      fontSize: 16,
    },
  },
  grid: {
    left: "10%",
    right: 150,
    top: "18%",
    bottom: "10%",
  },
  tooltip: {
    backgroundColor: "rgba(255,255,255,0.7)",
    formatter: function (param: any) {
      var value = param.value;
      return (
        '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
        param.seriesName +
        " " +
        value[0] +
        "日：" +
        value[7] +
        "</div>" +
        schema[1].text +
        "：" +
        value[1] +
        "<br>" +
        schema[2].text +
        "：" +
        value[2] +
        "<br>" +
        schema[3].text +
        "：" +
        value[3] +
        "<br>" +
        schema[4].text +
        "：" +
        value[4] +
        "<br>" +
        schema[5].text +
        "：" +
        value[5] +
        "<br>" +
        schema[6].text +
        "：" +
        value[6] +
        "<br>"
      );
    },
  },
  xAxis: {
    type: "value",
    name: "日期",
    nameGap: 16,
    nameTextStyle: {
      fontSize: 16,
    },
    max: 31,
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    type: "value",
    name: "AQI指数",
    nameLocation: "end",
    nameGap: 20,
    nameTextStyle: {
      fontSize: 16,
    },
    splitLine: {
      show: false,
    },
  },
  visualMap: [
    {
      left: "right",
      top: "10%",
      dimension: 2,
      min: 0,
      max: 250,
      itemWidth: 30,
      itemHeight: 120,
      calculable: true,
      precision: 0.1,
      text: ["圆形大小：PM2.5"],
      textGap: 30,
      inRange: {
        symbolSize: [10, 70],
      },
      outOfRange: {
        symbolSize: [10, 70],
        color: ["rgba(255,255,255,0.4)"],
      },
      controller: {
        inRange: {
          color: ["#c23531"],
        },
        outOfRange: {
          color: ["#999"],
        },
      },
    },
    {
      left: "right",
      bottom: "5%",
      dimension: 6,
      min: 0,
      max: 50,
      itemHeight: 120,
      text: ["明暗：二氧化硫"],
      textGap: 30,
      inRange: {
        colorLightness: [0.9, 0.5],
      },
      outOfRange: {
        color: ["rgba(255,255,255,0.4)"],
      },
      controller: {
        inRange: {
          color: ["#c23531"],
        },
        outOfRange: {
          color: ["#999"],
        },
      },
    },
  ],
};

const DotChart = () => {
  const loaderData = useLoaderData() as any[];

  const _option = Object.assign({}, option, {
    series: loaderData.map((item) => ({ type: "scatter", itemStyle, ...item })),
  });
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

export default DotChart;
