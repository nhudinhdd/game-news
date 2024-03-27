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
      <div className="flex h-14 px-7 border-b border-b-[#cbcaca] text-lg uppercase flex items-center relative">
        Top Tier By Position
        <Dropdown showArrow classNames={{ content: "xyz p-0 rounded-none" }}>
          <DropdownTrigger>
            <Button className="absolute left-1/2 border-[#cbcaca] border rounded-sm bg-white">
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
                  "flex flex-row w-[700px] flex-wrap border-none border-t border-l border-[#c0c0c0]",
                ],
              }}
            >
              {propsArr.map((v, index) => (
                <DropdownItem
                  onClick={() => setSelectedSalary(v)}
                  key={v}
                  className={clsx(
                    "flex_basic1_7 mobile:max-middeLaptop:basis-1/6  xss:max-mobileMiddle:basis-1/6 h-12 flex justify-center items-center text-center border-r border-b border-[#c0c0c0]",
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
      <div className="p-6">
        {/* <div className="w-full">
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
                    : ""
                )}
              >
                <span className="text-[14px] text-black flex flex-col justify-center xss:max-mobile:hidden">
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div> */}
        <div className="flex flex-row gap-3 overflow-x-auto overflow-y-clip py-7 top-player-list">
          {displayData?.map((player: any, index: number) => {
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
          })}
        </div>
      </div>
    </div>
  );
}
