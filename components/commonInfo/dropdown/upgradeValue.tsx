import { getUpgradeClass } from "@/lib/common";
import { Button } from "@nextui-org/react";
import { clsx } from "clsx";

type UpgradeValue = {
  arrayUpgrade: Array<number>;
  setShow: (isShow: boolean) => void;
  isShow: boolean;
  setActiveNumber: (value: number) => void;
  setUpgrade: (value: number) => void;
  isSearch: boolean;
};

export default function UpgradeValue(props: UpgradeValue) {
  const {
    arrayUpgrade,
    setShow,
    isShow,
    setActiveNumber,
    setUpgrade,
    isSearch,
  } = props;
  return (
    <div
      className={clsx(
        " bg-[#1d1d1f] rounded-[3px] py-2 absolute z-10 h-[200px] overflow-auto scrollbar w-20 ",
        `dropDown ${isShow ? "active " : "inactive"}`
      )}
    >
      {arrayUpgrade.map((item) => (
        <div
          className="flex justify-center py-[6px]  hover:bg-[#2e2e2f]"
          key={item}
        >
          <Button
            className={clsx(
              "  h-5  w-[38px] min-w-[38px] rounded-[2px] mb-[1px]  xss:max-mobile:w-[35px] xss:max-mobile:min-w-[35px] ",
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
            <span className="font-[EASANS] mr-1 text-base">{item}</span>
          </Button>
        </div>
      ))}
    </div>
  );
}
