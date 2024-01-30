import FavoriteIcon from "@/components/favoritesIcon/FavoriteIcon";
import FavoriteIconShow from "@/components/favoritesIcon/FavoriteIconShow";
import {
  FAVORITE,
  getColorPosition,
  getLocalStorege,
  saveLocalStorage,
} from "@/lib/common";
import { PlayerSeasonRes } from "@/model/player/player";
import { clsx } from "clsx";
import Link from "next/link";
import { useState } from "react";
import { PlayerCommonInfo } from "../playerCommonInfo/playerCommonInfo";
import { PlayerPopoverInfo } from "../playerPopoverInfo/playerPopoverInfo";

type PlayerSeasonProps = {
  data: PlayerSeasonRes[];
};
export default function TablePlayer(props: PlayerSeasonProps) {
  const { data } = props;
  const [playerSeasonIDFocus, setPlayerSeasonIDFocus] = useState(
    data[0].playerSeasonID
  );
  const [isDetailStatus, setDetailStatus] = useState(true);
  const [playerIDHover, setPlayerIDHover] = useState("");

  const [hoverId, setHoverId] = useState("");
  const onMountEnter = (id: string) => {
    if (hoverId == id) return;
    setHoverId(id);
  };

  function onMountLeave(id: string) {
    if (hoverId == "") return;
    setHoverId("");
  }
  const updatePlayerSeasonID = (playerID: string) => {
    if (playerID === playerSeasonIDFocus) playerID = "focusHiddien";
    setPlayerSeasonIDFocus(playerID);
    setDetailStatus(!isDetailStatus);
    setPlayerIDHover("");
  };

  const [favoriteList, saveFavoriteList] = useState<Array<string>>(
    getLocalStorege(FAVORITE)
  );

  const saveFavorite = (value: string) => {
    var index = favoriteList.indexOf(value);
    if (index !== -1) {
      favoriteList.splice(index, 1);
    } else {
      favoriteList.push(value);
    }
    saveLocalStorage(FAVORITE, favoriteList);
    saveFavoriteList(favoriteList);
    console.log(favoriteList);
  };
  return (
    <div className="xss:max-mobileMiddle:w-full">
      <table
        aria-label="Bảng dữ liệu cầu thủ FC online"
        className="min-w-full  w-full  bg-black bg-opacity-60 table-auto 
        laptop:w-[1000px] 
        middeLaptop:max-laptop:w-[800px] 
        mobile:max-middeLaptop:w-[700px] mobileMiddle:max-mobile:w-[500px] 
        xss:max-mobileMiddle:w-full "
      >
        <thead role="rowgroup" className="">
          <tr
            role="row"
            className="group outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 
          data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 cursor-default bg-[#3b3b3e] text-[#a3a39f]"
          >
            <th className="w-10"></th>
            <th
              className="group px-3 h-10 text-left align-middle 
         whitespace-nowrap  font-semibold  text-sm"
            >
              Vị trí
            </th>
            <th
              className="group px-3 h-10 text-left align-middle 
         whitespace-nowrap  font-semibold  text-sm"
            ></th>

            <th
              className="group px-3 h-10 text-left align-middle 
         whitespace-nowrap  font-semibold  text-sm"
            >
              Tên cầu thủ
            </th>
            <th
              className="group px-3 h-10 text-center align-middle whitespace-nowrap
           font-semibold  text-sm"
            >
              Lương
            </th>
            <th
              className="group px-3 h-10 text-center align-middle whitespace-nowrap
          font-semibold  text-sm"
            >
              Ovr
            </th>
          </tr>
        </thead>
        <tbody className="  max-h-[1500px] hover:overflow-y-auto">
          {data.map((item, index) => (
            <tr
              aria-selected="true"
              data-key={item.playerSeasonID}
              aria-labelledby={item.playerSeasonID}
              key={index}
              className={clsx(
                playerSeasonIDFocus == item.playerSeasonID
                  ? "bg-bgWhite text-black"
                  : "text-white hover:bg-default/[.1]",
                " cursor-pointer group"
              )}
              onMouseMove={() => onMountEnter(item.playerSeasonID)}
              onMouseOut={() => onMountLeave(item.playerSeasonID)}
              onClick={() => setPlayerSeasonIDFocus(item.playerSeasonID)}
              // onClick={() => updatePlayerSeasonID(item.playerSeasonID)}
              // onMouseEnter={() => onMountEnter(item.playerSeasonID)}
              // onMouseLeave={() => onMountLeave(item.playerSeasonID)}
            >
              <td>
                <div className=" justify-center hidden group-hover:flex">
                  <FavoriteIcon
                    playerSeasonId={item.playerSeasonID}
                    isFavorite={favoriteList.includes(item.playerSeasonID)}
                    saveFavorite={saveFavorite}
                  />
                </div>
                <div className=" flex justify-center  group-hover:hidden">
                  <FavoriteIconShow
                    isFavorite={favoriteList.includes(item.playerSeasonID)}
                  ></FavoriteIconShow>
                </div>
              </td>
              <td className="ml-4">
                <div className=" font-semibold flex flex-row gap-1">
                  <span
                    className={clsx(
                      getColorPosition(item.playerMainPosition.split(":")[0]),
                      "font-extrabold"
                    )}
                  >
                    {"|"}
                  </span>
                  <span>{item.playerMainPosition.split(":")[0]}</span>
                </div>
              </td>
              <td className="flex flex-row gap-2">
                <Link
                  href={
                    "/du-lieu-cau-thu-fc-online/chi-tiet-cau-thu/" +
                    item.playerSeasonID
                  }
                  target="_blank"
                >
                  <PlayerPopoverInfo
                    avatar={item.avatar}
                    altAvatar={item.altAvatar}
                  />
                </Link>

                {/* 
                <div
                  className={clsx(
                    playerSeasonIDFocus == item.playerSeasonID
                      ? " visible"
                      : "invisible",
                    " h-2/4 justify-center"
                  )}
                >
                  <Button className=" bg-darkGray !text-green !py-[6px]">
                    <FontAwesomeIcon
                      width="17"
                      icon={faMagnifyingGlass}
                      className="font-bold"
                    />
                  </Button>
                </div> */}
              </td>
              <td className="">
                <Link
                  href={
                    "/du-lieu-cau-thu-fc-online/chi-tiet-cau-thu/" +
                    item.playerSeasonID
                  }
                  target="_blank"
                >
                  <PlayerCommonInfo
                    playerSeason={item}
                    playerSeasonIDFocus={playerSeasonIDFocus}
                    playerIDHover={playerIDHover}
                  ></PlayerCommonInfo>
                </Link>
              </td>
              <td data-selected="true" role="gridcell" className=" text-center">
                <span className="text-[15px] font-bold">{item.salary}</span>
              </td>
              <td data-selected="true" role="gridcell" className=" text-center">
                <span className="text-[15px] font-bold ">
                  {item.playerMainPosition.split(":")[1]}
                </span>
              </td>

              {/* <td
                data-selected="true"
                role="gridcell"
                className="first:rounded-l-lg last:rounded-r-lg text-center xss:max-mobile:hidden"
              >
                <span
                  className={clsx(
                    getColorClass(item.pac),
                    "text-[15px] font-bold"
                  )}
                >
                  {item.pac}
                </span>
              </td>
              <td
                data-selected="true"
                role="gridcell"
                className="first:rounded-l-lg last:rounded-r-lg text-center xss:max-mobile:hidden"
              >
                <span
                  className={clsx(
                    getColorClass(item.sho),
                    "text-[15px] font-bold"
                  )}
                >
                  {item.sho}
                </span>
              </td>
              <td
                data-selected="true"
                role="gridcell"
                className="first:rounded-l-lg last:rounded-r-lg text-center  xss:max-mobile:hidden"
              >
                <span
                  className={clsx(
                    getColorClass(item.pas),
                    "text-[15px] font-bold"
                  )}
                >
                  {item.pas}
                </span>
              </td>
              <td
                data-selected="true"
                role="gridcell"
                className="mobile:max-laptop:rounded-r-lg text-center xss:max-mobile:hidden"
              >
                <span
                  className={clsx(
                    getColorClass(item.dri),
                    "text-[15px] font-bold"
                  )}
                >
                  {item.dri}
                </span>
              </td>
              <td
                data-selected="true"
                role="gridcell"
                className=" text-center xss:max-laptop:hidden"
              >
                <span
                  className={clsx(
                    getColorClass(item.def),
                    "text-[15px] font-bold"
                  )}
                >
                  {item.def}
                </span>
              </td>
              <td
                data-selected="true"
                role="gridcell"
                className=" first:rounded-l-lg last:rounded-r-lg text-center xss:max-laptop:hidden"
              >
                <span
                  className={clsx(
                    getColorClass(item.phy),
                    "text-[15px] font-bold"
                  )}
                >
                  {item.phy}
                </span>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
