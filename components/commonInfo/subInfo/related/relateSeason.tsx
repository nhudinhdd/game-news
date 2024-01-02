import { PlayerSeasonRes } from "@/model/player/player";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Listbox, ListboxItem, ScrollShadow } from "@nextui-org/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import style from "../../../../styles/player.module.css";
import Favorite from "../../favorite/favorite";
import { getColorBgPosition, getColorPosition } from "@/lib/common";

type RelateSeason = {
  data: Array<PlayerSeasonRes>;
};
export function RelateSeason(props: RelateSeason) {
  const { data } = props;

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
            textValue="Chi tiết cầu thủ fc online"
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
                        <span
                          className={clsx(
                            getColorBgPosition(d.playerMainPosition),
                            "py-[1px] px-[3px] rounded-[2px] font-bold "
                          )}
                        >
                          {d.playerMainPosition}
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
                <div className="flex flex-col gap-2 self-center">
                  <Favorite playerSeasonID={d.playerSeasonID} />
                </div>
              </div>
            </div>
          </ListboxItem>
        ))}
      </Listbox>
    </ScrollShadow>
  );
}
