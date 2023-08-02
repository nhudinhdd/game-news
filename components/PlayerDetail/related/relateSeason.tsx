import { PlayerSeasonRes } from "@/model/player/player";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScrollShadow, Listbox, ListboxItem } from "@nextui-org/react";
import Image from "next/image";
import style from "../../../styles/player.module.css";
import clsx from "clsx";

type RelateSeason = {
  data: Array<PlayerSeasonRes>;
};
export function RelateSeason(props: RelateSeason) {
  const { data } = props;
  return (
    <ScrollShadow hideScrollBar className="w-[300px] h-[400px]">
      <Listbox variant="flat" aria-label="Danh sách các mùa của ">
        {data.map((d) => (
          <ListboxItem
            key={d.playerSeasonID}
            startContent={
              <Image
                src={d.avatar}
                width={50}
                height={50}
                alt={d.altAvatar}
                className=""
              ></Image>
            }
            variant="light"
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

                  <div className={clsx(style.hexagon)}>
                    <span>{d.salary}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className=" right-0 w-7 h-7 bg-[#c7c6c6] rounded-[3px] flex justify-center">
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#828282" }}
                    width={15}
                  />
                </div>
              </div>
            </div>
          </ListboxItem>
        ))}
      </Listbox>
    </ScrollShadow>
  );
}
