import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useState, useMemo } from "react";

export function OvrFilter() {
  const [selectedOvrFromKeys, setSelectedKeys] = useState(new Set(["--"]));
  const selectedOvrFrom = useMemo(
    () => Array.from(selectedOvrFromKeys).join(""),
    [selectedOvrFromKeys]
  );

  const [selectedOvrToKeys, setSelectedOvrToKeys] = useState(new Set(["--"]));
  const selectedSalaryTo = useMemo(
    () => Array.from(selectedOvrToKeys).join(""),
    [selectedOvrToKeys]
  );
  return (
    <div className=" basis-2/6 flex flex-col gap-2">
      <div>
        <label>OVR</label>
      </div>
      <div className="flex flex-row gap-2">
        <Dropdown className="min-w-100 ">
          <DropdownTrigger>
            <Button variant="bordered">{selectedOvrFrom}</Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Orv trong FC Online"
            className="h-32 overflow-auto"
            selectionMode="single"
            disallowEmptySelection
            selectedKeys={selectedOvrFromKeys}
            onSelectionChange={(key) =>
              setSelectedKeys(new Set([Array.from(key).join("")]))
            }
          >
            {[...Array(200)].map((x, i) => (
              <DropdownItem key={i}>{i}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <span className="text-2xl items-center"> ~ </span>
        <Dropdown className="min-w-100">
          <DropdownTrigger>
            <Button variant="bordered">{selectedSalaryTo}</Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Static Actions"
            className="h-32 overflow-auto"
            selectionMode="single"
            disallowEmptySelection
            selectedKeys={selectedSalaryTo}
            onSelectionChange={(key) =>
              setSelectedOvrToKeys(new Set([Array.from(key).join("")]))
            }
          >
            {[...Array(200)].map((x, i) => (
              <DropdownItem key={i}>{i}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}
