import Level from "@/components/commonInfo/dropdown/level";
import TeamColor from "@/components/commonInfo/dropdown/teamColor";
import Upgrade from "@/components/commonInfo/dropdown/upgrade";
import FavoriteFoot from "@/components/commonInfo/foot/FavoriteFoot";
import StarSkill from "@/components/starSkill/StarSkill";
import { PlayerSeasonDetailRes, PlayerSeasonRes } from "@/model/player/player";
import { clsx } from "clsx";
import { PlayerCommonInfo } from "../PlayerCommonInfo";
import { PlayerDetailAvatar } from "../PlayerDetailAvatar";

type PlayerDetailHeader = {
  data?: PlayerSeasonDetailRes;
  upgrade: number;
  level: number;
  teamColor: number;
  page?: string;
  pageNumber?: number;
  setUpgrade: (data: number) => void;
  setLevel: (data: number) => void;
  setTeamColor: (data: number) => void;
  classNames: string;
  classNamesInfo?: string;
  dataElementList?: PlayerSeasonRes | undefined;
};
export default function PlayerDetailHeader(props: PlayerDetailHeader) {
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
    classNames,
    classNamesInfo,
    dataElementList,
  } = props;
  return (
    <div>
      <div className={classNames}>
        <PlayerDetailAvatar
          data={data}
          upgrade={upgrade}
          level={level}
          teamColor={teamColor}
          page={page}
          dataElementList={dataElementList}
        ></PlayerDetailAvatar>
        <PlayerCommonInfo
          data={data}
          setUpgrade={setUpgrade}
          setLevel={setLevel}
          setTeamColor={setTeamColor}
          upgrade={upgrade}
          level={level}
          teamColor={teamColor}
          page={page}
          pageNumber={pageNumber}
          className={classNamesInfo}
          dataElementList={dataElementList}
        ></PlayerCommonInfo>
      </div>

      <div
        className={clsx(
          page == "compare" ? "xss:max-mobileMiddle:flex " : "",
          "hidden"
        )}
      >
        <div
          className={clsx(
            page == "compare" && pageNumber == 2 ? "flex-row-reverse" : "",
            "flex flex-row gap-3 text-[#bbbbbb] text-sm flex-wrap xss:max-mobile:gap-[5px] xss:max-mobileMiddle:hidden"
          )}
        >
          <span className={clsx(page == "compare" ? "hidden" : "")}>
            {dataElementList
              ? dataElementList.playerInfoRes.birthDay
              : data?.playerInfo?.birthDay}
          </span>
          <span className="xss:max-mobile:hidden">|</span>
          <span>
            {dataElementList ? dataElementList.height : data?.height} cm
          </span>
          <span className="xss:max-mobile:hidden">|</span>
          <span>
            {dataElementList ? dataElementList.weight : data?.weight} kg
          </span>
          <span className="xss:max-mobile:hidden">|</span>

          <div className="flex flex-row max-w-[26px] max-h-[26px]">
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

          <div className={clsx("flex flex-row gap-2")}>
            <span className="xss:max-mobile:hidden">|</span>
            <span>
              {dataElementList ? dataElementList.fitness : data?.fitness}
            </span>
            <span className="xss:max-mobile:hidden">|</span>
            <div className={clsx(page == "compare" ? "hidden" : "")}>
              <StarSkill
                numberSkill={Number(
                  dataElementList ? dataElementList.skill : data?.skill
                )}
              ></StarSkill>
            </div>

            <span className="xss:max-mobile:hidden">|</span>
            <span>
              {dataElementList ? dataElementList.reputation : data?.reputation}
            </span>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          page == "compare"
            ? "xss:max-mobile:flex xss:max-mobile:mt-1 flex-wrap"
            : "",
          page == "compare" && pageNumber == 2 ? "flex-row-reverse" : "",
          "flex flex-row gap-3 flex-wrap xss:max-mobile:gap-[6px]",
          "hidden"
        )}
      >
        <Upgrade setUpgrade={setUpgrade}></Upgrade>
        <Level setLevel={setLevel} page={page}></Level>
        <TeamColor setTeamColor={setTeamColor} page={page}></TeamColor>
      </div>
    </div>
  );
}
