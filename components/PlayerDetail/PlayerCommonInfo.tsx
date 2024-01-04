import { PlayerSeasonDetailRes } from "@/model/player/player";
import clsx from "clsx";
import Image from "next/image";
import Level from "../commonInfo/dropdown/level";
import TeamColor from "../commonInfo/dropdown/teamColor";
import Upgrade from "../commonInfo/dropdown/upgrade";
import Favorite from "../commonInfo/favorite/favorite";
import StarSkill from "../starSkill/StarSkill";
import FavoriteFoot from "../commonInfo/foot/FavoriteFoot";
import { getColorPosition } from "@/lib/common";
import { ScrollShadow } from "@nextui-org/react";

type PlayerCommonInfo = {
  data: PlayerSeasonDetailRes;
  setUpgrade: (data: number) => void;
  setLevel: (data: number) => void;
  setTeamColor: (data: number) => void;
  upgrade: number;
  level: number;
  teamColor: number;
  page?: string;
  pageNumber?: number;
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
  } = props;
  return (
    <div
      className={clsx(
        page == "compare" ? "pt-3" : "pt-8",

        "playerCommon flex flex-col  gap-3  xss:max-mobile:pt-4 pr-1 xss:max-mobileMiddle:pr-0"
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
            "flex flex-row gap-2 xss:max-mobile:gap-[2.5px]"
          )}
        >
          <div className="place-self-center">
            <Image
              src={data.season?.logo}
              width={27}
              height={24}
              alt={data.season?.altLogoSeason}
              className=""
            ></Image>
          </div>
          <div className="mobile:text-xl  font-medium text-center xss:max-mobile:text-sm">
            {data.playerInfo?.firstName
              .concat(" ")
              .concat(data.playerInfo?.lastName)}
          </div>
        </div>
      </div>
      <div
        className={clsx(
          page == "compare" && pageNumber == 2 ? "flex-row-reverse" : "",
          "text-2xl flex flex-row gap-4 flex-wrap"
        )}
      >
        <div
          className={clsx(
            "flex flex-row gap-2 mr-2",
            page == "compare" ? "flex" : "hidden"
          )}
        >
          <span className={clsx(getColorPosition(data.playerMainPosition))}>
            {data.playerMainPosition}
          </span>
          <span className="">
            {Number(data.ovr) + (upgrade - 1) + (level - 1) + (teamColor - 1)}
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
            {data.positionOvr &&
              Object.entries(data.positionOvr).map(([key, value]) => (
                <div className="flex flex-row gap-2 mr-2" key={value}>
                  <span className={clsx(getColorPosition(key))}>{key}</span>
                  <span className="">
                    {Number(value) +
                      (upgrade - 1) +
                      (level - 1) +
                      (teamColor - 1)}
                  </span>
                </div>
              ))}
          </div>
        </ScrollShadow>

        <div>
          <Favorite playerSeasonID={data.playerSeasonID} />
        </div>
      </div>
      <div className={clsx("flex flex-col gap-4")}>
        <div
          className={clsx(
            page == "compare" ? "xss:max-mobileMiddle:hidden" : ""
          )}
        >
          <div
            className={clsx(
              page == "compare" && pageNumber == 2 ? "flex-row-reverse" : "",
              "flex flex-row gap-3 text-[#bbbbbb] text-sm flex-wrap xss:max-mobile:gap-[8px]"
            )}
          >
            <span className={clsx(page == "compare" ? "hidden" : "")}>
              {data.playerInfo?.birthDay}
            </span>
            <span
              className={clsx(
                page == "compare" ? "hidden" : "xss:max-mobile:hidden"
              )}
            >
              |
            </span>
            <span>{data.height} cm</span>
            <span
              className={clsx(
                page == "compare" ? "hidden" : "xss:max-mobile:hidden"
              )}
            >
              |
            </span>
            <span>{data.weight} kg</span>
            <span
              className={clsx(
                page == "compare" ? "hidden" : "xss:max-mobile:hidden"
              )}
            >
              |
            </span>

            <div className="flex flex-row gap-2 max-w-[30px] max-h-[30px]">
              <FavoriteFoot
                favoriteFoot={data.favoriteFoot}
                leftFoot={Number(data.leftFoot)}
                rightFoot={Number(data.rightFoot)}
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
              <span>{data.fitness}</span>
              <span
                className={clsx(
                  page == "compare" ? "hidden" : "xss:max-mobile:hidden"
                )}
              >
                |
              </span>
              <div className={clsx(page == "compare" ? "hidden" : "")}>
                <StarSkill numberSkill={Number(data.skill)}></StarSkill>
              </div>

              <span
                className={clsx(
                  page == "compare" ? "hidden" : "xss:max-mobile:hidden"
                )}
              >
                |
              </span>
              <span>{data.reputation}</span>
            </div>
          </div>

          <div
            className={clsx(
              page == "compare" ? "xss:max-mobile:hidden" : "",
              page == "compare" && pageNumber == 2 ? "flex-row-reverse" : "",
              "flex flex-row gap-3"
            )}
          >
            <div className="place-self-center">
              <Image
                src={data.playerInfo?.nationRes.ensign}
                width={27}
                height={24}
                alt={data.playerInfo?.nationRes.altEnsign}
                className=""
              ></Image>
            </div>
            <span>{data.playerInfo?.nationRes.nationName}</span>
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
