import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { PlayerCard } from "./components/PlayerCard";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  DropdownSection,
} from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import stylePlayer from "@/styles/player.module.css";
import styleTopTier from "@/styles/topTier.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa0, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface PropsType {
  dataList: any;
  dataSeason?: any;
}

export default function BySalary(props: PropsType) {
  const { dataList, dataSeason } = props;
  const [selectedSalary, setSelectedSalary] = useState("5");
  const [displayData, setDisplayData] = useState([]);
  const propsArr = Object.keys(dataList);
  useEffect(() => {
    if (dataList) {
      const newDataList = dataList[selectedSalary]?.sort(function increment(
        a: { ranking: number },
        b: { ranking: number }
      ) {
        return a.ranking - b.ranking;
      });
      setDisplayData(newDataList);
    }
  }, [selectedSalary, dataList]);
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";
  return (
    <div className="w-full bg-white">
      <div className="flex h-14 px-7 border-b border-b-[#cbcaca] text-lg uppercase items-center relative xss:max-mobile:text-sm xss:max-mobile:p-2">
        Top Tier By Salary
        <Dropdown showArrow classNames={{ content: "xyz p-0 rounded-none" }}>
          <DropdownTrigger>
            <Button
              className="absolute xssMiddle:left-1/2 xssMiddle:-translate-x-1/2 xss:max-xssMiddle:right-5 border-[#cbcaca] border rounded-sm bg-white xss:max-xssMiddle:h-8"
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
                  "flex flex-row w-[700px] xss:max-xssMiddle:w-[200px] xssMiddle:max-mobile:w-[400px] flex-wrap border-none border-t border-l border-[#c0c0c0]",
                ],
              }}
            >
              {propsArr.map((v, index) => (
                <DropdownItem
                  onClick={() => setSelectedSalary(v)}
                  key={v}
                  className={clsx(
                    "flex_basic1_7 xss:max-xssMiddle:basis-1/4 xssMiddle:max-middeLaptop:basis-1/6 flex justify-center items-center text-center border-0 border-r border-b border-[#c0c0c0]",
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
      </div>
      <div className="flex flex-row gap-3 overflow-x-auto overflow-y-clip top-player-list px-6 pb-6">
        <Swiper
          slidesPerView={9}
          grabCursor
          scrollbar={{
            draggable: true,
            dragSize: 90,
            dragClass: clsx(styleTopTier.slide_top_tier),
            horizontalClass: clsx(styleTopTier.slide_top_tier_horizontal),
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            520: {
              slidesPerView: 2,
            },
            740: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
            1300: {
              slidesPerView: 9,
            },
          }}
          modules={[Scrollbar]}
          className="!py-14 w-full"
        >
          {displayData?.map((player: any, index: number) => {
            const seasonDetail = dataSeason.find(
              (item: any) => item.seasonID === player.seasonId
            );
            return (
              <SwiperSlide key={index} className={clsx(stylePlayer.playerCard)}>
                <PlayerCard
                  key={player?.playerSeasonID || index}
                  data={player}
                  backgroundLogo={seasonDetail?.backgroundLogo}
                  cssColor={seasonDetail?.cssColor}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* {displayData?.map((player: any, index: number) => {
            const seasonDetail = dataSeason.find(
              (item: any) => item.seasonID === player.seasonId
            );
            return (
              <PlayerCard
                key={player?.playerSeasonID || index}
                data={player}
                backgroundLogo={seasonDetail?.backgroundLogo}
                cssColor={seasonDetail?.cssColor}
              />
            );
          })} */}
      </div>
    </div>
  );
}
