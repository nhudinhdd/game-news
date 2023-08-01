import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useState, useMemo } from "react";

type StaticFilterProps = {
  fromVal: number;
  toVal: number;
  title: string;
  selectedFromKeys: Set<string>;
  setSelectedFromKeys: (key: Set<string>) => void;
  selectedToKeys: Set<string>;
  setSelectedToKeys: (key: Set<string>) => void;
  selectedFromValue: string;
  selectedToValue: string;
};
export function StaticFilter(props: StaticFilterProps) {
  const {
    fromVal,
    toVal,
    title,
    setSelectedFromKeys,
    setSelectedToKeys,
    selectedFromValue,
    selectedToValue,
  } = props;

  return (
    <div className="flex flex-col gap-2">
      <div>
        <label>{title}</label>
      </div>
      <div className="flex flex-row gap-2">
        <Dropdown className="min-w-100">
          <DropdownTrigger>
            <Button variant="bordered">{selectedFromValue}</Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Static Actions"
            className="h-32 overflow-auto"
            selectionMode="single"
            disallowEmptySelection
            onSelectionChange={(key) =>
              setSelectedFromKeys(new Set([Array.from(key).join("")]))
            }
          >
            {[...Array(10)].map((x, i) => (
              <DropdownItem key={i.toString()}>{i.toString()}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <span className="text-2xl items-center"> ~ </span>
        <Dropdown className="min-w-100">
          <DropdownTrigger>
            <Button variant="bordered">{selectedToValue}</Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Static Actions"
            className="h-32 overflow-auto"
            selectionMode="single"
            disallowEmptySelection
            onSelectionChange={(key) =>
              setSelectedToKeys(new Set([Array.from(key).join("")]))
            }
          >
            {[...Array(10)].map((x, i) => (
              <DropdownItem key={i}>{i}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}
