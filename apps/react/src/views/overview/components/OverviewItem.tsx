interface RowCardItemProps {
  srcPath: string;
  title: string;
  description: number | string;
  onClick: (key: string) => void;
  className: string;
}

export const OverviewItem = ({
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
