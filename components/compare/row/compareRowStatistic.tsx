import { getColorClass, getColorPosition, getStatistic } from "@/lib/common";
import { Divider } from "@nextui-org/react";
import clsx from "clsx";
import { ReactElement, useEffect, useState } from "react";
import styles from "../../../styles/playerStatistic.module.css";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CompareRow = {
  value1: number;
  value2: number;
  title: string;
  isEnd?: boolean;
  isStatistic?: boolean;
  isAllPosition?: boolean;
  upgrade: number;
  level: number;
  teamColor: number;

  upgrade2: number;
  level2: number;
  teamColor2: number;
};

export default function CompareRowStatistic(props: CompareRow) {
  const {
    value1,
    value2,
    title,
    isEnd,
    isStatistic,
    isAllPosition,
    upgrade,
    level,
    teamColor,
    upgrade2,
    level2,
    teamColor2,
  } = props;

  useEffect(() => {
    setStatistic1(getStatistic(value1, upgrade, level, teamColor));
  }, [value1, upgrade, level, teamColor]);

  useEffect(() => {
    setStatistic2(getStatistic(value2, upgrade2, level2, teamColor2));
  }, [value2, upgrade2, level2, teamColor2]);

  const [statistic1, setStatistic1] = useState(
    getStatistic(value1, upgrade, level, teamColor)
  );
  const [statistic2, setStatistic2] = useState(
    getStatistic(value2, upgrade2, level2, teamColor2)
  );

  return (
    <div className="w-full text-center flex flex-col gap-3">
      <div className="flex flex-row justify-between">
        <div className="relative ">
          {isStatistic && statistic1 && statistic1 - Number(statistic2) > 0 && (
            <div className="flex flex-row gap-[6px] w-[33px] absolute right-[30px]  xss:max-mobile:right-[22px]">
              <FontAwesomeIcon
                icon={faCaretUp}
                className="text-[#51b410] w-[10px]"
              />
              <span className={styles.moreThan}>
                {Number(statistic1) - Number(statistic2)}
              </span>
            </div>
          )}

          <span
            className={clsx(
              "inline-block float-left relative",
              isStatistic ? getColorClass(Number(statistic1)) : "",
              isStatistic ? styles.statistic_detail : ""
            )}
          >
            {statistic1}
          </span>
        </div>
        <span
          className={clsx(
            getColorPosition(title),
            "inline-block",
            isAllPosition ? "font-semibold" : ""
          )}
        >
          {title}
        </span>
        <div className="relative">
          <span
            className={clsx(
              "inline-block float-right relative",
              isStatistic ? getColorClass(Number(statistic2)) : "",
              isStatistic ? styles.statistic_detail : ""
            )}
          >
            {statistic2}
          </span>
          {isStatistic &&
            value2 &&
            Number(statistic2) - Number(statistic1) > 0 && (
              <div className="flex flex-row gap-[6px] w-[33px] absolute left-[30px] xss:max-mobile:left-[22px]">
                <span className={styles.moreThan}>
                  {Number(statistic2) - Number(statistic1)}
                </span>
                <FontAwesomeIcon
                  icon={faCaretUp}
                  className="text-[#51b410] w-[10px]"
                />
              </div>
            )}
        </div>
      </div>

      {!isEnd && <Divider></Divider>}
    </div>
  );
}
