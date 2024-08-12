import { getUpgradeClass, getUpgradeValue } from "@/lib/common";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import { clsx } from "clsx";
import { useEffect, useState } from "react";
import UpgradeValue from "./upgradeValue";

type Upgrade = {
  setUpgrade: (data: number, selectedNumber?: number) => void;
  page?: string;
  selectedUpgrade?: number;
};
export default function Upgrade(props: Upgrade) {
  const { setUpgrade, page, selectedUpgrade } = props;
  const [isShow, setShow] = useState(false);
  const [activeNumber, setActiveNumber] = useState(selectedUpgrade || 1);
  const arrayUpgrade = Array.from({ length: 10 }, (_, i) => i + 1);
  useEffect(() => {
    if (selectedUpgrade) {
      setActiveNumber(selectedUpgrade);
    }
  }, [selectedUpgrade]);
  return (
    <div
      className={clsx(
        "relative  bg-default] z-1",
        page == "formation"
          ? " w-[28px] min-w-[28px] h-[22px]"
          : " w-[50px] min-w-[50px]  xss:max-mobile:w-[40px] xss:max-mobile:min-w-[40px] h-7"
      )}
    >
      <Button
        className={clsx(
          "h-7 rounded-[4px] mb-[1px] ",
          page == "formation"
            ? " w-[28px] min-w-[28px]  h-[22px] min-h-[22px] "
            : " w-[50px] min-w-[50px]  xss:max-mobile:w-[40px] xss:max-mobile:min-w-[40px]",
          getUpgradeClass(activeNumber)
        )}
        radius="none"
        onClick={() => setShow(!isShow)}
      >
        <span
          className={clsx(
            "font-[EASANS] mt-1",
            page == "formation" ? " text-[17px] mt-1" : "mr-1 text-base"
          )}
        >
          {(page == "formation" ? "" : "+") + activeNumber}
        </span>
      </Button>
      {page !== "formation" && (
        <div className="absolute right-[5px] top-[7px] xss:max-mobile:hidden">
          <FontAwesomeIcon icon={faChevronDown} width={12} />
        </div>
      )}

      <div
        className={clsx(
          "absolute z-100 flex flex-col h-[200px] overflow-auto scrollbar",
          `dropDown ${isShow ? "active " : "inactive"}`
        )}
      >
        {arrayUpgrade.map((item) => (
          <Button
            className={clsx(
              "  h-5  rounded-[4px] mb-[1px]  xss:max-mobile:w-[40px] xss:max-mobile:min-w-[40px] ",
              getUpgradeClass(item),
              page == "formation"
                ? " w-[28px] min-w-[28px]  h-[19px] min-h-[19px] "
                : " w-[50px] min-w-[50px]"
            )}
            radius="none"
            key={item}
            onClick={() => {
              setShow(!isShow);
              setActiveNumber(item);
              setUpgrade(getUpgradeValue(item), item);
            }}
          >
            <span
              className={clsx(
                "font-[EASANS] ",
                page == "formation" ? " text-[17px]" : "mr-1 text-base"
              )}
            >
              {(page == "formation" ? "" : "+") + item}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}
