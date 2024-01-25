import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { type } from "os";
import { title } from "process";
import { useState } from "react";
import DropDown from "@/public/assets/dropdown-down.svg";
import Image from "next/image";
import Upgrade from "@/components/commonInfo/dropdown/upgrade";
import UpgradeValue from "@/components/commonInfo/dropdown/upgradeValue";
import { Button } from "@nextui-org/react";
import { getUpgradeClass } from "@/lib/common";

type Upgrade = {
  isInline: boolean;
  isActive?: boolean;
};

export default function UpgradeFilterDropDown(props: Upgrade) {
  const { isInline, isActive } = props;
  const [isShowDropDown, setShowDropDown] = useState(false);
  const showDropDown = () => {
    if (isActive != false) {
      setShowDropDown(!isShowDropDown);
    }
  };
  const arrayUpgrade = Array.from({ length: 10 }, (_, i) => i + 1);
  const [activeNumber, setActiveNumber] = useState(1);
  const [upgrade, setUpgrade] = useState(1);

  return (
    <div className="">
      <div
        className={clsx(
          " h-7 bg-[#2e2e2f] items-center flex flex-row rounded-[3px]  ",
          isInline ? "w-20" : "w-[178px]",
          isActive == false
            ? "bg-[#212121]"
            : "cursor-pointer hover:bg-[#454545]"
        )}
        onClick={() => showDropDown()}
      >
        <Button
          className={clsx(
            "  h-5  w-[35px] min-w-[35px] rounded-[2px] mb-[1px]  xss:max-mobile:w-[35px] xss:max-mobile:min-w-[35px] m-auto",
            getUpgradeClass(activeNumber)
          )}
          radius="none"
          onClick={() => showDropDown()}
        >
          <span className="font-[EASANS] mr-1 text-base">{activeNumber}</span>
        </Button>
        <Image
          src={DropDown}
          alt=""
          width={25}
          height={25}
          className="ml-[-24px]"
        />
      </div>
      <div className="flex justify-center m-auto bg-[#212121] w-full">
        {isShowDropDown && (
          <UpgradeValue
            isSearch={true}
            arrayUpgrade={arrayUpgrade}
            setShow={setShowDropDown}
            isShow={isShowDropDown}
            setActiveNumber={setActiveNumber}
            setUpgrade={setUpgrade}
          ></UpgradeValue>
        )}
      </div>
    </div>
  );
}
