import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import styles from "@/styles/filter.module.css";
import clsx from "clsx";
import { useState, useMemo } from "react";
type FitnessFilterProps = {
  setFitness: (fitness: string) => void;
};
export default function FitnessFilter(props: FitnessFilterProps) {
  const { setFitness } = props;
  const [selectedKeys, setSelectedKeys] = useState(new Set([""]));
  const selectedValue = useMemo(() => {
    return Array.from(selectedKeys).join("") || "Thể hình";
  }, [selectedKeys]);
  return (
    <div className="basis-2/6 flex flex-col gap-2">
      <div>
        <label>Thể hình</label>
      </div>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">{selectedValue}</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Static Actions"
          className={clsx("max-w-200 ", styles.itemDropDown)}
          selectionMode="single"
          disallowEmptySelection
          selectedKeys={selectedKeys}
          onSelectionChange={(key) => {
            const selectedKey = Array.from(key).join("");
            setSelectedKeys(new Set([selectedKey]));
            setFitness(selectedKey);
          }}
        >
          <DropdownItem key="">Thể hình</DropdownItem>
          <DropdownItem key="Nhỏ">Nhỏ</DropdownItem>
          <DropdownItem key="Trung Bình">Trung bình</DropdownItem>
          <DropdownItem key="To">To</DropdownItem>
          <DropdownItem key="Nhỏ(Special)">Nhỏ(Special)</DropdownItem>
          <DropdownItem key="Trung bình(Special)">TB(Special)</DropdownItem>
          <DropdownItem key="To(Special)">To(Special)</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
