import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import styles from "@/styles/filter.module.css";

export default function FootSkill() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <label>Kĩ năng 2 chân</label>
      </div>
      <div className="flex flex-row gap-2">
        <Dropdown className="min-w-100">
          <DropdownTrigger>
            <Button variant="bordered">--</Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Static Actions"
            className={styles.itemDropDown}
          >
            <DropdownItem key="new">1</DropdownItem>
            <DropdownItem key="copy">2</DropdownItem>
            <DropdownItem key="edit">3</DropdownItem>
            <DropdownItem key="new">4</DropdownItem>
            <DropdownItem key="copy">5</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <span className="text-2xl items-center"> ~ </span>
        <Dropdown className="min-w-100">
          <DropdownTrigger>
            <Button variant="bordered">--</Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Static Actions"
            className={styles.itemDropDown}
          >
            <DropdownItem key="new">1</DropdownItem>
            <DropdownItem key="copy">2</DropdownItem>
            <DropdownItem key="edit">3</DropdownItem>
            <DropdownItem key="new">4</DropdownItem>
            <DropdownItem key="copy">5</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}
