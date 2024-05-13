import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReactEchart from "echarts-for-react";
import { OverviewType } from "@/models/overview";
import { useRequest } from "ahooks";
import { getOverviewItem } from "@/api/overview";
import { Spin } from "antd";

interface RowCardItemProps {
  srcPath: string;
  title: string;
  description: number | string;
  onClick: (key: string) => void;
  className: string;
}
const RowCardItem = ({
  srcPath,
  title,
  description,
  onClick,
  className,
}: RowCardItemProps) => {
  return (
    <div className="flex-grow p-4 bg-transparent">
      <div
        onClick={() => onClick(title)}
        className={`${className} flex gap-4 items-center p-4 rounded-lg cursor-pointer hover:shadow-lg transition-all`}
      >
        <img
          src={`/images/home/${srcPath}.png`}
          className="w-16"
        />
        <div className="flex flex-col gap-4 flex-grow">
          <p className="leading-none font-bold">{title}</p>
          <p className="tracking-wider ">{description}</p>
        </div>
      </div>
    </div>
  );
};

const defaultOptions = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [],
      type: "line",
    },
  ],
};

const Dashboard = () => {
  const loaderData = useLoaderData() as {
    data: OverviewType[];
  };

  const [currentId, setCurrentId] = useState(() => loaderData.data?.[0].id);

  const { loading, data } = useRequest(() => getOverviewItem(currentId), {
    refreshDeps: [currentId],
  });

  const [options, setOptions] = useState(defaultOptions);

  const echartRef = useRef<ReactEchart>(null);

  useEffect(() => {
    setOptions({
      ...defaultOptions,
      series: [
        {
          data: data?.data?.data,
          type: "line",
        },
      ],
    });
  }, [data]);

  return (
    <div className="flex flex-col h-full space-y-4">
      <div className="flex gap-4 justify-around items-center p-4 bg-white rounded">
        {loaderData.data?.map(({ id, name, value }) => (
          <RowCardItem
            srcPath={name}
            title="title"
            description={value}
            onClick={() => setCurrentId(id)}
            key={id}
            className={`${id === currentId ? "shadow-lg" : ""}`}
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

export default Dashboard;
