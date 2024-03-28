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
        style.playerCard,
        "w-[140px] relative min-w-[140px] xss:max-mobile:h-[165px] xss:max-mobile:w-[100px] xss:max-mobile:min-w-[100px]"
      )}
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
          "xss:max-mobile:text-[14px] xss:max-mobile:w-[20px] left-[3px] text-[22px] w-[36px] top-[40px]"
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
          src={data?.nationLogo || ""}
          width={23}
          height={24}
          alt={data?.nationAlt || "nationAlt"}
          className={clsx("xss:max-mobile:w-[22px]")}
          style={{ width: 23, height: 12 }}
        ></Image>
      </div>
      <div
        className={clsx(
          "avatar absolute",
          "top-9 left-3 xss:max-mobile:top-[31px]"
        )}
      >
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
          "w-8 h-8 rounded-[36px] top-[112px] left-[6px]  xss:max-mobile:w-[26px] xss:max-mobile:h-[26px] xss:max-mobile:top-[90px]"
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
          "w-full absolute left-0 flex justify-center",
          "top-[152px] xss:max-mobile:top-[120px] "
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
      {/* <div
        className={clsx("top-[134px] absolute right-[15px] px-3 bg-gray-500")}
      >
        <p className="text-white font-bold">{1}</p>
      </div> */}
      <div
        className={clsx(
          "top-[134px] absolute right-[15px] px-3 flex justify-center items-center rounded-[4px] xss:max-mobile:w-[40px] xss:max-mobile:min-w-[40px] upgrade1"
        )}
      >
        <p className="font-[EASANS] text-[13px]">1</p>
      </div>
    </div>
  );
}
