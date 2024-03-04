import { getColorBorderPosition } from "@/lib/common";
import { PlayerSeasonRes } from "@/model/player/player";
import { Listbox, ListboxItem } from "@nextui-org/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Favorite from "../../favorite/favorite";
import style from "@/styles/player.module.css";
type RelateSeason = {
  data: Array<PlayerSeasonRes>;
};
export function RelateSeason(props: RelateSeason) {
  const { data } = props;

  return (
    <Listbox
      variant="flat"
      aria-label="Danh sách các mùa của "
      className="  overflow-y-auto  h-[400px]"
    >
      {data?.map((d) => (
        <ListboxItem
          key={d.playerSeasonID}
          startContent={
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2 self-center w-[25px]">
                <Favorite playerSeasonID={d.playerSeasonID} />
              </div>
              <div className="flex flex-col justify-center  w-[45px]">
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
                    width={45}
                    height={45}
                    alt={
                      d.playerInfoRes.fullName +
                      " mùa giải " +
                      d.seasonRes.fullName +
                      " FC Online | Fifa online 4"
                    }
                    className=""
                  ></Image>
                )}
              </Link>
            </div>
          }
          textValue="Chi tiết cầu thủ fc online"
          className="py-3 !grow-0  !rounded-none hover:bg-[#c9c9be]"
          variant="light"
        >
          <div className="flex flex-row gap-8 text-[#535151] font-sans font-medium  ml-2  ">
            <div className="flex flex-row justify-between gap-6">
              <div className="flex flex-col justify-center">
                {d.seasonRes.logo && (
                  <Image
                    src={d.seasonRes.logo}
                    width={24}
                    height={24}
                    alt={
                      " mùa giải " +
                      d.seasonRes.fullName +
                      " FC Online | Fifa online 4"
                    }
                  ></Image>
                )}
              </div>
              <div className="flex flex-col justify-center">
                <span>{d.playerInfoRes.fullName}</span>
              </div>
            </div>

            <div className="flex flex-row justify-between gap-6">
              <div className="flex flex-col justify-center w-[35px] xss:max-mobile:w-[20px]">
                <span className=" font-semibold text-[16px]"> {d.ovr}</span>
              </div>
              <div
                className={clsx(
                  "w-[32px] h-[18px] before:top-[-11px]   before:w-[22px] before:h-[22px]  after:w-[22px] after:h-[22px] text-[16px] my-[8.66px] mt-0! mb-0!",
                  style.salary
                )}
              >
                {d.salary}
              </div>
            </div>
          </div>
        </ListboxItem>
      ))}
    </Listbox>
  );
}
