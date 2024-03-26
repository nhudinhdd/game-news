import style from "@/styles/player.module.css";
import clsx from "clsx";
import Image from "next/image";
type PlayerCard = {
  data?: any;
  backgroundLogo?: string;
  cssColor?: string;
};

export function PlayerCard(props: PlayerCard) {
  const { data, backgroundLogo, cssColor } = props;

  return (
    <div
      className={clsx(
        "w-[140px] relative min-w-[140px] xss:max-mobile:h-[165px] xss:max-mobile:w-[100px] xss:max-mobile:min-w-[100px]"
      )}
    >
      <div className="card_back">
        <Image
          width={133}
          src={backgroundLogo ? backgroundLogo : ""}
          alt={data?.seasonShortName}
          height={202}
        ></Image>
      </div>
      <div
        style={{
          color: cssColor,
        }}
        className={clsx(
          style.ovr,
          "xss:max-mobile:text-[14px] xss:max-mobile:w-[20px] left-[3px] text-[22px] w-[36px] top-[40px]"
        )}
      >
        {/* {dataElementList && page === "formation"
          ? dataElementList.ovr + (level - 1)
          : data
          ? data.ovr
          : 0 + (upgrade - 1) + (level - 1) + teamColor} */}
        {data?.playerOvr}
      </div>
      <div
        style={{
          color: cssColor,
        }}
        className={clsx(
          style.position,
          "xss:max-mobile:text-[18px] text-[16px]  xss:max-mobile:top-[56px]  xss:max-mobile:w-[40px]  xss:max-mobile:left-0  top-[60px]  left: 0 w-[40px]"
        )}
      >
        {data?.playerMainPosition}
      </div>
      <div
        className={clsx(
          "xss:max-mobile:top-[75px] xss:max-mobile:left-[6px] top-[80px] flex justify-center left-2  z-10 absolute"
        )}
      >
        <Image
          src={data?.nationLogo}
          width={23}
          height={24}
          alt={""}
          className={clsx("xss:max-mobile:w-[22px]")}
        ></Image>
      </div>
      <div
        className={clsx(
          "avatar absolute",
          "top-[39px] left-3 xss:max-mobile:top-[31px]"
        )}
      >
        <Image
          src={data.playerAvatar}
          alt={data?.playerAvatarAlt}
          width={114}
          height={224}
        ></Image>
      </div>
      <div
        className={clsx(
          "season absolute bg-white z-2 flex justify-center items-center",
          "w-[36px] h-[36px] rounded-[36px] top-[126px] left-[6px]  xss:max-mobile:w-[26px] xss:max-mobile:h-[26px] xss:max-mobile:top-[90px]"
        )}
      >
        <div className="w-7">
          <Image
            src={data?.seasonBigLogo}
            width={28}
            height={28}
            alt={""}
            className=""
          ></Image>
        </div>
      </div>
      <div
        className={clsx(
          "w-full absolute left-0 flex justify-center",
          "top-[168px] xss:max-mobile:top-[120px] "
        )}
      >
        <div className="flex items-center ml-[-15px]">
          <div className={clsx("px-1 inline-block ml-2 place-self-center")}>
            <Image
              src={data?.seasonLogo}
              width={16}
              height={16}
              alt={data?.seasonAlt}
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
          "bottom-[30px]"
        )}
      >
        {data?.playerSalary}
      </div>
      <div
        className={clsx(
          // page === "formation" ? "" : style.salary,
          // page === "formation" ? "" : style.salary_avatar,
          "top-[145px] absolute right-[15px] px-3 bg-gray-500"
        )}
      >
        <p className="text-white font-bold">{1}</p>
      </div>
    </div>
  );
}
