import { PlayerSeasonRes } from "@/model/player/player";
import Image from "next/image";
import Link from "next/link";
// import style from "../../../styles/playerInfo.scss";
interface PlayerCommonInfo {
  playerSeason: PlayerSeasonRes;
}

export function PlayerCommonInfo(props: PlayerCommonInfo) {
  const { playerSeason } = props;
  return (
    <div className="flex flex-row ml-1">
      <div className="grow flex flex-row">
        <div className="pl-4 place-self-center flex flex-col gap-[4px]">
          <div className="flex flex-row justify-start gap-3 items-center">
            <div className="">
              <Image
                src={playerSeason?.seasonRes.logo}
                alt={"Mùa giải " + playerSeason.seasonRes.fullName}
                width={18}
                height={14}
              ></Image>
            </div>
            {/* <Link
              href={
                "/du-lieu-cau-thu-fc-online/chi-tiet-cau-thu/" +
                playerSeason.playerSeasonID
              }
              className="cursor-pointer"
            > */}
            <span className="">{playerSeason.playerInfoRes?.fullName}</span>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
