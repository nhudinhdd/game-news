import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { PlayerCard } from "./components/PlayerCard";

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
  return (
    <div className="w-full bg-white">
      <div className="flex h-14 px-7 border-b border-b-[#cbcaca] text-lg uppercase flex items-center">
        Top Tier By Position
      </div>
      <div className="p-6">
        <div className="w-full">
          <div className="flex flex-row flex-wrap border-t border-l border-[#bebebe] ">
            {propsArr.map((v, index) => (
              <div
                key={index}
                onClick={() => setSelectedSalary(v)}
                className={clsx(
                  "flex flex-row gap-3 py-2 flex_basic1_7 mobile:max-middeLaptop:basis-1/6  xss:max-mobileMiddle:basis-1/6 pl-3  xss:max-mobileMiddle:pl-2 cursor-pointer border-r border-b border-[#bebebe] ",
                  // index % 2 == 0 ? "bg-[#242424]" : "",
                  selectedSalary === v
                    ? "bg-[#c0c0c0] text-black font-semibold border-r border-b hover:bg-[#cbcaca] border-[#bebebe]"
                    : "hover:bg-[#3f3f45] "
                )}
              >
                <span className="text-[14px] text-black flex flex-col justify-center xss:max-mobile:hidden">
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-3 overflow-x-auto mt-7">
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
