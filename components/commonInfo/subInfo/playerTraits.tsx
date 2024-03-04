import { PlayerSeasonTraitRes } from "@/model/player/playerSeasonTrait";
import { Listbox, ListboxItem } from "@nextui-org/react";
import clsx from "clsx";
import Image from "next/image";
import style from "../../../styles/compare.module.css";
type PlayerTraits = {
  data: Array<PlayerSeasonTraitRes>;
  page?: string;
  pageNumber?: number;
};

export default function PlayerTraits(props: PlayerTraits) {
  const { data, page, pageNumber } = props;
  return (
    <Listbox
      variant="flat"
      aria-label="Danh sách chỉ số ẩn"
      className="flex items-end text-[#3f3e3e] overflow-y-auto  h-[400px]"
    >
      {data?.map((d) => (
        <ListboxItem
          className={clsx(
            pageNumber === 1 ? "flex-row-reverse " + style.traitCompare : "",
            ""
          )}
          key={d.psTraitID}
          description={d.trait.description}
          startContent={
            <Image
              src={d.trait.logo}
              width={35}
              height={24}
              alt={d.trait.altLogo}
            ></Image>
          }
          variant="light"
          textValue={
            "Chỉ số ẩn  " + d.trait.name + "trong FC online | FIFA online 4"
          }
        >
          <span className=" text-[17px] font-semibold flex items-end">
            {d.trait.name}
          </span>
        </ListboxItem>
      ))}
    </Listbox>
  );
}
