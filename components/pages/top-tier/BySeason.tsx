import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { PlayerSeasonDetailRes } from "@/model/player/player";
import { PlayerCard } from "./components/PlayerCard";

interface PropsType {
  dataList: any;
  dataSeason?: any;
}

export default function BySeason(props: PropsType) {
  const { dataList, dataSeason } = props;
  const [selectedSeason, setSelectedSeason] = useState<any>({
    backgroundLogo:
      "https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/card/ICON.png",
    seasonID: "de6d383b-09c2-4e5b-bacf-d487df7a7a2a",
    cssColor: "rgba(93, 87, 61, 1)",
  });
  const [seasonIndex, setSeasonIndex] = useState("1");
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    if (dataList) {
      const newDataList = dataList[seasonIndex]?.sort(function increment(
        a: { ranking: number },
        b: { ranking: number }
      ) {
        return a.ranking - b.ranking;
      });
      setDisplayData(newDataList);
    }
  }, [seasonIndex, dataList]);

  return (
    <div className="w-full bg-white">
      <div className="flex h-14 px-7 border-b border-b-[#cbcaca] text-lg uppercase flex items-center">
        Top Tier By Season
      </div>
      <div className="p-6">
        <div className="flex flex-row flex-wrap h-[200px] overflow-y-auto w-full bg-black bg-opacity-70 mb-4">
          {dataSeason.map((v: any, index: number) => (
            <div
              key={v.seasonID}
              onClick={() => {
                setSelectedSeason(v);
                let newInx = index + 1;
                setSeasonIndex(newInx.toString());
              }}
              className={clsx(
                "flex flex-row gap-3 py-1 flex_basic1_7  mobile:max-middeLaptop:basis-1/6  xss:max-mobileMiddle:basis-1/6 pl-3  xss:max-mobileMiddle:pl-2 cursor-pointer",
                // index % 2 == 0 ? "bg-[#242424]" : "",
                selectedSeason?.seasonID === v.seasonID
                  ? "bg-[#3f3f45] text-black font-semibold hover:bg-[#cbcaca] "
                  : "hover:bg-[#3f3f45] "
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
                  width={25}
                  height={22}
                  className=""
                ></Image>
              </div>

              <span className="text-[14px] text-white flex flex-col justify-center xss:max-mobile:hidden">
                {v.shortName ? v.shortName.toLocaleUpperCase() : ""}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-3 overflow-x-auto">
          {displayData?.map((player: PlayerSeasonDetailRes) => (
            <PlayerCard
              key={player?.playerSeasonID}
              data={player}
              backgroundLogo={selectedSeason?.backgroundLogo}
              cssColor={selectedSeason?.cssColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
