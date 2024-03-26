import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { PlayerCard } from "./components/PlayerCard";
import { PlayerSeasonDetailRes } from "@/model/player/player";

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
      <div className="flex h-14 px-7 border-b border-b-[#cbcaca] text-lg uppercase flex items-center">
        Top Tier By Position
      </div>
      <div className="p-6">
        <div className="flex w-full">
          <div className="flex flex-row flex-wrap w-full">
            {positionList.map((v, index) => (
              <div
                key={index}
                onClick={() => setSelectedPos(v)}
                className={clsx(
                  "flex flex-row gap-3 py-4 px-2 cursor-pointer flex-1 justify-center items-center",
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
        <div className="flex flex-row gap-3 overflow-x-auto overflow-y-clip pt-8 pb-4">
          {displayData?.map((player: any) => {
            const seasonDetail = dataSeason.find(
              (item: any) => item.seasonID === player.seasonId
            );
            return (
              <PlayerCard
                key={player?.playerSeasonID}
                data={player}
                backgroundLogo={seasonDetail?.backgroundLogo}
                cssColor={seasonDetail?.cssColor}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
