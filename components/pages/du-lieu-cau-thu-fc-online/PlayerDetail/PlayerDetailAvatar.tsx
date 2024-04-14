import { getUpgradeClass } from "@/lib/common";
import { PlayerSeasonDetailRes, PlayerSeasonRes } from "@/model/player/player";
import style from "@/styles/player.module.css";
import clsx from "clsx";
import { get } from "lodash";
import Image from "next/image";
import Upgrade from "../playerInfo/filter/dropdown/upgrade";
type PlayerDetailAvatar = {
  data?: PlayerSeasonDetailRes;
  upgrade: number;
  level: number;
  teamColor: number;
  page?: string;
  dataElementList?: PlayerSeasonRes | undefined;
  position?: string;
};

export function PlayerDetailAvatar(props: PlayerDetailAvatar) {
  const { data, upgrade, level, teamColor, page, dataElementList, position } =
    props;

  const renderOvr = (
    data?: PlayerSeasonDetailRes,
    dataElementList?: PlayerSeasonRes,
    page?: string
  ) => {
    if (dataElementList) {
      if (page === "formation") {
        return (
          Number(
            get(dataElementList.positionOvr, position || "") ||
              dataElementList.ovr
          ) +
          (level - 1)
        );
      } else {
        return dataElementList.ovr;
      }
    } else if (data) {
      return data.ovr;
    } else {
      return 0 + (upgrade - 1) + (level - 1) + teamColor;
    }
  };

  return (
    <div
      className={clsx(
        page === "compare"
          ? "w-[140px] relative min-w-[140px] xss:max-mobile:h-[165px]  h-[240px] xss:max-mobile:w-[100px] xss:max-mobile:min-w-[100px]"
          : page === "formation"
          ? "w-[85px] relative min-w-[85px] xss:max-mobile:h-[125px]  h-[164px] xss:max-mobile:w-[85px] xss:max-mobile:min-w-[85px]"
          : "w-[165px] h-[265px] relative min-w-[165px]"
      )}
    >
      <div className="card_back">
        {page !== "formation" && (
          <Image
            width={165}
            src={
              dataElementList
                ? dataElementList.seasonRes.backgroundLogo
                : data
                ? data.season.backgroundLogo
                : ""
            }
            alt={
              dataElementList
                ? dataElementList.seasonRes.fullName
                : data
                ? data.season.fullName
                : ""
            }
            height={265}
          ></Image>
        )}
      </div>
      <div
        style={{
          color: dataElementList
            ? page === "formation"
              ? "white"
              : dataElementList.seasonRes.cssColor
            : data?.season.cssColor,
        }}
        className={clsx(
          style.ovr,
          page === "compare"
            ? "xss:max-mobile:text-[20px] xss:max-mobile:w-[40px] left-0"
            : page === "formation"
            ? "xss:max-mobile:text-[14px] xss:max-mobile:w-[20px] left-[70px]"
            : "",
          page === "formation"
            ? "text-[21.5px] w-[36px] top-[72px] !font-medium"
            : "text-[28px] w-[61px] top-[35px]"
        )}
      >
        {renderOvr(data, dataElementList, page)}
      </div>
      <div
        style={{
          color: dataElementList
            ? page === "formation"
              ? "white"
              : dataElementList.seasonRes.cssColor
            : data?.season.cssColor,
        }}
        className={clsx(
          style.position,
          page === "compare"
            ? "xss:max-mobile:text-[18px] text-[26px]  xss:max-mobile:top-[56px]  xss:max-mobile:w-[40px]  xss:max-mobile:left-0  top-[65px]  left: 0 w-[61px]"
            : page === "formation"
            ? "hidden"
            : "text-[26px]  xss:max-mobile:left-0  top-[70px]  left: 0 w-[61px]",
          ""
        )}
      >
        {dataElementList
          ? page === "formation"
            ? position?.toLocaleLowerCase()?.includes("empty")
              ? dataElementList.playerMainPosition
              : position
            : dataElementList.playerMainPosition
          : data?.playerMainPosition}
      </div>
      <div
        className={clsx(
          page === "compare"
            ? "xss:max-mobile:top-[75px] xss:max-mobile:left-[6px] top-[105px] flex justify-center left-2  z-10"
            : page === "formation"
            ? "top-[60px] flex justify-center left-2"
            : "top-[105px] flex justify-center left-4",
          "absolute left-0 "
        )}
      >
        {page !== "formation" && (
          <Image
            src={
              dataElementList != undefined
                ? dataElementList.playerInfoRes?.nationRes.ensign
                : data
                ? data.playerInfo.nationRes.ensign
                : ""
            }
            width={page === "formation" ? 23 : 28}
            height={24}
            alt={""}
            className={clsx(
              page === "compare" ? "xss:max-mobile:w-[22px]" : ""
            )}
          ></Image>
        )}
      </div>
      <div
        className={clsx(
          "avatar absolute",
          page === "compare"
            ? "top-[39px] left-3 xss:max-mobile:top-[31px] "
            : page === "formation"
            ? "top-[25px] left-3 xss:max-mobile:top-[20px] "
            : "top-[53px] left-5 z-1"
        )}
      >
        <Image
          src={
            dataElementList ? dataElementList.avatar : data ? data.avatar : ""
          }
          alt={
            dataElementList
              ? dataElementList.altAvatar
              : data
              ? data.altAvatar
              : ""
          }
          width={144}
          height={274}
        ></Image>
      </div>
      <div
        className={clsx(
          "season absolute bg-white z-2 flex justify-center items-center",
          page === "compare"
            ? "w-[36px] h-[36px] rounded-[36px] top-[126px] left-[6px]  xss:max-mobile:w-[26px] xss:max-mobile:h-[26px] xss:max-mobile:top-[90px]"
            : page === "formation"
            ? "hidden w-[23px] h-[23px] rounded-[23px] top-[92px] left-[6px]  xss:max-mobile:w-[26px] xss:max-mobile:h-[26px] xss:max-mobile:top-[90px]"
            : " top-[147px] left-[8px] w-[46px] h-[46px] rounded-[46px]"
        )}
      >
        <div className="w-7">
          <Image
            src={
              dataElementList
                ? dataElementList.seasonRes.bigLogo
                : data
                ? data.season.bigLogo
                : ""
            }
            width={28}
            height={28}
            alt={
              dataElementList
                ? dataElementList.seasonRes.altLogoSeason
                : data
                ? data.season.altLogoSeason
                : ""
            }
            className=""
          ></Image>
        </div>
      </div>
      <div
        className={clsx(
          "absolute left-0 flex ",
          page === "compare"
            ? "w-full top-[168px] xss:max-mobile:top-[120px] "
            : page === "formation"
            ? "w-fit top-[102px] left-1/2 -translate-x-1/2 xss:max-mobile:top-[117px] "
            : "w-full top-[200px]"
        )}
      >
        {page === "formation" ? (
          <Image
            src={
              dataElementList
                ? dataElementList.seasonRes.logo
                : data
                ? data.season.logo
                : ""
            }
            width={20}
            height={12}
            style={{ width: 22, height: 15 }}
            alt={dataElementList ? dataElementList.seasonRes.fullName : ""}
            className="mr-1 place-self-center"
          />
        ) : (
          <div
            className={clsx(
              "px-1 inline-block place-self-center",
              page === "formation" ? "" : "ml-2"
            )}
          >
            <Image
              src={
                dataElementList
                  ? dataElementList.seasonRes.logo
                  : data
                  ? data.season.logo
                  : ""
              }
              width={page === "compare" ? 20 : page === "formation" ? 16 : 24}
              height={page === "compare" ? 20 : page === "formation" ? 16 : 24}
              alt={
                dataElementList
                  ? dataElementList.seasonRes.fullName
                  : data
                  ? data.season.fullName
                  : ""
              }
              className=""
            ></Image>
          </div>
        )}

        <div
          className={clsx(
            "max-w-[125px] text-[#242323] mr-1  place-self-center grow",
            page === "compare"
              ? "text-[14px] truncate font-semibold"
              : page === "formation"
              ? "text-[13px] text-white whitespace-nowra font-medium font-[system-ui]"
              : "text-base truncate"
          )}
        >
          {dataElementList
            ? dataElementList.playerInfoRes.shortName
            : data?.playerInfo.shortName}
        </div>
      </div>
      <div
        className={clsx(
          page === "compare"
            ? "xss:max-mobile:w-[29.5px] xss:max-mobile:h-[13px] " +
                " xss:max-mobile:before:top-[-10px]   xss:max-mobile:before:w-[20px] xss:max-mobile:before:h-[20px]" +
                " xss:max-mobile:left-[2px]   xss:max-mobile:after:w-[20px] xss:max-mobile:after:h-[20px] xss:max-mobile:text-[13px] xss:max-mobile:bottom-[0%] xss:max-mobile:mb-[14px]"
            : page === "formation"
            ? "xss:max-mobile:w-[29.5px] xss:max-mobile:h-[13px] top-50 absolute -right-[25px]"
            : "",
          "w-[32px] h-[18px] ml-1 before:top-[-11px]   before:w-[22px] before:h-[22px]  after:w-[22px] after:h-[22px] text-[16px] my-[8.66px]",
          style.salary2,
          page === "formation"
            ? "!top-[66px] !right-[40px] !text-white !"
            : style.salary_avatar,
          page === "compare" ? "bottom-[20px]" : " bottom-[6px]"
        )}
      >
        {dataElementList ? dataElementList.salary : data?.salary}
      </div>
    </div>
  );
}
