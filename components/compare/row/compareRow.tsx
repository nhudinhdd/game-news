import { getColorClass, getColorPosition } from "@/lib/common";
import { Divider } from "@nextui-org/react";
import clsx from "clsx";
import { ReactElement } from "react";
import styles from "../../../styles/playerStatistic.module.css";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CompareRow = {
  value1: number | ReactElement<any, any> | string;
  value2: number | ReactElement<any, any> | string;
  title: string;
  isEnd?: boolean;
  isStatistic?: boolean;
  isAllPosition?: boolean;
};

export default function CompareRow(props: CompareRow) {
  const { value1, value2, title, isEnd, isStatistic, isAllPosition } = props;
  return (
    <div className="w-full text-center flex flex-col gap-3">
      <div className="flex flex-row justify-between">
        <div className="relative ">
          {isStatistic && value1 && Number(value1) - Number(value2) > 0 && (
            <div className="flex flex-row gap-[6px] w-[33px] absolute right-[30px]  xss:max-mobile:right-[22px]">
              <FontAwesomeIcon
                icon={faCaretUp}
                className="text-[#51b410] w-[10px]"
              />
              <span className={styles.moreThan}>
                {Number(value1) - Number(value2)}
              </span>
            </div>
          )}

          <span
            className={clsx(
              "inline-block float-left relative",
              isStatistic ? getColorClass(Number(value1)) : "",
              isStatistic ? styles.statistic_detail : ""
            )}
          >
            {value1}
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
              isStatistic ? getColorClass(Number(value2)) : "",
              isStatistic ? styles.statistic_detail : ""
            )}
          >
            {value2}
          </span>
          {isStatistic && value2 && Number(value2) - Number(value1) > 0 && (
            <div className="flex flex-row gap-[6px] w-[33px] absolute left-[30px] xss:max-mobile:left-[22px]">
              <span className={styles.moreThan}>
                {Number(value2) - Number(value1)}
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
