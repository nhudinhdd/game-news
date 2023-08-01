import { PlayerSeasonRes } from "@/model/player/player";
import { faMagnifyingGlass, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { PlayerPopoverInfo } from "../playerPopoverInfo/playerPopoverInfo";
// import style from "../../../styles/playerInfo.scss";
interface PlayerCommonInfo {
  playerSeason: PlayerSeasonRes;
  isShowFavorite?: boolean;
  playerSeasonIDFocus: string;
}

export function PlayerCommonInfo(props: PlayerCommonInfo) {
  const { playerSeason, isShowFavorite = false, playerSeasonIDFocus } = props;
  console.log(playerSeasonIDFocus);

  return (
    <div className="flex flex-row">
      <PlayerPopoverInfo
        avatar={playerSeason.avatar}
        altAvatar={playerSeason.altAvatar}
      />
      <div className="grow flex flex-row justify-between">
        <div className="pl-4">
          <div className="flex flex-row justify-start gap-4 items-center">
            <div className="">
              <Image
                src={playerSeason?.seasonRes.logo}
                alt={playerSeason?.seasonRes.altLogoSeason}
                width={18}
                height={14}
              ></Image>
            </div>
            <span>
              {playerSeason.playerInfoRes?.firstName}{" "}
              {playerSeason.playerInfoRes?.lastName}
            </span>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <div className="flex flex-row gap-2">
              <span className="text-red-700">CF</span>{" "}
              <span>{playerSeason.ovr}</span>
            </div>
            <span>|</span>
            <div className="flex flex-row gap-2">
              <div className="flex flex-row gap-1">
                <div className="relative flex justify-center">
                  <span className="z-10 absolute">5</span>
                  <Image
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAABbAQMAAAA2mCUGAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA9JREFUeNpjYBgFo2CAAAACfQAB7PAeSwAAAABJRU5ErkJggg=="
                    alt="Picture of the author"
                    width={16}
                    height={15}
                    className="bg-[url('/assets/4364840.png')] bg-cover"
                  />
                </div>
                <div className="relative flex justify-center">
                  <span className="z-10 absolute">5</span>
                  <Image
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAABbAQMAAAA2mCUGAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA9JREFUeNpjYBgFo2CAAAACfQAB7PAeSwAAAABJRU5ErkJggg=="
                    alt="Picture of the author"
                    width={16}
                    height={14}
                    className="bg-[url('/assets/4364840.png')] bg-cover bg-bottom"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-row gap-2 items-center">
          <span>{playerSeason?.height}cm</span>
          <span>|</span>
          <span>{playerSeason?.weight}kg</span>
          <span>|</span>
          <span>{playerSeason?.fitness.replace("Trung bình", "TB")}</span>
     
        </div> */}
        </div>

        <div
          className="flex invisible absolute right-0 top-1/2 bottom-1/2 z-20 pr-4"
          id={playerSeason.playerSeasonID}
        >
          <div className="self-center">
            <Button
              isIconOnly
              color="primary"
              aria-label="Tìm kiếm cầu thủ"
              className=" self-center"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="h-1/2" />
            </Button>
          </div>
        </div>
        <div
          className="flex group/edit invisible  absolute right-0 top-1/2 bottom-1/2 pr-4 group-hover/item:visible z-10"
          id={playerSeason.playerSeasonID.concat("vs")}
        >
          <div className="self-center group-hover/edit:text-gray-700 ">
            <Button
              isIconOnly
              color="primary"
              aria-label="Tìm kiếm cầu thủ"
              className=" self-center"
            >
              VS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
