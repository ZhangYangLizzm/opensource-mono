import { useDeferHeight } from "@/hooks/useDeferHeight";
import { Spin } from "antd";

const ChartWrap = ({ chart }: { chart: (height: number) => JSX.Element }) => {
  const { divRef, divHeight, loading } = useDeferHeight();

  return (
    <div
      className="h-full flex items-center justify-center w-full p-4"
      ref={divRef}
    >
      {loading ? (
        <Spin
          spinning={loading}
          size="large"
        />
      ) : (
        chart(divHeight)
      )}
    </div>
  );
};

export default ChartWrap;
