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
    <div className="relative w-[150px] min-w-[150px] h-7">
      <Button
        className="w-[150px] min-w-[10px] h-7  rounded-[4px]"
        radius="none"
        onClick={() => setShow(!isShow)}
      >
        Team Color (+{activeNumber})
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
              className="w-[150px] min-w-[10px] h-7  rounded-[4px]"
              radius="none"
              onClick={() => {
                setShow(!isShow);
                setActiveNumber(item);
                setTeamColor(item);
              }}
            >
              +{item}
            </Button>
          </div>
        ))}
    </div>
  );
}
