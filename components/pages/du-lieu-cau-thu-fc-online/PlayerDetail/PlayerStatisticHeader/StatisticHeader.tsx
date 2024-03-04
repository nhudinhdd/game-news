import { getColorClass, getStatistic } from "@/lib/common";
import { Divider } from "@nextui-org/react";
import clsx from "clsx";
import styles from "@/styles/playerStatistic.module.css";

type StatisticHeader = {
  data1: number;
  data2?: number;
  upgrade: number;
  level: number;
  teamColor: number;
  title: string;
  color?: string;
  activePosition?: string;
  page?: string;
  setActivePostion?: (activePosition: string) => void;
};
export default function StatisticHeader(props: StatisticHeader) {
  const {
    data1,
    data2,
    upgrade,
    level,
    teamColor,
    title,
    color,
    activePosition,
    page,
    setActivePostion,
  } = props;
  return (
    <div
      className={clsx(
        color ? " cursor-pointer" : "",
        page === "compare"
          ? "gap-[2px]"
          : "w-[135px]   xss:max-mobile:w-auto mobile:max-laptop:w-[120px] gap-2",
        "flex flex-col self-center   text-center px-2 xss:max-mobile:px-0 grow relative"
      )}
      onClick={() => setActivePostion && setActivePostion(title)}
    >
      <span
        className={clsx(
          " text-[16px] relative whitespace-nowrap",
          color,
          color ? styles.fontStatistic : "",
          color ? (activePosition == title ? "  " : "opacity-disabled") : ""
        )}
      >
        {title}
      </span>

      <div
        className={clsx(
          color ? (activePosition == title ? "  " : "opacity-disabled") : "",

          "flex flex-row justify-center "
        )}
      >
        <span
          className={clsx(
            styles.statistic,
            data2
              ? "text-[23px] xss:max-mobile:text-[24px]"
              : "text-[28px] xss:max-mobile:text-[20px]",

            getColorClass(getStatistic(data1, upgrade, level, teamColor))
          )}
        >
          {getStatistic(data1, upgrade, level, teamColor)}
        </span>

        {data2 && (
          <>
            <Divider
              orientation="vertical"
              className={clsx("xss:max-mobile:hidden h-6 mx-2 w-[2.7px]")}
            />
            <span
              className={clsx(
                styles.statistic,
                data2
                  ? "text-[23px] xss:max-mobile:text-[24px]"
                  : "text-[28px] xss:max-mobile:text-[20px]",

                getColorClass(data2)
              )}
            >
              {getStatistic(data2, upgrade, level, teamColor)}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
