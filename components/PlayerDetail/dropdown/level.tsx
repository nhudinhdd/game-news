import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Chip } from "@nextui-org/react";
import { useState } from "react";

export default function Level() {
  const [isShow, setShow] = useState(false);
  const [activeNumber, setActiveNumber] = useState(1);
  return (
    <div className="relative w-[90px] min-w-[90px] h-7">
      <Button
        className="w-[90px] min-w-[90px] h-7  rounded-[4px]"
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
      <div className="absolute right-[5px] top-[7px]">
        <FontAwesomeIcon icon={faChevronDown} width={12} />
      </div>

      {isShow && (
        <div className="listLevel">
          <div className="relative w-[90px] min-w-[90px] h-7 mt-[0.8px]">
            <Button
              className="w-[90px] min-w-[90px] h-7  rounded-[4px]"
              radius="none"
              onClick={() => {
                setShow(!isShow);
                setActiveNumber(1);
              }}
            >
              <Chip
                color="success"
                variant="bordered"
                className="w-[24px] min-w-[24px] h-[24px] rounded-[16px]"
              >
                1
              </Chip>
            </Button>
            {activeNumber == 1 && (
              <div className="absolute right-[5px] top-[7px]">
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "#23af51" }}
                  width={12}
                />
              </div>
            )}
          </div>

          <div className="relative w-[90px] min-w-[90px] h-7 mt-[0.8px]">
            <Button
              className="w-[90px] min-w-[90px] h-7  rounded-[4px]"
              radius="none"
              onClick={() => {
                setShow(!isShow);
                setActiveNumber(2);
              }}
            >
              <Chip
                color="success"
                variant="bordered"
                className="w-[24px] min-w-[24px] h-[24px] rounded-[16px]"
              >
                2
              </Chip>
            </Button>
            {activeNumber == 2 && (
              <div className="absolute right-[5px] top-[7px]">
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "#23af51" }}
                  width={12}
                />
              </div>
            )}
          </div>

          <div className="relative w-[90px] min-w-[90px] h-7 mt-[0.8px]">
            <Button
              className="w-[90px] min-w-[90px] h-7  rounded-[4px] "
              radius="none"
              onClick={() => {
                setShow(!isShow);
                setActiveNumber(3);
              }}
            >
              <Chip
                color="success"
                variant="bordered"
                className="w-[24px] min-w-[24px] h-[24px] rounded-[16px]"
              >
                3
              </Chip>
            </Button>
            {activeNumber == 3 && (
              <div className="absolute right-[5px] top-[7px]">
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "#23af51" }}
                  width={12}
                />
              </div>
            )}
          </div>

          <div className="relative w-[90px] min-w-[90px] h-7 mt-[0.8px]">
            <Button
              className="w-[90px] min-w-[90px] h-7  rounded-[4px]"
              radius="none"
              onClick={() => {
                setShow(!isShow);
                setActiveNumber(4);
              }}
            >
              <Chip
                color="success"
                variant="bordered"
                className="w-[24px] min-w-[24px] h-[24px] rounded-[16px]"
              >
                4
              </Chip>
            </Button>
            {activeNumber == 4 && (
              <div className="absolute right-[5px] top-[7px]">
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "#23af51" }}
                  width={12}
                />
              </div>
            )}
          </div>

          <div className="relative w-[90px] min-w-[90px] h-7 mt-[0.8px]">
            <Button
              className="w-[90px] min-w-[90px] h-7  rounded-[4px]"
              radius="none"
              onClick={() => {
                setShow(!isShow);
                setActiveNumber(5);
              }}
            >
              <Chip
                color="success"
                variant="bordered"
                className="w-[24px] min-w-[24px] h-[24px] rounded-[16px]"
              >
                5
              </Chip>
            </Button>
            {activeNumber == 5 && (
              <div className="absolute right-[5px] top-[7px]">
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "#23af51" }}
                  width={12}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
