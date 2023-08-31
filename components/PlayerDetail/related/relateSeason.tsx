import { PlayerSeasonRes } from "@/model/player/player";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScrollShadow, Listbox, ListboxItem, Button } from "@nextui-org/react";
import Image from "next/image";
import style from "../../../styles/player.module.css";
import clsx from "clsx";
import Favorite from "../favorite/favorite";
import Link from "next/link";
import { getLocalStorege, FAVORITE, saveLocalStorage } from "@/lib/common";
import { useEffect } from "react";

type RelateSeason = {
  data: Array<PlayerSeasonRes>;
};
export function RelateSeason(props: RelateSeason) {
  const { data } = props;
  let favoriteList: Array<string> = getLocalStorege(FAVORITE);
  const saveFavorite = (value: string) => {
    var index = favoriteList.indexOf(value);
    if (index !== -1) {
      favoriteList.splice(index, 1);
    } else {
      favoriteList.push(value);
      saveLocalStorage(FAVORITE, favoriteList);
    }
  };
  useEffect(() => {}, [favoriteList]);
  return (
    <ScrollShadow
      hideScrollBar
      className="w-[489px] h-[400px]  xss:max-mobile:w-full"
    >
      <Listbox variant="flat" aria-label="Danh sách các mùa của ">
        {data.map((d) => (
          <ListboxItem
            key={d.playerSeasonID}
            startContent={
              <Link
                href={"/du-lieu-cau-thu-fc-online/chi-tiet-cau-thu/".concat(
                  d.playerSeasonID
                )}
              >
                <Image
                  src={d.avatar}
                  width={50}
                  height={50}
                  alt={d.altAvatar}
                  className=""
                ></Image>
              </Link>
            }
            className="py-3"
            variant="light"
          >
            <div className="flex flex-row gap-8 justify-between">
              <Link
                href={"/du-lieu-cau-thu-fc-online/chi-tiet-cau-thu/".concat(
                  d.playerSeasonID
                )}
              >
                <div className="flex flex-row gap-8">
                  <div className="flex flex-col gap-3 ml-2">
                    <div className="flex flex-row gap-2">
                      <Image
                        src={d.seasonRes.logo}
                        width={24}
                        height={24}
                        alt={d.seasonRes.altLogoSeason}
                      ></Image>
                      <span>{d.seasonRes.fullName}</span>
                    </div>
                    <div className="flex flex-row gap-2">
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
                          style={{ color: "#fff700" }}
                          width={12}
                        />
                      </div>
                      <div className="text-[0.8em]">
                        <span className="py-[1px] px-[3px] bg-[#af1616] rounded-[2px] font-bold ">
                          {d.playerPosition}
                        </span>
                        <span> {d.ovr}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="flex flex-row justify-between gap-40 xss:max-mobile:gap-10">
                <div className={clsx(style.hexagon)}>
                  <span>{d.salary}</span>
                </div>
                <div
                  className="flex flex-col gap-2 self-center"
                  onClick={() => saveFavorite(d.playerSeasonID)}
                >
                  <Favorite />
                </div>
              </div>
            </div>
          </ListboxItem>
        ))}
      </Listbox>
    </ScrollShadow>
  );
}
