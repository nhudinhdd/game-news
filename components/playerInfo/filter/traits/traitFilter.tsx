import useTrait from "@/lib/useTrait";
import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

export default function TraitFilter() {
  const { dataTrait = [] } = useTrait();
  return (
    <div className="basis-2/6 flex flex-col  gap-2">
      <label>Chỉ số ẩn</label>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">Chỉ số ẩn 1</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Danh sách chỉ số ẩn trong FC Online"
          className="h-32 overflow-auto"
        >
          {dataTrait.map((item) => (
            <DropdownItem key={item.traitID}>{item.name}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">Chỉ số ẩn 2</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Danh sách chỉ số ẩn trong FC Online"
          className="h-32 overflow-auto"
        >
          {dataTrait.map((item) => (
            <DropdownItem key={item.traitID}>{item.name}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">Chỉ số ẩn 3</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Danh sách chỉ số ẩn trong FC Online"
          className="h-32 overflow-auto"
        >
          {dataTrait.map((item) => (
            <DropdownItem key={item.traitID}>{item.name}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
