import clsx from "clsx";

type TabSearch = {
  isActive: boolean;
  title: string;
};

export function TabSearch(props: TabSearch) {
  const { isActive, title } = props;
  return (
    <div
      className={clsx(
        "grow flex flex-col b justify-center cursor-pointer",
        isActive ? "bg-white" : "bg-[#1d1d1f] "
      )}
    >
      <span
        className={clsx(
          " text-center font-bold",
          isActive ? "text-black" : "text-white"
        )}
      >
        {title}
      </span>
    </div>
  );
}
