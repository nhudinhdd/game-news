import { PlayerSeasonRes } from "@/model/player/player";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScrollShadow, Listbox, ListboxItem, Button } from "@nextui-org/react";
import Image from "next/image";
import style from "../../../styles/player.module.css";
import clsx from "clsx";

type RelateSeason = {
  data: Array<PlayerSeasonRes>;
};
export function RelateSeason(props: RelateSeason) {
  const { data } = props;
  return (
    <ScrollShadow hideScrollBar className="w-[489px] h-[400px]">
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
            className="py-3"
            variant="light"
          >
            <div className="flex flex-row gap-8 justify-between">
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

              <div className="flex flex-row justify-between gap-40">
                <div className={clsx(style.hexagon)}>
                  <span>{d.salary}</span>
                </div>
                <div className="flex flex-col gap-2 self-center">
                  <Button
                    isIconOnly
                    aria-label="Like"
                    className=" right-0  bg-[#959595] rounded-[4px]  min-w-[30px] w-[30px] min-h-[30px] h-[30px]"
                  >
                    <div className="w-4 h-4 flex justify-center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#494848" }}
                        width={17}
                      />
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </ListboxItem>
        ))}
      </Listbox>
    </ScrollShadow>
  );
}
