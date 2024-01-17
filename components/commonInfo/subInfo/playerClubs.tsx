import { PlayerTeamRes } from "@/model/player/playerTeam";
import { Listbox, ListboxItem } from "@nextui-org/react";
import Image from "next/image";
import style from "../../../styles/compare.module.css";
import { clsx } from "clsx";
type PlayerClubs = {
  data: Array<PlayerTeamRes>;
  fullName: string;
  pageNumber?: number;
};
export default function PlayerClubs(props: PlayerClubs) {
  const { data, fullName, pageNumber } = props;
  return (
    <Listbox
      variant="flat"
      aria-label={"Sự nghiệp câu lạc bổ của ".concat(fullName)}
    >
      {data?.map((i) => (
        <ListboxItem
          className={clsx(
            pageNumber === 1
              ? "flex-row-reverse " + style.traitCompareClub
              : "",
            ""
          )}
          key={i.playerTeamID}
          startContent={
            i.teamRes.teamLogo && (
              <Image
                src={i.teamRes.teamLogo}
                width={30}
                height={45}
                alt={i.teamRes.altLogo}
                className="mr-1"
              ></Image>
            )
          }
          variant="light"
        >
          <div className="flex flex-col gap-1">
            <span>{i.teamRes.teamName}</span>
            <div className="">
              <span className="text-tiny  mr-1">{i.startYear}</span>
              <span className="justify-items-center mr-1">-</span>
              <span className="text-tiny">{i.endYear}</span>
            </div>
          </div>
          <span className="text-base"></span>
        </ListboxItem>
      ))}
    </Listbox>
  );
}
