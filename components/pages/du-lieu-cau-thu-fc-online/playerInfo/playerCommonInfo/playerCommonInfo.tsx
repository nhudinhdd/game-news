import { PlayerSeasonRes } from "@/model/player/player";
import { faMagnifyingGlass, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { PlayerPopoverInfo } from "../playerPopoverInfo/playerPopoverInfo";
import Link from "next/link";
import clsx from "clsx";
import FavoriteFoot from "@/components/commonInfo/foot/FavoriteFoot";
import { getColorPosition } from "@/lib/common";
// import style from "../../../styles/playerInfo.scss";
interface PlayerCommonInfo {
  playerSeason: PlayerSeasonRes;
  isShowFavorite?: boolean;
  playerSeasonIDFocus: string;
  playerIDHover: string;
}

export function PlayerCommonInfo(props: PlayerCommonInfo) {
  const { playerSeason, playerSeasonIDFocus, playerIDHover } = props;

  const herfDetail = `/du-lieu-cau-thu-fc-online/chi-tiet-cau-thu/${playerSeason.playerSeasonID}`;
  const getStatusSearchDetail = (
    playerSeasonIDFocus: string,
    playerIDHover: string,
    playerSeasonID: string
  ) => {
    let status = "";
    if (playerSeasonIDFocus == "focusHiddien") {
      if (playerIDHover === playerSeasonID) {
        status = "block";
      } else {
        status = "hidden";
      }
    } else {
      if (playerSeasonIDFocus === playerSeasonID) {
        status = "block";
      } else {
        status = "hidden";
      }
    }
    return status;
  };
  return (
    <div className="flex flex-row ml-1">
      <div className="grow flex flex-row">
        <div className="pl-4 place-self-center flex flex-col gap-[4px]">
          <div className="flex flex-row justify-start gap-3 items-center">
            <div className="">
              <Image
                src={playerSeason?.seasonRes.logo}
                alt={playerSeason?.seasonRes.altLogoSeason}
                width={18}
                height={14}
              ></Image>
            </div>
            <span className="">{playerSeason.playerInfoRes?.fullName}</span>
          </div>
          {/* <div className="flex flex-row gap-3 items-center">
            {Object.entries(playerSeason.positionOvr).map(([key, value]) => (
              <div className="flex flex-row gap-2" key={value}>
                <span className={clsx(getColorPosition(key), "postion")}>
                  {key}
                </span>
                <span className="text-[15px] font-medium">{value}</span>
              </div>
            ))}
            <span>|</span>
            <div className="flex flex-row gap-2">
              <FavoriteFoot
                favoriteFoot={playerSeason.favoriteFoot}
                leftFoot={Number(playerSeason.leftFoot)}
                rightFoot={Number(playerSeason.rightFoot)}
              ></FavoriteFoot>
            </div>
          </div> */}
        </div>
        {/* <div
          className={clsx(
            getStatusSearchDetail(
              playerSeasonIDFocus,
              playerIDHover,
              playerSeason.playerSeasonID
            ),
            "place-self-center flex group/detail grow justify-end w-20"
          )}
          id={playerSeason.playerSeasonID}
        >
          <div className="self-center">
            <Link
              href={{
                pathname: herfDetail,
              }}
            >
              <Button
                isIconOnly
                color="primary"
                aria-label="Tìm kiếm cầu thủ"
                className=" self-center"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="h-1/2" />
              </Button>
            </Link>
          </div>
        </div>
        <div
          className={clsx(
            playerSeasonIDFocus == "focusHiddien"
              ? "hidden"
              : playerIDHover == playerSeason.playerSeasonID
              ? "block"
              : "hidden",
            "flex place-self-center  group/detail grow justify-end w-20"
          )}
          id={playerSeason.playerSeasonID.concat("vs")}
        >
          <div className="self-center group-hover/edit:text-gray-700 ">
            <Link
              href={`/du-lieu-cau-thu-fc-online/so-sanh-cau-thu/${playerSeasonIDFocus}-vs-${playerIDHover}`}
            >
              <Button
                isIconOnly
                color="primary"
                aria-label="So sánh cầu thủ"
                className=" self-center"
              >
                VS
              </Button>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
}
