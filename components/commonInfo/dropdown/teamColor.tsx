import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import { clsx } from "clsx";
import { useEffect, useState } from "react";

type TeamColor = {
  setTeamColor: (data: number) => void;
  page?: string;
  selectedTeamColor?: number;
};
export default function TeamColor(props: TeamColor) {
  const { setTeamColor, page, selectedTeamColor } = props;
  const [isShow, setShow] = useState(false);
  const [activeNumber, setActiveNumber] = useState(selectedTeamColor || 0);
  var N = 10;
  const arrayTeamColor = Array.from(Array(8), (_, x) => x);

  useEffect(() => {
    if (selectedTeamColor || selectedTeamColor === 0) {
      setActiveNumber(selectedTeamColor);
    }
  }, [selectedTeamColor]);

  return (
    <div
      className={clsx(
        page === "compare"
          ? "xss:max-laptop:w-[55px] xss:max-laptop:min-w-[55px]"
          : "",
        "relative w-[150px] xss:max-mobile:w-[55px]  xss:max-mobile:min-w-[55px] h-7  z-10"
      )}
    >
      <Button
        className={clsx(
          page === "compare"
            ? "xss:max-laptop:w-[55px] xss:max-laptop:min-w-[55px]"
            : "",
          "w-[150px] min-w-[10px] xss:max-mobile:w-[55px]  xss:max-mobile:min-w-[55px] h-7  rounded-[4px]"
        )}
        radius="none"
        onClick={() => setShow(!isShow)}
      >
        <span className="text-center">
          <span
            className={clsx(
              page === "compare" ? "xss:max-laptop:hidden" : "",
              " xss:max-mobile:hidden"
            )}
          >
            Team Color
          </span>
          <span className="font-['PostNo'] text-[15px]">
            {activeNumber == 0 ? "(-)" : "(+" + activeNumber + ")"}
          </span>
        </span>
      </Button>
      <div className="absolute right-[5px] top-[7px]">
        <FontAwesomeIcon icon={faChevronDown} width={12} />
      </div>
      {isShow &&
        arrayTeamColor.map((item) => (
          <div
            className="relative w-[90px] min-w-[90px] h-7 mt-[0.8px]"
            key={item}
          >
            <Button
              className={clsx(
                page === "compare"
                  ? "xss:max-laptop:w-[55px] xss:max-laptop:min-w-[55px]"
                  : "",
                "w-[150px] min-w-[10px] xss:max-mobile:w-[55px]  xss:max-mobile:min-w-[55px] h-7  rounded-[4px]"
              )}
              radius="none"
              onClick={() => {
                setShow(!isShow);
                setActiveNumber(item);
                setTeamColor(item);
              }}
            >
              <span className="font-['PostNo']">
                {" "}
                {item == 0 ? "-" : "+" + item + ""}
              </span>
            </Button>
          </div>
        ))}
    </div>
  );
}
