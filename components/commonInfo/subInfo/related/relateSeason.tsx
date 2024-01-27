import { PlayerSeasonRes } from "@/model/player/player";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Listbox, ListboxItem, ScrollShadow } from "@nextui-org/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import style from "../../../../styles/player.module.css";
import Favorite from "../../favorite/favorite";
import {
  getColorBgPosition,
  getColorBorderPosition,
  getColorPosition,
} from "@/lib/common";
import StarSkill from "@/components/starSkill/StarSkill";

type RelateSeason = {
  data: Array<PlayerSeasonRes>;
};
export function RelateSeason(props: RelateSeason) {
  const { data } = props;

  return (
    <Listbox variant="flat" aria-label="Danh sách các mùa của " className="">
      {data?.map((d) => (
        <ListboxItem
          key={d.playerSeasonID}
          startContent={
            <div className="flex flex-row gap-3">
              <div className="flex flex-col justify-center">
                <div>
                  <span
                    className={clsx(
                      "px-[3px] font-bold text-[14px] border-l-4",
                      getColorBorderPosition(d.playerMainPosition)
                    )}
                  >
                    {d.playerMainPosition}
                  </span>
                </div>
              </div>
              <Link
                href={"/du-lieu-cau-thu-fc-online/chi-tiet-cau-thu/".concat(
                  d.playerSeasonID
                )}
              >
                {d.avatar && (
                  <Image
                    src={d.avatar}
                    width={50}
                    height={50}
                    alt={d.altAvatar}
                    className=""
                  ></Image>
                )}
              </Link>
            </div>
          }
          textValue="Chi tiết cầu thủ fc online"
          className="py-3 border-b-1 !rounded-none"
          variant="light"
        >
          <div className="flex flex-row gap-8 justify-between text-textStatic font-sans font-medium">
            <Link
              href={"/du-lieu-cau-thu-fc-online/chi-tiet-cau-thu/".concat(
                d.playerSeasonID
              )}
            >
              <div className="flex flex-row gap-8">
                <div className="flex flex-col gap-3 ml-2">
                  <div className="flex flex-row gap-2">
                    {d.seasonRes.logo && (
                      <Image
                        src={d.seasonRes.logo}
                        width={24}
                        height={24}
                        alt={d.seasonRes.altLogoSeason}
                      ></Image>
                    )}

                    <span>{d.seasonRes.fullName}</span>
                  </div>
                  <div className="flex flex-row gap-2">
                    <StarSkill numberSkill={Number(d.skill)}></StarSkill>
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex flex-row justify-between gap-40 xss:max-mobile:gap-10">
              <div className={clsx(style.hexagon)}>
                <span>{d.salary}</span>
              </div>

              <div className="flex flex-col justify-center">
                <span className=" font-semibold text-[16px]"> {d.ovr}</span>
              </div>

              <div className="flex flex-col gap-2 self-center">
                <Favorite playerSeasonID={d.playerSeasonID} />
              </div>
            </div>
          </div>
        </ListboxItem>
      ))}
    </Listbox>
  );
}
