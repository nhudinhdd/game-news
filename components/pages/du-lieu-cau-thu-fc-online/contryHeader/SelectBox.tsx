import { Avatar, Select, SelectItem } from "@nextui-org/react";
import { SelectorIcon } from "./SelectIcon";
import { SelectBoxData } from "@/model/player/selectBox";

type SelectBox = {
  selectData: Array<SelectBoxData>;
  placeholder: string;
};

export default function SelectBox(props: SelectBox) {
  const { placeholder, selectData } = props;
  return (
    <Select
      radius="none"
      className="max-w-xs dark"
      labelPlacement="outside"
      placeholder={placeholder}
      //   selectorIcon={<SelectorIcon />}
      scrollShadowProps={{
        isEnabled: false,
      }}
    >
      {selectData?.map((e) => (
        <SelectItem
          key={e.valueKey}
          startContent={
            <Avatar
              alt={e.valueDescription}
              className="w-6 h-6"
              src={e.image}
            />
          }
        >
          {e.valueDescription}
        </SelectItem>
      ))}
    </Select>
  );
}
