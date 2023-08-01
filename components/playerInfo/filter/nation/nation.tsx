import useContinent from "@/lib/useCotinent";
import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import styles from "@/styles/filter.module.css";
import { useState } from "react";
import useNation from "@/lib/useNation";

export default function NationFilter() {
  const { dataContinent = [] } = useContinent();
  const [continentID, setContinentID] = useState("");
  const { dataNation = [] } = useNation({ continentID: continentID });
  return (
    <div className="basis-2/6 flex flex-col  gap-2">
      <label>Quốc tịch</label>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">Lục địa</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Danh sách lục địa trong FC Online"
          className={styles.itemDropDown}
        >
          {dataContinent.map((item) => (
            <DropdownItem key={item.continentID}>
              {item.continentName}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">Quốc gia</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Danh sách quốc gia trong FC Online"
          className={styles.itemDropDown}
        >
          {dataNation.map((item) => (
            <DropdownItem key={item.nationID}>{item.nationName}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
