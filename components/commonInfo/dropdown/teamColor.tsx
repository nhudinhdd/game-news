import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import { clsx } from "clsx";
import { useState } from "react";

type TeamColor = {
  setTeamColor: (data: number) => void;
  page?: string;
};
export default function TeamColor(props: TeamColor) {
  const { setTeamColor, page } = props;
  const [isShow, setShow] = useState(false);
  const [activeNumber, setActiveNumber] = useState(1);
  const arrayTeamColor = Array.from({ length: 7 }, (_, i) => i + 1);
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
          <span className="font-['PostNo'] text-[15px]">(+{activeNumber})</span>
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
              <span className="font-['PostNo']">+{item}</span>
            </Button>
          </div>
        ))}
    </div>
  );
}
