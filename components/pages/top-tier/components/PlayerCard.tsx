import style from "@/styles/player.module.css";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
type PlayerCard = {
  data?: any;
  backgroundLogo?: string;
  cssColor?: string;
};

export function PlayerCard(props: PlayerCard) {
  const { data, backgroundLogo, cssColor } = props;

  return (
    <Link
      href={
        "/du-lieu-cau-thu-fc-online/chi-tiet-cau-thu/" + data?.playerSeasonId
      }
      className="flex justify-center"
    >
      <div
        className={clsx("w-[140px] relative min-w-[140px]")}
        data-after-content={data?.ranking}
      >
        <div className="card_back">
          <Image
            width={133}
            src={backgroundLogo || "/images/the_trong.png"}
            alt={data?.seasonShortName}
            height={202}
            style={{ width: 133, height: 202 }}
          ></Image>
        </div>
        <div
          style={{
            color: cssColor,
          }}
          className={clsx(
            style.ovr,
            "left-[3px] text-[22px] w-[36px] top-[40px]"
          )}
        >
          {data?.playerOvr}
        </div>
        <div
          style={{
            color: cssColor,
          }}
          className={clsx(
            style.position,
            "text-[16px] top-[60px]  left-0 w-[40px]"
          )}
        >
          {data?.playerMainPosition}
        </div>
        <div
          className={clsx(
            "top-[80px] flex justify-center left-2 z-10 absolute"
          )}
        >
          <Image
            src={data?.nationLogo || ""}
            width={23}
            height={24}
            alt={data?.nationAlt || "nationAlt"}
            className={clsx("xss:max-mobile:w-[22px]")}
            style={{ width: 23, height: 12 }}
          ></Image>
        </div>
        <div className={clsx("avatar absolute", "top-9 left-3")}>
          <Image
            src={data.playerAvatar}
            alt={data?.playerAvatarAlt || "player avatar"}
            width={114}
            height={224}
            style={{ width: 114, height: 114 }}
          ></Image>
        </div>
        <div
          className={clsx(
            "season absolute bg-white z-2 flex justify-center items-center",
            "w-8 h-8 rounded-[36px] top-[112px] left-[6px]"
          )}
        >
          <div className="w-7">
            <Image
              src={data?.seasonBigLogo || ""}
              width={28}
              height={28}
              alt={"seasonBigLogo"}
              style={{ width: 28, height: 28 }}
              className=""
            ></Image>
          </div>
        </div>
        <div
          className={clsx(
            "w-full absolute left-0 flex justify-center top-[152px]"
          )}
        >
          <div className="flex items-center ml-[-15px]">
            <div className={clsx("px-1 inline-block ml-2 place-self-center")}>
              <Image
                src={data?.seasonLogo}
                width={16}
                height={13}
                alt={data?.seasonAlt || "seasonAlt"}
                style={{ width: 16, height: 13 }}
                className=""
              ></Image>
            </div>
            <div
              className={clsx(
                "max-w-[125px] truncate  text-[#242323] mr-1 font-semibold place-self-center grow",
                `text-[12px] text-[${cssColor}]`
              )}
            >
              {data?.playerName}
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "xss:max-mobile:w-[29.5px] xss:max-mobile:h-[13px] " +
              " xss:max-mobile:before:top-[-10px]   xss:max-mobile:before:w-[20px] xss:max-mobile:before:h-[20px]" +
              " xss:max-mobile:left-[2px]   xss:max-mobile:after:w-[20px] xss:max-mobile:after:h-[20px] xss:max-mobile:text-[13px] xss:max-mobile:bottom-[0%] xss:max-mobile:mb-[14px]",
            "w-[32px] h-[18px] before:top-[-11px]   before:w-[22px] before:h-[22px]  after:w-[22px] after:h-[22px] text-[16px] my-[8.66px]",
            style.salary,
            style.salary_avatar,
            "bottom-0"
          )}
        >
          {data?.playerSalary}
        </div>
        <div
          className={clsx(
            "top-[134px] absolute right-[15px] px-3 flex justify-center items-center upgrade1"
          )}
        >
          <p className="font-[EASANS] text-[13px]">1</p>
        </div>
      </div>
    </Link>
  );
}
