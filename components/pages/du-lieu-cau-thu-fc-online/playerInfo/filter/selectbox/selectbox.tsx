import { useOutsideClick } from "@/lib/useDetectOutsideClick ";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDisclosure } from "@nextui-org/react";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import DropDown from "@/public/assets/dropdown-down.svg";
import { ModalSearch } from "../modal/modalSearch";
import SelectOption from "./selectOption";

type SelectBox = {
  title: string;
  setTile: (value: string) => void;
  type: string;
  isInline: boolean;
  isActive?: boolean;
  values: Array<string>;
  valuesSeason: any[];

  selectedID: Set<string>;
  selectedList: (values: Set<string>) => void;
  // contentEditable: boolean;
};

export function SelectBox(props: SelectBox) {
  const {
    title,
    type,
    isInline,
    isActive,
    values,
    setTile,
    valuesSeason,
    selectedID,
    selectedList,
    // contentEditable,
  } = props;
  const [isShowDropDown, setShowDropDown] = useState(false);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const ref = useOutsideClick(() => {
    setShowDropDown(!isShowDropDown);
  });

  const [currentTitle, setCurrentTile] = useState(title);

  const showDropDown = () => {
    if (isActive != false) {
      setShowDropDown(!isShowDropDown);
    }
    onOpen();
  };

  const onBlur = (e: any) => {
    let valueInput = e.currentTarget.textContent;

    if (Number.isNaN(valueInput)) {
      valueInput = "- -";
    } else if (Number(values[values.length - 1]) < valueInput) {
      valueInput = values[values.length - 1];
    } else if (Number(values[1]) > valueInput) {
      valueInput = "- -";
    } else if (currentTitle == "") {
      valueInput = "- -";
    }
    setCurrentTile(valueInput);
    setTile(valueInput);
  };
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
      >
        <span
          className={clsx(
            isActive == false ? "text-default-400" : "text-white",
            "w-full text-center font-extralight"
          )}
          // onClick={() => {
          //   !contentEditable && showDropDown();
          //   contentEditable && setValueInput();
          // }}
          // contentEditable={contentEditable}
          // onInput={(e) => onChangeInput(e)}
          onBlur={(e) => onBlur(e)}
        >
          {currentTitle}
        </span>
        {type === "DROP_DOWN" && isActive !== false && (
          <Image
            src={DropDown}
            alt=""
            width={25}
            height={25}
            className="ml-[-24px]"
            onClick={() => showDropDown()}
          />
        )}

        {type === "MENU" && isActive !== false && (
          <div className="pr-1">
            <FontAwesomeIcon
              icon={faBars}
              className="w-[14px] h-4  text-white"
              size="2xl"
            />
          </div>
        )}
      </div>
      {type === "DROP_DOWN" && (
        <SelectOption
          setTitle={setTile}
          setShowDropDown={setShowDropDown}
          values={values}
          ref={ref}
          isInline={isInline}
          isShowDropDown={isShowDropDown}
        ></SelectOption>
      )}

      {type === "MENU" && (
        <ModalSearch
          selectedID={selectedID}
          selectedList={selectedList}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          values={valuesSeason}
        ></ModalSearch>
      )}
    </div>
  );
}
