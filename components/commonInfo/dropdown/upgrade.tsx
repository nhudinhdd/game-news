import { getUpgradeClass } from "@/lib/common";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import { clsx } from "clsx";
import { useState } from "react";
import UpgradeValue from "./upgradeValue";

type Upgrade = {
  setUpgrade: (data: number) => void;
};
export default function Upgrade(props: Upgrade) {
  const { setUpgrade } = props;
  const [isShow, setShow] = useState(false);
  const [activeNumber, setActiveNumber] = useState(1);
  const arrayUpgrade = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <div className="relative w-[50px] min-w-[50px] h-7 bg-default] z-30 xss:max-mobile:w-[40px] xss:max-mobile:min-w-[40px]">
      <Button
        className={clsx(
          " w-[50px] min-w-[50px] h-7 rounded-[4px] mb-[1px]  xss:max-mobile:w-[40px] xss:max-mobile:min-w-[40px]",
          getUpgradeClass(activeNumber)
        )}
        radius="none"
        onClick={() => setShow(!isShow)}
      >
        <span className="font-[EASANS] mr-1 text-base">
          {"+" + activeNumber}
        </span>
      </Button>
      <div className="absolute right-[5px] top-[7px] xss:max-mobile:hidden">
        <FontAwesomeIcon icon={faChevronDown} width={12} />
      </div>
      <div
        className={clsx(
          "absolute z-10 flex flex-col h-[200px] overflow-auto scrollbar",
          `dropDown ${isShow ? "active " : "inactive"}`
        )}
      >
        {arrayUpgrade.map((item) => (
          <Button
            className={clsx(
              "  h-5  w-[50px] min-w-[50px] rounded-[4px] mb-[1px]  xss:max-mobile:w-[40px] xss:max-mobile:min-w-[40px] ",
              getUpgradeClass(item)
            )}
            radius="none"
            key={item}
            onClick={() => {
              setShow(!isShow);
              setActiveNumber(item);
              setUpgrade(item);
            }}
          >
            <span className="font-[EASANS] mr-1 text-base">{"+" + item}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
