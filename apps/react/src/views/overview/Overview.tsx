import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReactEchart from "echarts-for-react";
import { OverviewType } from "@/models/overview";
import { useRequest } from "ahooks";
import { getOverviewItemInfo } from "@/api/overview";
import { Spin } from "antd";
import { OverviewItem } from "./components/OverviewItem";
import { defaultOptions } from "./overview.option";

const Overview = () => {
  const loaderData = useLoaderData() as OverviewType[];
  const [currentId, setCurrentId] = useState(() => loaderData?.[0].id);

  const { loading, data } = useRequest(() => getOverviewItemInfo(currentId), {
    refreshDeps: [currentId],
  });

  const [options, setOptions] = useState(defaultOptions);

  const echartRef = useRef<ReactEchart>(null);

  useEffect(() => {
    setOptions({
      ...defaultOptions,
      xAxis: {
        ...defaultOptions.xAxis,
        data: data?.content?.xAxis || [],
      },
      series: {
        ...defaultOptions.series,
        data: data?.content?.yAxis || [],
      },
    });
  }, [data]);

  return (
    <div className="flex flex-col h-full space-y-4">
      <div className="flex gap-4 justify-around items-center p-4 bg-white rounded">
        {loaderData?.map(({ id, name, value }) => (
          <OverviewItem
            srcPath={name}
            title={name}
            description={value}
            onClick={() => setCurrentId(id)}
            key={id}
            className={`${id === currentId ? "shadow" : ""}`}
          />
        ))}
      </div>
      <div className="flex-grow flex items-center bg-white p-4 rounded">
        {loading ? (
          <Spin spinning={loading} />
        ) : (
          <ReactEchart
            ref={echartRef}
            option={options}
            className=" w-full"
            style={{ height: "400px" }}
            notMerge={true}
            lazyUpdate={true}
          />
        )}
      </div>
    </div>
  );
};

export default Overview;
