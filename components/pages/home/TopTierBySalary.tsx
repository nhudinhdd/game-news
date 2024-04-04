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
import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { PlayerCard } from "../top-tier/components/PlayerCard";
import stylePlayer from "@/styles/player.module.css";
import { PositionList, getColorBgPosition } from "@/lib/common";
import { checkPosition } from "@/utils/sap-xep-doi-hinh";
import TopTierStyle from "@/styles/topTier.module.css";
import { SeasonRes } from "@/model/player/season";
import Image from "next/image";

interface Props {
  dataTopTier: any;
  dataSeason?: any;
  type?: "position" | "salary" | "season";
}

const TopTierBySalary = ({
  dataTopTier,
  dataSeason,
  type = "season",
}: Props) => {
  const [selectedSalary, setSelectedSalary] = useState<any>(
    type === "position" ? "ALL" : "5"
  );
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

  const renderDropdownList = (type: string) => {
    switch (type) {
      case "season":
        return dataSeason?.map((season: SeasonRes) => (
          <DropdownItem
            onClick={() => setSelectedSalary(season?.seasonID)}
            key={season.seasonID}
            className={clsx(
              "flex_basic1_7 flex justify-center items-center text-center border-0 border-r border-b border-[#c0c0c0] hover:bg-slate-500"
            )}
            classNames={{
              base: "rounded-none",
            }}
          >
            <div className="flex justify-center gap-1 items-center">
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
              <span
                className={clsx(
                  "text-xs text-center",
                  selectedSalary?.seasonID === season.seasonID
                    ? "text-white"
                    : "text-black"
                )}
              >
                {season.shortName ? season.shortName.toLocaleUpperCase() : ""}
              </span>
            </div>
          </DropdownItem>
        ));
      case "salary":
        return Object.keys(dataTopTier)?.map((salary: any) => (
          <DropdownItem
            onClick={() => setSelectedSalary(salary)}
            key={salary}
            className={clsx(
              "basis-1/5 flex justify-center items-center text-center border-0 border-r border-b border-[#c0c0c0]",
              selectedSalary === salary ? "bg-[#c0c0c0] text-white" : ""
            )}
            classNames={{
              base: "rounded-none",
            }}
          >
            {salary}
          </DropdownItem>
        ));
      case "position":
        return PositionList?.map((pos: any) => (
          <DropdownItem
            onClick={() => setSelectedSalary(pos)}
            key={pos}
            className={clsx(
              "basis-1/4 flex justify-center items-center text-center border-0 border-r border-b border-[#c0c0c0]",
              selectedSalary === pos
                ? "bg-cyan-500 text-white hover:bg-cyan-500"
                : "hover:!bg-cyan-200"
            )}
            classNames={{
              base: "rounded-none",
              title: clsx(
                pos === "ALL"
                  ? "bg-neutral-600"
                  : getColorBgPosition(checkPosition(pos)),
                "py-2 text-white"
              ),
            }}
          >
            {pos}
          </DropdownItem>
        ));

      default:
        break;
    }
  };

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
                "flex flex-row w-[450px] flex-wrap border-none border-t border-l border-[#c0c0c0]",
              ],
            }}
          >
            {renderDropdownList(type)}
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
      <Swiper
        slidesPerView={1}
        grabCursor
        pagination={{
          enabled: true,
          clickable: true,
          bulletActiveClass: "!bg-[#00c7ff]",
          bulletClass: TopTierStyle.custom_pagination,
        }}
        modules={[Scrollbar, Pagination]}
        className="!pb-8 w-full"
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
  );
};

export default TopTierBySalary;
