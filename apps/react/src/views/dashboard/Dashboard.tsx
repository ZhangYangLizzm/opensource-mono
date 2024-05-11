import React, { useState } from "react";

import HomeCharts from "./HomeCharts";
import { LineChartKey } from "@/mock/dashboard.mock";
import { useLoaderData } from "react-router-dom";

interface RowCardItemProps {
  srcPath: string;
  title: LineChartKey;
  description: number | string;
  onClick: (key: LineChartKey) => void;
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

const Dashboard: React.FC = () => {
  const defaultLineChartKey = LineChartKey.NewVisits;

  const [lineChartKey, setLineChartKey] =
    useState<LineChartKey>(defaultLineChartKey);

  const [currentIndex, setCurrentIndex] = useState(0);

  const RowCardItems = useLoaderData() as any[];
  console.log(RowCardItems)

  const rowCardItemClickHandler = (key: LineChartKey, index: number) => {
    setLineChartKey(key);
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col h-full ">
      <div className="flex gap-4 justify-around items-center p-4">
        {RowCardItems.map(({ srcPath, title, description }, index) => (
          <RowCardItem
            srcPath={srcPath}
            title={title}
            description={description}
            onClick={(key: LineChartKey) => rowCardItemClickHandler(key, index)}
            key={title}
            className={`${index === currentIndex ? "shadow-lg" : "shadow"}`}
          />
        ))}
      </div>
      <div className="flex-grow flex items-center ">
        <HomeCharts currentLineChartKey={lineChartKey} />
      </div>
    </div>
  );
};

export default Dashboard;
