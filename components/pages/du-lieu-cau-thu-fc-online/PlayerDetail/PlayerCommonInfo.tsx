import { PlayerSeasonDetailRes, PlayerSeasonRes } from "@/model/player/player";
import clsx from "clsx";
import Image from "next/image";
import { getColorPosition } from "@/lib/common";
import { ScrollShadow } from "@nextui-org/react";
import Favorite from "@/components/commonInfo/favorite/favorite";
import FavoriteFoot from "@/components/commonInfo/foot/FavoriteFoot";
import StarSkill from "@/components/starSkill/StarSkill";
import Upgrade from "@/components/commonInfo/dropdown/upgrade";
import Level from "@/components/commonInfo/dropdown/level";
import TeamColor from "@/components/commonInfo/dropdown/teamColor";

type PlayerCommonInfo = {
  data?: PlayerSeasonDetailRes;
  setUpgrade: (data: number) => void;
  setLevel: (data: number) => void;
  setTeamColor: (data: number) => void;
  upgrade: number;
  level: number;
  teamColor: number;
  page?: string;
  pageNumber?: number;
  className?: string;
  dataElementList?: PlayerSeasonRes;
};

export function PlayerCommonInfo(props: PlayerCommonInfo) {
  const {
    data,
    setUpgrade,
    setLevel,
    setTeamColor,
    upgrade,
    level,
    teamColor,
    page,
    pageNumber,
    className,
    dataElementList,
  } = props;
  return (
    <div
      className={clsx(
        page == "compare" ? "pt-3" : "pt-8",

        "playerCommon flex flex-col  gap-3  xss:max-mobileMiddle::gap-0  xss:max-mobile:pt-4 pr-1 xss:max-mobileMiddle:pr-0 text-[#757574] font-[515]",
        className
      )}
    >
      <div
        className={clsx(
          page == "compare" && pageNumber == 2 ? "flex-row-reverse" : "",
          "flex flex-row gap-2 justify-between"
        )}
      >
        <div
          className={clsx(
            page == "compare" && pageNumber == 2 ? "flex-row-reverse" : "",
            "flex flex-row gap-2 xss:max-mobile:flex-col"
          )}
        >
          <div
            className={clsx(
              page == "compare"
                ? "flex flex-row justify-end mobile:place-self-center"
                : "place-self-center"
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
              width={27}
              height={24}
              alt={
                dataElementList
                  ? dataElementList.seasonRes.altLogoSeason
                  : data
                  ? data.season.altLogoSeason
                  : ""
              }
              className="!max-w-[27px] !max-h-[20px]"
            ></Image>
          </div>
          <div
            className={clsx(
              page == "compare"
                ? " xss:max-mobile:max-w-[70px] mobile:max-laptop::max-w-[70px] xss:max-mobile:text-sm xss:max-laptop:truncate"
                : "text-xl  ",
              "   text-[#242323] font-semibold  text-center",
              className
            )}
          >
            {dataElementList
              ? dataElementList.playerInfoRes.fullName
              : data?.playerInfo.fullName}
          </div>
        </div>
      </div>
      <div
        className={clsx(
          page == "compare" && pageNumber == 2 ? "flex-row-reverse" : "",
          "text-2xl flex flex-row gap-4 flex-wrap xss:max-mobile:gap-2"
        )}
      >
        <div
          className={clsx(
            page == "compare" && pageNumber == 2 ? "flex-row-reverse" : "",
            "flex flex-row gap-2 mr-2",
            page == "compare" ? "flex" : "hidden"
          )}
        >
          <span
            className={clsx(
              getColorPosition(
                dataElementList
                  ? dataElementList.playerMainPosition
                  : data
                  ? data.playerMainPosition
                  : ""
              ),
              "text-[18px]"
            )}
          >
            {dataElementList
              ? dataElementList.playerMainPosition
              : data
              ? data.playerMainPosition
              : ""}
          </span>
          <span className="text-[#000000] text-[18px]">
            {Number(dataElementList ? dataElementList.ovr : data?.ovr) +
              (upgrade - 1) +
              (level - 1) +
              teamColor}
          </span>
        </div>
        <ScrollShadow
          hideScrollBar
          className={clsx(page == "compare" ? "hidden" : "")}
          orientation="horizontal"
          isEnabled={false}
        >
          <div
            className={clsx(
              page == "compare" ? "xss:max-mobile:text-xl" : "",
              "text-2xl flex flex-row gap-2"
            )}
          >
            {dataElementList &&
              dataElementList.positionOvr &&
              Object.entries(dataElementList.positionOvr).map(
                ([key, value]) => (
                  <div className="flex flex-row gap-2 mr-2" key={value}>
                    <span className={clsx(getColorPosition(key))}>{key}</span>
                    <span className="">
                      {Number(value) + (upgrade - 1) + (level - 1) + teamColor}
                    </span>
                  </div>
                )
              )}

            {data &&
              data.positionOvr &&
              Object.entries(data.positionOvr).map(([key, value]) => (
                <div className="flex flex-row gap-2 mr-2" key={value}>
                  <span className={clsx(getColorPosition(key))}>{key}</span>
                  <span className="">
                    {Number(value) + (upgrade - 1) + (level - 1) + teamColor}
                  </span>
                </div>
              ))}
          </div>
        </ScrollShadow>

        <div>
          <Favorite
            playerSeasonID={
              dataElementList
                ? dataElementList.playerSeasonID
                : data
                ? data.playerSeasonID
                : ""
            }
          />
        </div>
      </div>
      <div className={clsx("flex flex-col gap-4 ")}>
        <div
          className={clsx(
            page == "compare" ? "xss:max-mobileMiddle:hidden" : ""
          )}
        >
          <div
            className={clsx(
              page == "compare" && pageNumber == 2 ? "flex-row-reverse" : "",
              "flex flex-row gap-3  text-sm flex-wrap xss:max-mobile:gap-[8px]"
            )}
          >
            <span className={clsx(page == "compare" ? "hidden" : "")}>
              {dataElementList
                ? dataElementList.playerInfoRes?.birthDay
                : data?.playerInfo?.birthDay}
            </span>
            <span
              className={clsx(
                page == "compare" ? "hidden" : "xss:max-mobile:hidden"
              )}
            >
              |
            </span>
            <span>
              {dataElementList ? dataElementList.height : data?.height} cm
            </span>
            <span
              className={clsx(
                page == "compare" ? "hidden" : "xss:max-mobile:hidden"
              )}
            >
              |
            </span>
            <span>
              {dataElementList ? dataElementList.weight : data?.weight} kg
            </span>
            <span
              className={clsx(
                page == "compare" ? "hidden" : "xss:max-mobile:hidden"
              )}
            >
              |
            </span>

            <div className="flex flex-row gap-2 max-w-[30px] max-h-[30px]">
              <FavoriteFoot
                favoriteFoot={
                  dataElementList
                    ? dataElementList.favoriteFoot
                    : data
                    ? data.favoriteFoot
                    : 1
                }
                leftFoot={Number(
                  dataElementList ? dataElementList.leftFoot : data?.leftFoot
                )}
                rightFoot={Number(
                  dataElementList ? dataElementList.rightFoot : data?.rightFoot
                )}
              ></FavoriteFoot>
            </div>

            <div className={clsx("flex flex-row gap-3")}>
              <span
                className={clsx(
                  page == "compare" ? "hidden" : "xss:max-mobile:hidden"
                )}
              >
                |
              </span>
              <span>
                {dataElementList ? dataElementList.fitness : data?.fitness}
              </span>
              <span
                className={clsx(
                  page == "compare" ? "hidden" : "xss:max-mobile:hidden"
                )}
              >
                |
              </span>
              <div className={clsx(page == "compare" ? "hidden" : "")}>
                <StarSkill
                  numberSkill={Number(
                    dataElementList ? dataElementList.skill : data?.skill
                  )}
                ></StarSkill>
              </div>

              <span
                className={clsx(
                  page == "compare" ? "hidden" : "xss:max-mobile:hidden"
                )}
              >
                |
              </span>
              <span>
                {dataElementList
                  ? dataElementList.reputation
                  : data?.reputation}
              </span>
            </div>
          </div>

          <div
            className={clsx(
              page == "compare" ? "xss:max-middeLaptop:hidden" : "",
              page == "compare" && pageNumber == 2 ? "flex-row-reverse" : "",
              "flex flex-row gap-3"
            )}
          >
            <div className="place-self-center">
              <Image
                src={
                  dataElementList
                    ? dataElementList.playerInfoRes.nationRes.ensign
                    : data
                    ? data.playerInfo.nationRes.ensign
                    : ""
                }
                width={27}
                height={24}
                alt={
                  dataElementList
                    ? dataElementList.playerInfoRes.nationRes.nationName
                    : data
                    ? data.playerInfo.nationRes.nationName
                    : ""
                }
                className=""
              ></Image>
            </div>
            <span>
              {dataElementList
                ? dataElementList.playerInfoRes.nationRes.nationName
                : data?.playerInfo?.nationRes.nationName}
            </span>
          </div>
        </div>

        <div
          className={clsx(
            page == "compare" ? "xss:max-mobile:hidden" : "",

            page == "compare" && pageNumber == 2 ? "flex-row-reverse" : "",
            "flex flex-row gap-3 flex-wrap xss:max-mobile:gap-[6px]"
          )}
        >
          <Upgrade setUpgrade={setUpgrade}></Upgrade>
          <Level setLevel={setLevel} page={page}></Level>
          <TeamColor setTeamColor={setTeamColor} page={page}></TeamColor>
        </div>
      </div>
    </div>
  );
}
