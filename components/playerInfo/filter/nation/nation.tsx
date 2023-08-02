import useContinent from "@/lib/useCotinent";
import useNation from "@/lib/useNation";
import styles from "@/styles/filter.module.css";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Image from "next/image";
import { useMemo, useState } from "react";

type NationFilterProps = {
  setContinentID: (continentID: string) => void;
  setNationID: (nationID: string) => void;
  continentID: string;
};
export default function NationFilter(props: NationFilterProps) {
  const { setContinentID, setNationID, continentID } = props;
  const { dataContinent = [] } = useContinent();
  const { dataNation = [] } = useNation({ continentID: continentID });
  const [selectedContientKeys, setSelectedKeys] = useState(new Set([""]));
  const selectedValue = useMemo(() => {
    const key = Array.from(selectedContientKeys).join("");
    const value =
      dataContinent.find((i) => i.continentID === key)?.continentName ||
      "Lục địa";
    return value;
  }, [selectedContientKeys]);

  const [selectedNationKeys, setSelectedNationKeys] = useState(new Set([""]));
  const selectedNationValue = useMemo(() => {
    const key = Array.from(selectedNationKeys).join("");
    const value =
      dataNation.find((i) => i.nationID === key)?.nationName || "Quốc gia";
    const nationLogo = dataNation.find((i) => i.nationID === key)?.ensign || "";
    return { nationName: value, nationLogo: nationLogo };
  }, [selectedNationKeys]);
  return (
    <div className="basis-2/6 flex flex-col  gap-2">
      <label>Quốc tịch</label>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">{selectedValue}</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Danh sách lục địa trong FC Online"
          className={styles.itemDropDown}
          selectionMode="single"
          disallowEmptySelection
          selectedKeys={selectedContientKeys}
          onSelectionChange={(key) => {
            const selectedKey = Array.from(key).join("");
            setSelectedKeys(new Set([selectedKey]));
            setContinentID(selectedKey);
          }}
        >
          {[
            { continentID: "", continentName: "Lục địa" },
            ...dataContinent,
          ].map((item) => (
            <DropdownItem key={item.continentID}>
              {item.continentName}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="bordered"
            startContent={
              selectedNationValue.nationLogo !== "" && (
                <Image
                  src={selectedNationValue.nationLogo}
                  alt="Nation logo"
                  width={18}
                  height={16}
                ></Image>
              )
            }
          >
            {selectedNationValue.nationName}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Danh sách quốc gia trong FC Online"
          selectionMode="single"
          className="max-w-200 h-32 overflow-auto"
          disallowEmptySelection
          selectedKeys={selectedNationKeys}
          onSelectionChange={(key) => {
            const selectedKey = Array.from(key).join("");
            setSelectedNationKeys(new Set([selectedKey]));
            setNationID(selectedKey);
          }}
        >
          {[
            { nationID: "", nationName: "Quốc gia", ensign: "", altEnsign: "" },
            ...dataNation,
          ].map((item) => (
            <DropdownItem
              key={item.nationID}
              startContent={
                item.nationID !== "" && (
                  <Image
                    src={item.ensign}
                    alt={item.altEnsign}
                    width={18}
                    height={14}
                  ></Image>
                )
              }
            >
              {item.nationName}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
