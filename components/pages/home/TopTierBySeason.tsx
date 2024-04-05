import React, { useEffect, useRef, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  DropdownSection,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { PlayerCard } from "../top-tier/components/PlayerCard";
import stylePlayer from "@/styles/player.module.css";
import { SeasonRes } from "@/model/player/season";
import Image from "next/image";
import TopTierStyle from "@/styles/topTier.module.css";

interface Props {
  dataTopTier: any;
  dataSeason?: any;
}

const TopTierBySeason = ({ dataTopTier, dataSeason }: Props) => {
  const [selectedSeason, setSelectedSeason] = useState(
    dataSeason ? dataSeason[0] : {}
  );
  const [displayData, setDisplayData] = useState([]);
  const swiper = useSwiper();

  useEffect(() => {
    if (dataTopTier) {
      const newDataList = dataTopTier[selectedSeason?.seasonID]?.sort(
        function increment(a: { ranking: number }, b: { ranking: number }) {
          return a.ranking - b.ranking;
        }
      );
      setDisplayData(newDataList);
    }
  }, [selectedSeason, dataTopTier]);

  return (
    <div className="flex flex-col text-white py-2">
      <Dropdown showArrow classNames={{ content: "p-0 rounded-none" }}>
        <DropdownTrigger>
          <Button
            className="m-auto relative border-[#cbcaca] border rounded-full w-fit h-6 bg-white mb-6 pr-7"
            endContent={
              <div className="bg-black w-[22px] h-[22px] flex justify-center items-center rounded-full absolute right-0">
                <FontAwesomeIcon icon={faPlus} width="10" color="#fff" />
              </div>
            }
          >
            <div className="flex items-center gap-1">
              <Image
                src={selectedSeason.logo}
                alt={
                  "Mùa giải " +
                  selectedSeason.fullName +
                  " trong FC online | Fifa online 4"
                }
                width={15}
                height={12}
                style={{ width: 15, height: 12 }}
              />
              <span className="font-semibold">
                {selectedSeason?.shortName.toUpperCase()}
              </span>
            </div>
            {/* {selectedSeason?.shortName || "Select season"} */}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          variant="faded"
          aria-label="Dropdown menu with description"
          classNames={{
            emptyContent: ["rounded-sm"],
            base: "p-0",
          }}
        >
          <DropdownSection
            className="mb-0"
            classNames={{
              group: [
                "grid grid-cols-9 flex-wrap border-none border-t border-l border-[#c0c0c0]",
              ],
            }}
          >
            {dataSeason?.map((season: SeasonRes, index: number) => (
              <DropdownItem
                onClick={() => setSelectedSeason(season)}
                key={season.seasonID}
                textValue={season.seasonID}
                className={clsx(
                  "col-span-1 flex items-center text-center border-0 border-r border-b border-[#c0c0c0]",
                  selectedSeason?.seasonID === season?.seasonID
                    ? "bg-textStatic text-white"
                    : ""
                )}
                classNames={{
                  base: "rounded-none",
                }}
              >
                <div className="flex gap-1 items-center">
                  <Image
                    src={season.logo}
                    alt={
                      "Mùa giải " +
                      season.fullName +
                      " trong FC online | Fifa online 4"
                    }
                    width={15}
                    height={12}
                    style={{ width: 15, height: 12 }}
                  ></Image>
                  <span className={clsx("text-xs text-center")}>
                    {season.shortName ? season.shortName.toUpperCase() : ""}
                  </span>
                </div>
              </DropdownItem>
            ))}
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
      <div className={clsx("topTierSwiper w-full")}>
        <Swiper
          slidesPerView={1}
          grabCursor
          wrapperClass={TopTierStyle.topTierSwiper}
          pagination={{
            enabled: true,
            clickable: true,
            bulletActiveClass: "!bg-[#00c7ff]",
            bulletClass: TopTierStyle.custom_pagination,
          }}
          navigation={{
            enabled: true,
          }}
          modules={[Scrollbar, Pagination, Navigation]}
          className="!pb-12 w-full"
        >
          {displayData?.slice(0, 3)?.map((player: any, index: number) => {
            const seasonDetail = dataSeason?.find(
              (item: any) => item.seasonID === player.seasonId
            );
            return (
              <SwiperSlide
                key={index}
                className={clsx(stylePlayer.playerCard, "flex")}
              >
                <PlayerCard
                  key={player?.playerSeasonId || index}
                  data={player}
                  backgroundLogo={seasonDetail?.backgroundLogo}
                  cssColor={seasonDetail?.cssColor}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TopTierBySeason;
