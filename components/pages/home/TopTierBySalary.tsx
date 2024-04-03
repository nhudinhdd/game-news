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
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { PlayerCard } from "../top-tier/components/PlayerCard";
import stylePlayer from "@/styles/player.module.css";

interface Props {
  dataTopTier: any;
  dataSeason?: any;
}

const TopTierBySalary = ({ dataTopTier, dataSeason }: Props) => {
  const [selectedSalary, setSelectedSalary] = useState("5");
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    if (dataTopTier) {
      const newDataList = dataTopTier[selectedSalary]?.sort(function increment(
        a: { ranking: number },
        b: { ranking: number }
      ) {
        return a.ranking - b.ranking;
      });
      setDisplayData(newDataList);
    }
  }, [selectedSalary, dataTopTier]);
  return (
    <div className="flex flex-col text-white w-full">
      TopTierBySalary
      <Dropdown showArrow classNames={{ content: "p-0 rounded-none" }}>
        <DropdownTrigger>
          <Button
            className="border-[#cbcaca] border rounded-sm bg-white"
            endContent={
              <FontAwesomeIcon icon={faChevronDown} width="8" color="#333" />
            }
          >
            {selectedSalary || "Select salary"}
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
                "flex flex-row w-[400px] flex-wrap border-none border-t border-l border-[#c0c0c0]",
              ],
            }}
          >
            {Object.keys(dataTopTier)?.map((v, index) => (
              <DropdownItem
                onClick={() => setSelectedSalary(v)}
                key={v}
                className={clsx(
                  "basis-1/5 flex justify-center items-center text-center border-0 border-r border-b border-[#c0c0c0]",
                  selectedSalary === v ? "bg-[#c0c0c0] text-white" : ""
                )}
                classNames={{
                  base: "rounded-none",
                }}
              >
                {v}
              </DropdownItem>
            ))}
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
      <div className="flex flex-row gap-3 overflow-x-auto overflow-y-clip">
        {/* <Swiper
          slidesPerView={3}
          grabCursor
          modules={[Scrollbar]}
          className="!py-14 w-full"
        >
          {dataTopTier["40"]?.map((player: any, index: number) => {
            const seasonDetail = dataSeason.find(
              (item: any) => item.seasonID === player.seasonId
            );
            return (
              <SwiperSlide key={index} className={clsx(stylePlayer.playerCard)}>
                <PlayerCard
                  key={player?.playerSeasonId || index}
                  data={player}
                  backgroundLogo={seasonDetail?.backgroundLogo}
                  cssColor={seasonDetail?.cssColor}
                />
              </SwiperSlide>
            );
          })}
        </Swiper> */}
      </div>
      <div className="w-full flex max-w-[160px] overflow-x-auto">
        {displayData.slice(0, 3).map((player: any, index: number) => {
          const seasonDetail = dataSeason.find(
            (item: any) => item.seasonID === player.seasonId
          );
          return (
            <div
              key={player?.playerSeasonId || index}
              className={clsx(stylePlayer.playerCard)}
            >
              <PlayerCard
                key={player?.playerSeasonId || index}
                data={player}
                backgroundLogo={seasonDetail?.backgroundLogo}
                cssColor={seasonDetail?.cssColor}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopTierBySalary;
