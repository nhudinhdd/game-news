import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Chip } from "@nextui-org/react";
import { useState } from "react";

type Level = {
  setLevel: (data: number) => void;
};
export default function Level(props: Level) {
  const { setLevel } = props;
  const [isShow, setShow] = useState(false);
  const [activeNumber, setActiveNumber] = useState(1);
  const arrayLevel = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="relative w-[90px] min-w-[90px] h-7 xss:max-mobile:w-[55px]  xss:max-mobile:min-w-[55px]">
      <Button
        className="w-[90px] min-w-[90px] h-7  rounded-[4px]  xss:max-mobile:w-[55px]  xss:max-mobile:min-w-[55px]"
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
      <div className="absolute right-[5px] top-[7px] xss:max-mobile:hidden ">
        <FontAwesomeIcon icon={faChevronDown} width={12} />
      </div>

      {isShow &&
        arrayLevel.map((item) => (
          <div
            className="relative w-[90px] min-w-[90px]  xss:max-mobile:w-[55px]  xss:max-mobile:min-w-[55px] h-7 mt-[0.8px] z-30"
            key={item}
          >
            <Button
              className="w-[90px] min-w-[90px] h-7  xss:max-mobile:w-[55px]  xss:max-mobile:min-w-[55px] rounded-[4px]"
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
                className="w-[24px] min-w-[24px] h-[24px] rounded-[16px] first:px-0"
              >
                {item}
              </Chip>
            </Button>
            {activeNumber == item && (
              <div className="absolute right-[5px] top-[7px] xss:max-mobile:hidden ">
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
