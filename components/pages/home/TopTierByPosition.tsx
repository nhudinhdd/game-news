import React, { useEffect, useState } from "react";
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
import { getColorBgPosition } from "@/lib/common";
import { checkPosition } from "@/utils/sap-xep-doi-hinh";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { PlayerCard } from "../top-tier/components/PlayerCard";
import stylePlayer from "@/styles/player.module.css";
import TopTierStyle from "@/styles/topTier.module.css";

interface Props {
  dataTopTier: any;
  dataSeason?: any;
}

const positionList = [
  "ALL",
  "ST",
  "CF",
  "LW",
  "RW",
  "CM",
  "CAM",
  "CDM",
  "LM",
  "RM",
  "CB",
  "LB",
  "RB",
  "LWB",
  "RWB",
  "GK",
];

const TopTierByPosition = ({ dataTopTier, dataSeason }: Props) => {
  const [selectedPosition, setSelectedPosition] = useState("ALL");
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    if (dataTopTier) {
      const newDataList = dataTopTier[selectedPosition]?.sort(
        function increment(a: { ranking: number }, b: { ranking: number }) {
          return a.ranking - b.ranking;
        }
      );
      setDisplayData(newDataList);
    }
  }, [selectedPosition, dataTopTier]);

  return (
    <div className="flex flex-col text-white py-2">
      <Dropdown showArrow classNames={{ content: "p-0 rounded-none" }}>
        <DropdownTrigger>
          <Button
            className="m-auto relative border-[#cbcaca] border rounded-full w-fit h-6 bg-white mb-6 font-semibold"
            endContent={
              <div className="bg-black w-[22px] h-[22px] flex justify-center items-center rounded-full absolute right-0">
                <FontAwesomeIcon icon={faPlus} width="10" color="#fff" />
              </div>
            }
          >
            {selectedPosition || "Select Position"}
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
                "flex flex-row w-[300px] flex-wrap border-none border-t border-l border-[#c0c0c0]",
              ],
            }}
          >
            {positionList?.map((v, index) => (
              <DropdownItem
                onClick={() => setSelectedPosition(v)}
                key={v}
                className={clsx(
                  "basis-1/4 flex justify-center items-center text-center border-0 border-r border-b border-[#c0c0c0]",
                  selectedPosition === v
                    ? "bg-cyan-500 text-white hover:bg-cyan-500"
                    : "hover:!bg-cyan-200"
                )}
                classNames={{
                  base: "rounded-none",
                  title: clsx(
                    v === "ALL"
                      ? "bg-neutral-600"
                      : getColorBgPosition(checkPosition(v)),
                    "py-2 text-white"
                  ),
                }}
              >
                {v}
              </DropdownItem>
            ))}
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
      <div className={clsx("topTierSwiper w-full")}>
        <Swiper
          slidesPerView={1}
          grabCursor
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
            const seasonDetail = dataSeason.find(
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

export default TopTierByPosition;
