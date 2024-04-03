import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { PlayerCard } from "./components/PlayerCard";
import { PlayerSeasonDetailRes } from "@/model/player/player";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import stylePlayer from "@/styles/player.module.css";
import styleTopTier from "@/styles/topTier.module.css";

interface PropsType {
  dataList: any;
  dataSeason?: any;
}

export default function ByPosition(props: PropsType) {
  const { dataList, dataSeason } = props;
  const [selectedPos, setSelectedPos] = useState("ALL");
  const [displayData, setDisplayData] = useState([]);
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
  useEffect(() => {
    if (dataList) {
      const newDataList = dataList[selectedPos]?.sort(function increment(
        a: { ranking: number },
        b: { ranking: number }
      ) {
        return a.ranking - b.ranking;
      });
      setDisplayData(newDataList);
    }
  }, [selectedPos, dataList]);
  return (
    <div className="w-full bg-white">
      <div className="flex h-14 px-7 border-b border-b-[#cbcaca] text-lg uppercase items-center xss:max-mobile:text-sm xss:max-mobile:p-2">
        Top Tier By Position
      </div>
      <div className="p-6">
        <div className="flex w-full">
          <div className="flex flex-row flex-wrap w-full xss:max-mobile:grid xss:max-mobile:grid-cols-8">
            {positionList.map((v, index) => (
              <div
                key={index}
                onClick={() => setSelectedPos(v)}
                className={clsx(
                  "flex flex-row gap-3 py-4 px-2 cursor-pointer flex-1 justify-center items-center xss:max-mobile:col-span-1 xss:max-mobile:py-1 xss:max-mobile:text-xs",
                  selectedPos === v
                    ? "text-black font-semibold border-t border-l border-r border-black"
                    : "border border-[#cbcaca] border-b-black"
                )}
              >
                {v}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-3 overflow-x-auto overflow-y-clip px-6 pb-6">
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
                <SwiperSlide
                  key={index}
                  className={clsx(stylePlayer.playerCard)}
                >
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
        </div>
      </div>
    </div>
  );
}
