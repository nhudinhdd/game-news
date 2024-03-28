import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { PlayerSeasonDetailRes } from "@/model/player/player";
import { PlayerCard } from "./components/PlayerCard";
import { SeasonRes } from "@/model/player/season";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

interface PropsType {
  dataList: any;
  dataSeason?: SeasonRes[];
}

export default function BySeason(props: PropsType) {
  const { dataList, dataSeason } = props;
  const [selectedSeason, setSelectedSeason] = useState<any>(
    dataSeason
      ? dataSeason[0]
      : {
          backgroundLogo:
            "https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/card/ICON.png",
          seasonID: "de6d383b-09c2-4e5b-bacf-d487df7a7a2a",
          cssColor: "rgba(93, 87, 61, 1)",
        }
  );
  const [seasonIndex, setSeasonIndex] = useState("1");
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    if (dataList) {
      const newDataList = dataList[selectedSeason?.seasonID]?.sort(
        function increment(a: { ranking: number }, b: { ranking: number }) {
          return a.ranking - b.ranking;
        }
      );
      setDisplayData(newDataList);
    }
  }, [seasonIndex, dataList]);

  return (
    <div className="w-full bg-white">
      <div className="flex h-14 px-7 border-b border-b-[#cbcaca] text-lg uppercase flex items-center">
        Top Tier By Season
      </div>
      <div className="p-6">
        <div className="flex flex-row flex-wrap h-48 overflow-y-auto w-full mb-4 border-t border-l border-[#cbcaca]">
          {dataSeason?.map((v: any, index: number) => (
            <div
              key={v.seasonID}
              onClick={() => {
                setSelectedSeason(v);
                setSeasonIndex((index + 1).toString());
              }}
              className={clsx(
                "flex flex-row gap-3 py-1 flex_basic1_7  mobile:max-middeLaptop:basis-1/6  xss:max-mobileMiddle:basis-1/6 pl-3  xss:max-mobileMiddle:pl-2 cursor-pointer border-r border-b border-[#cbcaca] items-center",
                selectedSeason?.seasonID === v.seasonID
                  ? "bg-[#3f3f45] font-semibold hover:bg-[#cbcaca] "
                  : "hover:bg-[#3f3f45] hover:text-white"
              )}
            >
              <div className="flex flex-col justify-center">
                <Image
                  src={v.logo}
                  alt={
                    "Mùa giải " +
                    v.fullName +
                    " trong FC online | Fifa online 4"
                  }
                  width={28}
                  height={22}
                  style={{ width: 28, height: 22 }}
                  className=""
                ></Image>
              </div>

              <span
                className={clsx(
                  "text-[14px] text-center xss:max-mobile:hidden",
                  selectedSeason?.seasonID === v.seasonID
                    ? "text-white"
                    : "text-black"
                )}
              >
                {v.shortName ? v.shortName.toLocaleUpperCase() : ""}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-3 overflow-x-auto overflow-y-clip">
          <Swiper
            slidesPerView={9}
            grabCursor
            scrollbar={{ draggable: true, dragSize: 90 }}
            modules={[Scrollbar]}
          >
            {displayData?.map(
              (player: PlayerSeasonDetailRes, index: number) => (
                <SwiperSlide key={index} className="py-8">
                  <PlayerCard
                    key={player?.playerSeasonID || index}
                    data={player}
                    backgroundLogo={selectedSeason?.backgroundLogo}
                    cssColor={selectedSeason?.cssColor}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
          {/* {displayData?.map((player: PlayerSeasonDetailRes, index: number) => (
            <PlayerCard
              key={player?.playerSeasonID || index}
              data={player}
              backgroundLogo={selectedSeason?.backgroundLogo}
              cssColor={selectedSeason?.cssColor}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}
