import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useMemo, useState } from "react";

export function SalaryFilter() {
  const [selectedSalaryFromKeys, setSelectedKeys] = useState(new Set(["--"]));
  const selectedSalaryFrom = useMemo(
    () => Array.from(selectedSalaryFromKeys).join(""),
    [selectedSalaryFromKeys]
  );

  const [selectedSalaryToKeys, setSelectedSalaryToKeys] = useState(
    new Set(["--"])
  );
  const selectedSalaryTo = useMemo(
    () => Array.from(selectedSalaryToKeys).join(""),
    [selectedSalaryToKeys]
  );
  return (
    <div className="flex flex-col gap-2">
      <div>
        <label>Lương</label>
      </div>
      <div className="flex flex-row gap-2">
        <Dropdown className="min-w-100">
          <DropdownTrigger>
            <Button variant="bordered">{selectedSalaryFrom}</Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Static Actions"
            className="h-32 overflow-auto"
            selectionMode="single"
            disallowEmptySelection
            selectedKeys={selectedSalaryFromKeys}
            onSelectionChange={(key) =>
              setSelectedKeys(new Set([Array.from(key).join("")]))
            }
          >
            {[...Array(100)].map((x, i) => (
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
              setSelectedSalaryToKeys(new Set([Array.from(key).join("")]))
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
