import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import { useState } from "react";

type TeamColor = {
  setTeamColor: (data: number) => void;
};
export default function TeamColor(props: TeamColor) {
  const { setTeamColor } = props;
  const [isShow, setShow] = useState(false);
  const [activeNumber, setActiveNumber] = useState(1);
  const arrayTeamColor = Array.from({ length: 7 }, (_, i) => i + 1);
  return (
    <div className="relative w-[150px] xss:max-mobile:w-[55px]  xss:max-mobile:min-w-[55px] h-7  z-10">
      <Button
        className="w-[150px] min-w-[10px] xss:max-mobile:w-[55px]  xss:max-mobile:min-w-[55px] h-7  rounded-[4px]"
        radius="none"
        onClick={() => setShow(!isShow)}
      >
        <span className="text-center">
          <span className=" xss:max-mobile:hidden">Team Color</span>
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
              className="w-[150px] min-w-[10px] xss:max-mobile:w-[55px]  xss:max-mobile:min-w-[55px] h-7  rounded-[4px]"
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
