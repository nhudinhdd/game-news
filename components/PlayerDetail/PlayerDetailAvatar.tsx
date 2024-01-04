import { PlayerSeasonDetailRes } from "@/model/player/player";
import Image from "next/image";
import style from "../../styles/player.module.css";
import clsx from "clsx";
type PlayerDetailAvatar = {
  data?: PlayerSeasonDetailRes;
  upgrade: number;
  level: number;
  teamColor: number;
  page?: string;
};

export function PlayerDetailAvatar(props: PlayerDetailAvatar) {
  const { data, upgrade, level, teamColor, page } = props;

  if (!data) return null;
  return (
    <div
      className={clsx(
        page === "compare"
          ? "w-[140px] relative min-w-[140px] xss:max-mobile:h-[165px]  h-[240px] xss:max-mobile:w-[100px] xss:max-mobile:min-w-[100px]"
          : "w-[165px] h-[265px] relative min-w-[165px]"
      )}
    >
      <div className="card_back">
        <Image
          width={165}
          src={data.season?.backgroundLogo}
          alt={data.season?.altBackgroundLogo}
          height={265}
        ></Image>
      </div>
      <div
        className={clsx(
          style.ovr,
          page === "compare"
            ? "xss:max-mobile:text-[20px] xss:max-mobile:w-[40px]"
            : "",
          "text-[28px] w-[61px]"
        )}
      >
        {data.ovr + (upgrade - 1) + (level - 1) + (teamColor - 1)}
      </div>
      <div
        className={clsx(
          style.position,
          page === "compare"
            ? "xss:max-mobile:text-[18px]   text-[26px]  xss:max-mobile:top-[56px]  xss:max-mobile:w-[40px]  xss:max-mobile:left-0  top-[65px]  left: 0 w-[61px]"
            : " text-[26px]  xss:max-mobile:left-0  top-[70px]  left: 0 w-[61px]",
          ""
        )}
      >
        {data.playerMainPosition}
      </div>
      <div
        className={clsx(
          page === "compare"
            ? "xss:max-mobile:top-[75px] xss:max-mobile:left-[6px] top-[105px] flex justify-center left-2  z-10"
            : "top-[105px] flex justify-center left-4",
          "absolute left-0 "
        )}
      >
        <Image
          src={data.playerInfo?.nationRes?.ensign}
          width={28}
          height={24}
          alt={data.playerInfo?.nationRes?.altEnsign}
          className={clsx(page === "compare" ? "xss:max-mobile:w-[22px]" : "")}
        ></Image>
      </div>
      <div
        className={clsx(
          "avatar absolute",
          page === "compare"
            ? "top-[39px] left-3   xss:max-mobile:top-[31px] "
            : "top-[53px] left-5 z-1"
        )}
      >
        <Image
          src={data.avatar}
          alt={data.altAvatar}
          width={144}
          height={274}
        ></Image>
      </div>
      <div
        className={clsx(
          "season absolute bg-white z-2 flex justify-center items-center",
          page === "compare"
            ? "w-[36px] h-[36px] rounded-[36px] top-[126px] left-[6px]  xss:max-mobile:w-[26px] xss:max-mobile:h-[26px] xss:max-mobile:top-[90px]"
            : " top-[147px] left-[8px] w-[46px] h-[46px] rounded-[46px]"
        )}
      >
        <div className="w-7">
          <Image
            src={data.season?.bigLogo}
            width={28}
            height={28}
            alt={data.season?.altLogoSeason}
            className=""
          ></Image>
        </div>
      </div>
      <div
        className={clsx(
          "w-full absolute  left-0 text-center flex",
          page === "compare"
            ? " top-[168px] xss:max-mobile:top-[120px] "
            : "top-[200px]"
        )}
      >
        <div className={clsx("px-1 inline-block ml-2 place-self-center")}>
          <Image
            src={data.season?.logo}
            width={page === "compare" ? 20 : 24}
            height={page === "compare" ? 20 : 24}
            alt={data.season?.altLogoSeason}
            className=""
          ></Image>
        </div>
        <div
          className={clsx(
            "inline-block max-w-[125px] truncate  text-black mr-1 font-medium place-self-center",
            page === "compare" ? "text-[13px]" : "text-base"
          )}
        >
          {data.playerInfo?.firstName
            .concat(" ")
            .concat(data.playerInfo?.lastName)}
        </div>
      </div>
      <div
        className={clsx(
          page === "compare" ? "" : "",
          page === "compare"
            ? "xss:max-mobile:w-[29.5px] xss:max-mobile:h-[13px] " +
                " xss:max-mobile:before:top-[-10px]   xss:max-mobile:before:w-[20px] xss:max-mobile:before:h-[20px]" +
                " xss:max-mobile:left-[2px]   xss:max-mobile:after:w-[20px] xss:max-mobile:after:h-[20px] xss:max-mobile:text-[13px] xss:max-mobile:bottom-[0%] xss:max-mobile:mb-[14px]"
            : "",
          "w-[32px] h-[18px] before:top-[-11px]   before:w-[22px] before:h-[22px]  after:w-[22px] after:h-[22px] text-[16px] my-[8.66px]",
          style.salary,
          style.salary_avatar,
          page === "compare" ? "bottom-[20px]" : " bottom-[6px]"
        )}
      >
        {data.salary}
      </div>
    </div>
  );
}
