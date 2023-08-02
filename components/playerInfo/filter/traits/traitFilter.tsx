import useTrait from "@/lib/useTrait";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Image from "next/image";
import { useMemo, useState } from "react";

type TraitFilerProps = {
  setTrait1: (trait1: string) => void;
  setTrait2: (trait2: string) => void;
  setTrait3: (trait3: string) => void;
};
export default function TraitFilter(props: TraitFilerProps) {
  const { setTrait1, setTrait2, setTrait3 } = props;
  const { dataTrait = [] } = useTrait();
  const [selectedKeys1, setSelectedKeys1] = useState(new Set([""]));
  const selectedValue1 = useMemo(() => {
    const key = Array.from(selectedKeys1).join("");
    const value =
      dataTrait.find((i) => i.traitID === key)?.name || "Chỉ số ẩn 1";
    return value;
  }, [selectedKeys1]);

  const [selectedKeys2, setSelectedKeys2] = useState(new Set([""]));
  const selectedValue2 = useMemo(() => {
    const key = Array.from(selectedKeys2).join("");
    const value =
      dataTrait.find((i) => i.traitID === key)?.name || "Chỉ số ẩn 2";
    return value;
  }, [selectedKeys2]);

  const [selectedKeys3, setSelectedKeys3] = useState(new Set([""]));
  const selectedValue3 = useMemo(() => {
    const key = Array.from(selectedKeys3).join("");
    const value =
      dataTrait.find((i) => i.traitID === key)?.name || "Chỉ số ẩn 3";
    return value;
  }, [selectedKeys3]);
  return (
    <div className="basis-2/6 flex flex-col  gap-2">
      <label>Chỉ số ẩn</label>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">{selectedValue1}</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Danh sách chỉ số ẩn trong FC Online"
          className="h-32 overflow-auto max-w-200"
          selectionMode="single"
          disallowEmptySelection
          selectedKeys={selectedKeys1}
          onSelectionChange={(key) => {
            const selectedKey = Array.from(key).join("");
            setSelectedKeys1(new Set([selectedKey]));
            setTrait1(selectedKey);
          }}
        >
          {[
            { traitID: "", name: "Chỉ số ẩn 1", logo: "", altLogo: "" },
            ...dataTrait,
          ].map((item) => (
            <DropdownItem
              key={item.traitID}
              startContent={
                item.traitID !== "" && (
                  <Image
                    src={item.logo}
                    alt={item.altLogo}
                    width={18}
                    height={18}
                  ></Image>
                )
              }
            >
              {item.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">{selectedValue2}</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Danh sách chỉ số ẩn trong FC Online"
          className="h-32 overflow-auto max-w-200"
          selectionMode="single"
          disallowEmptySelection
          selectedKeys={selectedKeys2}
          onSelectionChange={(key) => {
            const selectedKey = Array.from(key).join("");
            setSelectedKeys2(new Set([selectedKey]));
            setTrait2(selectedKey);
          }}
        >
          {[
            { traitID: "", name: "Chỉ số ẩn 2", logo: "", altLogo: "" },
            ...dataTrait,
          ].map((item) => (
            <DropdownItem
              key={item.traitID}
              startContent={
                item.traitID !== "" && (
                  <Image
                    src={item.logo}
                    alt={item.altLogo}
                    width={18}
                    height={18}
                  ></Image>
                )
              }
            >
              {item.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">{selectedValue3}</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Danh sách chỉ số ẩn trong FC Online"
          className="h-32 overflow-auto max-w-200"
          selectionMode="single"
          disallowEmptySelection
          selectedKeys={selectedKeys3}
          onSelectionChange={(key) => {
            const selectedKey = Array.from(key).join("");
            setSelectedKeys3(new Set([selectedKey]));
            setTrait3(selectedKey);
          }}
        >
          {[
            { traitID: "", name: "Chỉ số ẩn 3", logo: "", altLogo: "" },
            ...dataTrait,
          ].map((item) => (
            <DropdownItem
              key={item.traitID}
              startContent={
                item.traitID !== "" && (
                  <Image
                    src={item.logo}
                    alt={item.altLogo}
                    width={18}
                    height={18}
                  ></Image>
                )
              }
            >
              {item.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
