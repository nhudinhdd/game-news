import { getColorPosition, getValueFromPositonKey } from "@/lib/common";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import styles from "../../../../styles/playerStatistic.module.css";
import CompareRow from "../../row/compareRow";

type AllPosition = {
  positionAll1: Map<String, string>;
  mainPosition1: string;
  ovrMainPostion1: number;
  positionAll2: Map<String, string>;
  mainPosition2: string;
  ovrMainPostion2: number;
};

export default function AllPosition(props: AllPosition) {
  const {
    positionAll1,
    mainPosition1,
    ovrMainPostion1,
    positionAll2,
    mainPosition2,
    ovrMainPostion2,
  } = props;
  let values2 = Object.values(positionAll2).map(function (value) {
    return value;
  });

  return (
    <div className="flex flex-row px-10  xss:max-mobileMiddle:px-2">
      <div className="flex flex-col mt-[150px] gap-2">
        <span
          className={clsx(
            getColorPosition(mainPosition1),
            "text-[20px] text-center xss:max-mobile:text-[15px]"
          )}
        >
          {mainPosition1}
        </span>
        <span className="font-bold text-[68px] font-[sans-serif]  xss:max-mobile:text-[30px]">
          {ovrMainPostion1}
        </span>

        {Number(ovrMainPostion1) - Number(ovrMainPostion2) > 0 && (
          <div className="flex flex-row gap-[6px] w-[33px]">
            <FontAwesomeIcon
              icon={faCaretUp}
              className="text-[#51b410] w-[10px]"
            />
            <span className={styles.moreThan}>
              {Number(ovrMainPostion1) - Number(ovrMainPostion2)}
            </span>
          </div>
        )}
      </div>
      <div className="w-[400px] m-auto flex flex-col gap-3 mt-5  xss:max-mobile:w-[150px]">
        {Object.entries(positionAll1).map(([key, value]) => (
          <CompareRow
            value1={value}
            value2={getValueFromPositonKey(key, positionAll2)}
            isStatistic={true}
            title={key}
            key={key}
            isAllPosition={true}
          />
        ))}
      </div>

      <div className="flex flex-col mt-[150px] gap-2">
        <span
          className={clsx(
            getColorPosition(mainPosition2),
            "text-[20px] text-center xss:max-mobile:text-[15px]"
          )}
        >
          {mainPosition2}
        </span>
        <span className=" font-bold text-[68px] font-[sans-serif]  xss:max-mobile:text-[30px]">
          {ovrMainPostion2}
        </span>

        {Number(ovrMainPostion2) - Number(ovrMainPostion1) > 0 && (
          <div className="flex flex-row gap-[6px] w-[33px]">
            <FontAwesomeIcon
              icon={faCaretUp}
              className="text-[#51b410] w-[10px]"
            />
            <span className={styles.moreThan}>
              {Number(ovrMainPostion2) - Number(ovrMainPostion1)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
