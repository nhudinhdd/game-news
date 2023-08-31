import { PlayerSeasonDetailRes } from "@/model/player/player";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Level from "./commonInfo/dropdown/level";
import TeamColor from "./commonInfo/dropdown/teamColor";
import Upgrade from "./commonInfo/dropdown/upgrade";
import Favorite from "./favorite/favorite";

type PlayerCommonInfo = {
  data: PlayerSeasonDetailRes;
  setUpgrade: (data: number) => void;
  setLevel: (data: number) => void;
  setTeamColor: (data: number) => void;
  upgrade: number;
  level: number;
  teamColor: number;
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
  } = props;
  return (
    <div className="playerCommon flex flex-col pt-8 gap-3  xss:max-mobile:pt-4 pr-1">
      <div className="flex flex-row gap-2 justify-between">
        <div className="flex flex-row gap-2 xss:max-mobile:gap-[2.5px]">
          <div className="place-self-center">
            <Image
              src={data.season.logo}
              width={27}
              height={24}
              alt={data.season.altLogoSeason}
              className=""
            ></Image>
          </div>
          <div className="text-xl  font-medium text-center">
            {data.playerInfo.firstName
              .concat(" ")
              .concat(data.playerInfo.lastName)}
          </div>
        </div>

        <div className=" xss:max-mobile:hidden">
          <Favorite />
        </div>
      </div>
      <div className="text-2xl flex flex-row gap-4">
        <div className="text-2xl flex flex-row gap-2">
          <span className="text-red-500">{data.playerPosition}</span>
          <span>
            {data.ovr + (upgrade - 1) + (level - 1) + (teamColor - 1)}
          </span>
        </div>

        <div className=" mobile:hidden">
          <Favorite />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-3 text-[#bbbbbb] text-sm flex-wrap xss:max-mobile:gap-[8px]">
          <span>{data.playerInfo.birthDay}</span>
          <span className="xss:max-mobile:hidden">|</span>
          <span>{data.height} cm</span>
          <span className="xss:max-mobile:hidden">|</span>
          <span>{data.weight} kg</span>
          <span className="xss:max-mobile:hidden">|</span>
          <span>{data.fitness}</span>
          <div className="flex flex-row">
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#fff700" }}
              width={12}
            />
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#fff700" }}
              width={12}
            />
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#fff700" }}
              width={12}
            />
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#fff700" }}
              width={12}
            />
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#bbbbbb" }}
              width={12}
            />
          </div>

          <span className="xss:max-mobile:hidden">|</span>
          <span>
            {data.leftFoot}-{data.rightFoot}
          </span>
          <span className="xss:max-mobile:hidden">|</span>
          <span>{data.reputation}</span>
        </div>
        <div className="flex flex-row gap-3">
          <div className="place-self-center">
            <Image
              src={data.playerInfo.nationRes.ensign}
              width={27}
              height={24}
              alt={data.playerInfo.nationRes.altEnsign}
              className=""
            ></Image>
          </div>
          <span>{data.playerInfo.nationRes.nationName}</span>
        </div>
        <div className="flex flex-row gap-3 flex-wrap xss:max-mobile:gap-[6px]">
          <Upgrade setUpgrade={setUpgrade}></Upgrade>
          <Level setLevel={setLevel}></Level>
          <TeamColor setTeamColor={setTeamColor}></TeamColor>
        </div>
      </div>
    </div>
  );
}
