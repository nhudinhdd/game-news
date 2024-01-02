import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/playerStatistic.module.css";
import clsx from "clsx";

type TotalPoint = {
  totalPoint1: number;
  totalPoint2?: number;
};

export default function TotalPoint(props: TotalPoint) {
  const { totalPoint1, totalPoint2 } = props;
  return (
    <div className="flex flex-col gap-1">
      <div
        className={clsx(
          "flex flex-row font-[system-ui]  ml-[55px] mobileMiddle:max-mobile:ml-[82px] xssMiddle:max-mobileMiddle:ml-[42px]",
          totalPoint2
            ? ""
            : "ml-[105px] mobileMiddle:max-mobile:ml-[90px] xssMiddle:max-mobileMiddle:ml-[90px]"
        )}
      >
        <span className="font-[600] text-[20px] text-[#919191]">
          {totalPoint1}
        </span>
        {totalPoint2 && (
          <>
            <span className="font-[600] text-[20px] text-[#666]">/</span>
            <span className="font-[600] text-[20px] text-[#919191]">
              {totalPoint2}
            </span>
          </>
        )}

        {(totalPoint2 && totalPoint2 - totalPoint1 > 0 && (
          <div className="flex flex-row justify-end gap-[6px] w-[36px] ml-[12px]">
            <span className={clsx(styles.moreThan, "text-[16px]")}>
              {totalPoint2 - totalPoint1}
            </span>

            <FontAwesomeIcon
              icon={faCaretUp}
              className="text-[#51b410] w-[10px]"
            />
          </div>
        )) ||
          (totalPoint2 && totalPoint2 - totalPoint1 < 0 && (
            <div className="flex flex-row w-[33px] ml-[12px] justify-end  gap-[6px]">
              <span className={clsx(styles.leftThan, "text-[20px]")}>
                {totalPoint1 - totalPoint2}
              </span>

              <FontAwesomeIcon
                icon={faCaretDown}
                className="text-[#646464] w-[12px]"
              />
            </div>
          ))}
      </div>
      <span
        className={clsx(
          "text-[#555] text-[14px] ml-[110px] mobileMiddle:max-mobile:ml-[138px] xssMiddle:max-mobileMiddle:ml-[100px]",
          totalPoint2
            ? ""
            : "ml-[63px] mobileMiddle:max-mobile:ml-[50px] xssMiddle:max-mobileMiddle:ml-[50px]"
        )}
      >
        Attributes Point
      </span>
    </div>
  );
}
