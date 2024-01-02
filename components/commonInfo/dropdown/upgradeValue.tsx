import { getUpgradeClass } from "@/lib/common";
import { Button } from "@nextui-org/react";
import { clsx } from "clsx";

type UpgradeValue = {
  arrayUpgrade: Array<number>;
  setShow: (isShow: boolean) => void;
  isShow: boolean;
  setActiveNumber: (value: number) => void;
  setUpgrade: (value: number) => void;
};

export default function UpgradeValue(props: UpgradeValue) {
  const { arrayUpgrade, setShow, isShow, setActiveNumber, setUpgrade } = props;
  return (
    <div className="absolute flex flex-col bg-white">
      {arrayUpgrade.map((item) => (
        <Button
          className={clsx(
            " w-[50px] min-w-[50px] h-5 rounded-[4px]  mb-[1px]  xss:max-mobile:w-[40px] xss:max-mobile:min-w-[40px] ",
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
      ))}
    </div>
  );
}
