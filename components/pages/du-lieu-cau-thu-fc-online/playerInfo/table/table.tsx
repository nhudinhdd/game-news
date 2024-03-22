import FavoriteIcon from "@/components/favoritesIcon/FavoriteIcon";
import FavoriteIconShow from "@/components/favoritesIcon/FavoriteIconShow";
import { FAVORITE, getColorPosition, saveLocalStorage } from "@/lib/common";
import { PlayerSeasonRes } from "@/model/player/player";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useReducer, useState } from "react";
import { PlayerCommonInfo } from "../playerCommonInfo/playerCommonInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/buttons/Button";

type PlayerSeasonProps = {
  data: PlayerSeasonRes[];
  favoriteList: Array<string>;
  saveFavorite?: (value: string) => void;
  limit?: number;
  className?: string;
  setDataPlayerForcus?: (playerSeasonId: string) => void;
  page?: string;
  fieldCard?: any;
  setFieldCard?: any;
  pos?: any;
  onClose?: () => void;
  setLevel?: (value: number) => void;
  selectedPlayerList?: any;
};
export default function TablePlayer(props: PlayerSeasonProps) {
  const {
    data,
    favoriteList,
    saveFavorite,
    limit,
    className,
    setDataPlayerForcus,
    page,
    fieldCard,
    setFieldCard,
    pos,
    onClose,
    setLevel,
    selectedPlayerList
  } = props;
  let dataFinal = limit ? data.slice(0, limit) : data;

  const [playerSeasonIDFocus, setPlayerSeasonIDFocus] = useState(
    !dataFinal || !dataFinal.length ? "" : dataFinal[0].playerSeasonID
  );

  const changePlayer = (player: any, item: any) => {
    const props = player["typePlayer"];
    const arrType = fieldCard[props];
    const eleIndex = arrType.findIndex(
      (ele: { pos: string }) => ele["pos"] === player["pos"]
    );
    arrType[eleIndex]["info"] = item;
    setFieldCard({ ...fieldCard, [props]: arrType });
    if (setLevel) {
      setLevel(1);
    }
    if (onClose) {
      onClose();
    }
    // saveLocalStorage("formationField", fieldCard)
  };

  useEffect(() => {
    console.log("adadsad==========");

    setDataPlayerForcus ? setDataPlayerForcus(playerSeasonIDFocus) : null;
  }, [playerSeasonIDFocus, setDataPlayerForcus]);

  useEffect(() => {
    localStorage.setItem("formationData", JSON.stringify(fieldCard));
  }, [fieldCard]);

  const checkPlayer = (selectedList: any, playerInfo: any) => {
    return selectedList.find((item: any) => item.playerInfoRes.playerID === playerInfo.playerInfoRes.playerID)
  }

  return (
    <div className="xss:max-mobileMiddle:w-full ">
      <table
        aria-label="Bảng dữ liệu cầu thủ FC online"
        className={clsx(
          "min-w-full  w-full   table-auto   laptop:w-[1000px]  middeLaptop:max-laptop:w-[800px]  mobile:max-middeLaptop:w-[700px] mobileMiddle:max-mobile:w-[500px]  xss:max-mobileMiddle:w-full ",
          className,
          className ? "" : "bg-black bg-opacity-60  "
        )}
      >
        <thead role="rowgroup" className="">
          <tr
            role="row"
            className="group outline-none data-[focus-visible=true]:z-0 data-[focus-visible=true]:outline-2 
          data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 cursor-default bg-[#3b3b3e] text-[#a3a39f]"
          >
            <th className="w-10 xss:max-mobileMiddle:w-6"></th>
            <th
              className="group px-3 h-10 text-left align-middle 
         whitespace-nowrap  font-semibold  text-sm w-16  xss:max-mobileMiddle:w-8 xss:max-mobileMiddle:px-0"
            >
              Vị trí
            </th>
            <th
              className="group px-3 h-10 text-left align-middle 
         whitespace-nowrap  font-semibold  text-sm xss:max-mobileMiddle:w-6"
            ></th>
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
           font-semibold  text-sm  xss:max-mobileMiddle:px-1 "
            >
              Lương
            </th>
            <th
              className="group px-3 h-10 text-center align-middle whitespace-nowrap
          font-semibold  text-sm  xss:max-mobileMiddle:px-1"
            >
              Ovr
            </th>
            {page === "formation" && <th></th>}
          </tr>
        </thead>
        <tbody className="  max-h-[1500px] hover:overflow-y-auto">
          {dataFinal.map((item, index) => (
            <tr
              aria-selected="true"
              data-key={item.playerSeasonID}
              aria-labelledby={item.playerSeasonID}
              key={index}
              className={clsx(
                playerSeasonIDFocus == item.playerSeasonID
                  ? "bg-bgWhite text-black"
                  : "text-white hover:bg-default/[.1]",
                "  group"
              )}
            >
              <td>
                <div className=" justify-center hidden group-hover:flex cursor-pointer">
                  <FavoriteIcon
                    playerSeasonId={item.playerSeasonID}
                    isFavorite={
                      favoriteList && favoriteList.includes(item.playerSeasonID)
                    }
                    saveFavorite={saveFavorite}
                  />
                </div>
                <div className=" flex justify-center  group-hover:hidden cursor-pointer">
                  <FavoriteIconShow
                    isFavorite={
                      favoriteList && favoriteList.includes(item.playerSeasonID)
                    }
                  ></FavoriteIconShow>
                </div>
              </td>
              <td
                className="ml-4"
                onClick={() => setPlayerSeasonIDFocus(item.playerSeasonID)}
              >
                <div className=" font-semibold flex flex-row gap-1">
                  <span
                    className={clsx(
                      getColorPosition(item.playerMainPosition.split(":")[0]),
                      "font-extrabold"
                    )}
                  >
                    {"|"}
                  </span>
                  <span className="xss:max-mobileMiddle:text-[12px]">
                    {item.playerMainPosition.split(":")[0]}
                  </span>
                </div>
              </td>
              <td>
                <div
                  className="invisible cursor-pointer group-hover:visible bg-green text-black font-extrabold rounded-[4px] w-[28px] 
                h-[28px] xss:max-mobileMiddle:w-[20px] xss:max-mobileMiddle:h-[20px] relative"
                >
                  {playerSeasonIDFocus != item.playerSeasonID && (
                    <Link
                      href={
                        "/du-lieu-cau-thu-fc-online/so-sanh-cau-thu/" +
                        playerSeasonIDFocus +
                        "-vs-" +
                        item.playerSeasonID
                      }
                    >
                      <div className="flex flex-col justify-center  text-center h-full w-full xss:max-mobileMiddle:text-[12px]  z-35">
                        VS
                      </div>
                      {/* <div className="absolute left-1/3 z-20">
                      <FontAwesomeIcon width="18" icon={faMagnifyingGlass} />
                    </div> */}
                    </Link>
                  )}

                  {playerSeasonIDFocus == item.playerSeasonID && (
                    <Link
                      href={
                        "/du-lieu-cau-thu-fc-online/chi-tiet-cau-thu/" +
                        playerSeasonIDFocus
                      }
                    >
                      <div className="flex fle-col justify-center py-1">
                        <FontAwesomeIcon width="18" icon={faMagnifyingGlass} />
                      </div>
                    </Link>
                  )}
                </div>
              </td>
              <td
                className="flex flex-row gap-2"
                onClick={() => setPlayerSeasonIDFocus(item.playerSeasonID)}
              >
                {/* <Link
                  href={
                    "/du-lieu-cau-thu-fc-online/chi-tiet-cau-thu/" +
                    item.playerSeasonID
                  }
                  className="cursor-pointer"
                > */}
                <Image
                  src={item.avatar}
                  alt={
                    item.playerInfoRes?.fullName +
                    "mùa giải " +
                    item.seasonRes.fullName +
                    " FC Online | Fifa online 4"
                  }
                  width={45}
                  height={45}
                  style={{ width: "45px", height: "45px" }}
                  // className="w-full h-auto"
                ></Image>
                {/* </Link> */}
              </td>
              <td
                className=""
                onClick={() => setPlayerSeasonIDFocus(item.playerSeasonID)}
              >
                <PlayerCommonInfo playerSeason={item}></PlayerCommonInfo>
              </td>
              <td
                data-selected="true"
                role="gridcell"
                className=" text-center "
                onClick={() => setPlayerSeasonIDFocus(item.playerSeasonID)}
              >
                <span className="text-[15px] font-bold xss:max-mobileMiddle:text-[13px]">
                  {item.salary}
                </span>
              </td>
              <td
                data-selected="true"
                role="gridcell"
                className=" text-center"
                onClick={() => setPlayerSeasonIDFocus(item.playerSeasonID)}
              >
                <span className="text-[15px] font-bold xss:max-mobileMiddle:text-[13px]">
                  {item.ovr}
                </span>
              </td>
              {page === "formation" && !checkPlayer(selectedPlayerList, item) ? (
                <td
                  data-selected="true"
                  role="gridcell"
                  className=" text-center"
                  onClick={() => setPlayerSeasonIDFocus(item.playerSeasonID)}
                >
                  <Button
                    onClick={() => changePlayer(pos, item)}
                    className="bg-green-500"
                  >
                    Add
                  </Button>
                </td>
              ) : (
                ""
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
