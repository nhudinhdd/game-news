import clsx from "clsx";
import { LegacyRef, useState } from "react";
type SelectOption = {
  isInline: boolean;
  isShowDropDown: boolean;
  ref?: LegacyRef<any>;
  values?: Array<string>;
  setShowDropDown: (isShow: boolean) => void;
  setTitle: (value: string) => void;
};

export default function DropDown(props: SelectOption) {
  const { isInline, isShowDropDown, ref, values, setShowDropDown, setTitle } =
    props;
  const [valueSelected, setValueSelected] = useState("");

  const selectOption = (selectValue: string) => {
    setValueSelected(selectValue);
    setShowDropDown(!isShowDropDown);
    setTitle(selectValue);
  };
  return (
    <div
      ref={ref}
      className={clsx(
        " bg-[#1d1d1f] rounded-[3px] py-2 absolute z-10 h-[200px] overflow-auto scrollbar",
        isInline ? "w-20" : "w-44 ",
        `dropDown ${isShowDropDown ? "active " : "inactive"}`
      )}
    >
      <ul className={clsx("text-center")}>
        {values &&
          values.map((v) => (
            <li
              key={v}
              className={clsx(
                valueSelected === v ? "text-[#09F468]" : "",
                "py-2 hover:bg-[#2e2e2f] font-semibold"
              )}
              onClick={() => selectOption(v)}
            >
              {v}
            </li>
          ))}
      </ul>
    </div>
  );
}
