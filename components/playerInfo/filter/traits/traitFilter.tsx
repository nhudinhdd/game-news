import useTrait from "@/lib/useTrait";
import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

type TraitFilerProps = {
  setTrait1: (trait1: string) => void;
  setTrait2: (trait2: string) => void;
  setTrait3: (trait3: string) => void;
};
export default function TraitFilter(props: TraitFilerProps) {
  const { setTrait1, setTrait2, setTrait3 } = props;
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
