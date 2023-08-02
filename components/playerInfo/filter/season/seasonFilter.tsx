"use client";
import useSeason from "@/lib/useSeason";
import { SeasonRes } from "@/model/player/season";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Image from "next/image";
import { useMemo, useState } from "react";

type SeasonFilterProps = {
  setSeasonID: (seasonID: string) => void;
};
export default function SeasonFilter(props: SeasonFilterProps) {
  const arr: SeasonRes[] = [];
  const { data = arr } = useSeason();
  const { setSeasonID } = props;
  const [selectedKeys, setSelectedKeys] = useState(new Set([""]));
  const selectedValue = useMemo(() => {
    const key = Array.from(selectedKeys).join("");
    const value = data.find((i) => i.seasonID === key)?.shortName || "Mùa giải";
    return value;
  }, [selectedKeys]);
  return (
    <div className="flex flex-col gap-2">
      <div>
        <label>Mùa</label>
      </div>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">{selectedValue}</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Danh sách mùa giải trong FC Online"
          variant="flat"
          className="max-w-200 "
          selectionMode="single"
          disallowEmptySelection
          selectedKeys={selectedKeys}
          onSelectionChange={(key) => {
            const selectedKey = Array.from(key).join("");
            setSelectedKeys(new Set([selectedKey]));
            setSeasonID(selectedKey);
          }}
        >
          {[
            {
              seasonID: "",
              fullName: " Mùa giải",
              shortName: "Mùa giải",
              logo: "",
              altLogoSeason: "",
            },
            ...data,
          ]?.map((item) => (
            <DropdownItem
              key={item.seasonID}
              startContent={
                item.seasonID !== "" && (
                  <Image
                    src={item.logo}
                    alt={item.altLogoSeason}
                    width={18}
                    height={14}
                  ></Image>
                )
              }
              className=" overflow-x-auto"
            >
              {item.fullName}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
