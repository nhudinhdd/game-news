import { getColorPosition, getValueFromPositonKey } from "@/lib/common";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import styles from "../../../styles/playerStatistic.module.css";
type PositionOvr = {
  positionAll1: Map<String, string>;
  positionAll2: Map<String, string>;
  position: string;
  ovrPosition1?: number;
  ovrPosition2?: number;
};

export default function PositionOvr(props: PositionOvr) {
  const { positionAll1, positionAll2, position, ovrPosition1, ovrPosition2 } =
    props;

  const positionOvr1 = getValueFromPositonKey(position, positionAll1);
  const positionOvr2 = getValueFromPositonKey(position, positionAll2);

  return (
    <div className="flex flex-col mt-[150px] gap-2">
      <span
        className={clsx(
          getColorPosition(position),
          "text-[20px] text-center xss:max-mobile:text-[15px]"
        )}
      >
        {position}
      </span>
      <span className=" font-bold text-[68px] font-[sans-serif]  xss:max-mobile:text-[30px]">
        {positionOvr1}
      </span>

      {Number(positionOvr1) - Number(positionOvr2) > 0 && (
        <div className="flex flex-row gap-[6px] w-[28px]  self-center">
          <FontAwesomeIcon
            icon={faCaretUp}
            className="text-[#51b410] w-[10px]"
          />
          <span className={styles.moreThan}>
            {Number(positionOvr1) - Number(positionOvr2)}
          </span>
        </div>
      )}
    </div>
  );
}
