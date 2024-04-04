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

interface Props {
  dataTopTier: any;
  dataSeason?: any;
  type?: "position" | "salary";
}

const TopTierBySalary = ({ dataTopTier, dataSeason, type }: Props) => {
  const [selectedSalary, setSelectedSalary] = useState(
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
  return (
    <div className="flex flex-col text-white py-2">
      <Dropdown showArrow classNames={{ content: "p-0 rounded-none" }}>
        <DropdownTrigger>
          <Button
            className="m-auto relative border-[#cbcaca] border rounded-full w-fit h-6 bg-white mb-6"
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
                "flex flex-row w-[320px] flex-wrap border-none border-t border-l border-[#c0c0c0]",
              ],
            }}
          >
            {(type === "salary" ? Object.keys(dataTopTier) : PositionList)?.map(
              (v, index) =>
                type === "salary" ? (
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
                ) : (
                  <DropdownItem
                    onClick={() => setSelectedSalary(v)}
                    key={v}
                    className={clsx(
                      "basis-1/4 flex justify-center items-center text-center border-0 border-r border-b border-[#c0c0c0]",
                      selectedSalary === v
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
                )
            )}
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
      <Swiper
        slidesPerView={1}
        grabCursor
        pagination={{
          enabled: true,
          clickable: true,
          bulletActiveClass: "!bg-primary",
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
