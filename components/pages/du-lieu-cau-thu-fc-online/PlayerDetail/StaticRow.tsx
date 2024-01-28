import { getColorClass, getStatistic } from "@/lib/common";
import clsx from "clsx";
import styles from "@/styles/playerStatistic.module.css";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

type StaticRow = {
  title: string;
  upgrade: number;
  level: number;
  teamColor: number;
  value1: number;
  value2?: number;

  upgrade2?: number;
  level2?: number;
  teamColor2?: number;
};
export default function StaticRow(props: StaticRow) {
  const {
    value1,
    upgrade,
    level,
    teamColor,
    value2,
    title,
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
    <div className="flex flex-row   laptop:max-desktop:w-[195px] xss:max-mobile:text-textMobile">
      <div
        className={clsx(
          "flex flex-row justify-between w-[155px] shrink-0 mobileMiddle:max-mobile:w-[160px] xssMiddle:max-mobileMiddle:w-[132px]",
          value2 ? "" : "mobileMiddle:max-mobile:w-[130px]"
        )}
      >
        <span>{title}</span>
        <div className="flex flex-row gap-[14px]">
          <span
            className={clsx(
              styles.statistic_detail,
              getColorClass(statistic1),
              "xss:max-mobile:!text-textMobileStatistic"
            )}
          >
            {statistic1}
          </span>
          {value2 && (
            <div className="flex flex-row">
              <span
                className={clsx(
                  styles.statistic_detail,
                  getColorClass(statistic2),
                  "xss:max-mobile:!text-textMobileStatistic"
                )}
              >
                {statistic2}
              </span>
            </div>
          )}
        </div>
      </div>

      {(statistic2 && statistic1 && statistic2 - statistic1 > 0 && (
        <div className="flex flex-row justify-end gap-[6px] w-[33px] ml-[12px]">
          <span
            className={clsx(
              "xss:max-mobile:!text-textModileCompare",
              styles.moreThan
            )}
          >
            {statistic2 - statistic1}
          </span>

          <FontAwesomeIcon
            icon={faCaretUp}
            className="text-[#51b410] w-[10px]"
          />
        </div>
      )) ||
        (statistic2 && statistic1 && statistic2 - statistic1 < 0 && (
          <div className="flex flex-row w-[33px] ml-[12px] justify-end  gap-[6px]">
            <span
              className={clsx(
                "xss:max-mobile:!text-textModileCompare",
                styles.leftThan
              )}
            >
              {statistic1 - statistic2}
            </span>

            <FontAwesomeIcon
              icon={faCaretDown}
              className="text-[#646464] w-[10px]"
            />
          </div>
        ))}
    </div>
  );
}
