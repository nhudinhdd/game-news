import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Chip } from "@nextui-org/react";
import { clsx } from "clsx";
import { useState } from "react";

type Level = {
  setLevel: (data: number) => void;
  page?: string;
};
export default function Level(props: Level) {
  const { setLevel, page } = props;
  const [isShow, setShow] = useState(false);
  const [activeNumber, setActiveNumber] = useState(1);
  const arrayLevel = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div
      className={clsx(
        page === "compare"
          ? "xss:max-laptop:w-[55px] xss:max-laptop:min-w-[55px]"
          : "",
        "relative w-[90px] min-w-[90px] h-7 xss:max-mobile:w-[55px]  xss:max-mobile:min-w-[55px]"
      )}
    >
      <Button
        className={clsx(
          page === "compare"
            ? "xss:max-laptop:w-[55px] xss:max-laptop:min-w-[55px]"
            : "",
          "w-[90px] min-w-[90px] h-7  rounded-[4px]  xss:max-mobile:w-[55px]  xss:max-mobile:min-w-[55px] upgrade1"
        )}
        radius="none"
        onClick={() => setShow(!isShow)}
      >
        <Chip
          color="success"
          variant="bordered"
          className="w-[24px] min-w-[24px] h-[24px] rounded-[16px] pl-0"
        >
          {activeNumber}
        </Chip>
      </Button>
      {page !== "compare" && (
        <div className="absolute right-[5px] top-[7px] xss:max-mobile:hidden ">
          <FontAwesomeIcon icon={faChevronDown} width={12} />
        </div>
      )}
      {isShow &&
        arrayLevel.map((item) => (
          <div
            className={clsx(
              page === "compare"
                ? "xss:max-laptop:w-[55px] xss:max-laptop:min-w-[55px]"
                : "",
              "relative w-[90px] min-w-[90px]  xss:max-mobile:w-[55px]  xss:max-mobile:min-w-[55px] h-7 mt-[0.8px] z-30"
            )}
            key={item}
          >
            <Button
              className={clsx(
                page === "compare"
                  ? "xss:max-laptop:w-[55px] xss:max-laptop:min-w-[55px]"
                  : "",
                "w-[90px] min-w-[90px] h-7  xss:max-mobile:w-[55px]  xss:max-mobile:min-w-[55px] rounded-[4px] upgrade1 "
              )}
              radius="none"
              onClick={() => {
                setShow(!isShow);
                setActiveNumber(item);
                setLevel(item);
              }}
            >
              <Chip
                color="success"
                variant="bordered"
                className="w-[24px] min-w-[24px] h-[24px] rounded-[16px] first:px-0 text-white "
              >
                {item}
              </Chip>
            </Button>
            {activeNumber == item && page !== "compare" && (
              <div
                className={clsx(
                  "absolute right-[5px] top-[7px] xss:max-mobile:hidden "
                )}
              >
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "#23af51" }}
                  width={12}
                />
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
