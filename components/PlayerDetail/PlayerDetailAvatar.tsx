import { PlayerSeasonDetailRes } from "@/model/player/player";
import Image from "next/image";
import style from "../../styles/player.module.css";
import clsx from "clsx";
type PlayerDetailAvatar = {
  data: PlayerSeasonDetailRes;
  upgrade: number;
  level: number;
  teamColor: number;
};

export function PlayerDetailAvatar(props: PlayerDetailAvatar) {
  const { data, upgrade, level, teamColor } = props;

  return (
    <div className="w-[165px] h-[265px] relative min-w-[165px]">
      <div className="card_back">
        <Image
          width={165}
          src={data.season.backgroundLogo}
          alt={data.season.altBackgroundLogo}
          height={265}
        ></Image>
      </div>
      <div className={style.ovr}>
        {data.ovr + (upgrade - 1) + (level - 1) + (teamColor - 1)}
      </div>
      <div className={style.position}>{data.playerPosition}</div>
      <div className={style.nation}>
        <Image
          src={data.playerInfo.nationRes.ensign}
          width={28}
          height={24}
          alt={data.playerInfo.nationRes.altEnsign}
        ></Image>
      </div>
      <div className="avatar absolute top-[53px] left-5 z-1">
        <Image
          src={data.avatar}
          alt={data.altAvatar}
          width={144}
          height={274}
        ></Image>
      </div>
      <div className="season absolute top-[147px] left-[8px] w-[46px] h-[46px] rounded-[46px] bg-white z-2 flex justify-center items-center">
        <div className="w-7">
          <Image
            src={data.season.bigLogo}
            width={28}
            height={28}
            alt={data.season.altLogoSeason}
            className=""
          ></Image>
        </div>
      </div>
      <div className="w-full absolute top-[200px] left-0 text-center">
        <div className="mr-1 inline-block mt-1 ml-2">
          <Image
            src={data.season.logo}
            width={24}
            height={24}
            alt={data.season.altLogoSeason}
            className=""
          ></Image>
        </div>
        <div className="inline-block max-w-[125px] truncate text-base text-black mr-1 font-medium">
          {data.playerInfo.firstName
            .concat(" ")
            .concat(data.playerInfo.lastName)}
        </div>
      </div>
      <div className={clsx(style.salary, style.salary_avatar)}>
        {data.salary}
      </div>
    </div>
  );
}
