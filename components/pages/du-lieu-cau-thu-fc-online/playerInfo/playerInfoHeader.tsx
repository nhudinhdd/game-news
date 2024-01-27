import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Search } from "./filter/search";
import { useEffect, useState } from "react";
import { Input } from "@/components/inputs/input";
import { Button } from "@/components/buttons/Button";
import SeasonHeaderList from "../SeasonHeaderList/SeasonHeaderList";
import PositionHeader from "../PositionHeader/PositionHeader";

type HeaderPlayerInfoProps = {
  setFilterState: () => void;
  searchPlayer: () => void;
  updateSeasons: (seasonId: string) => void;
  selectedID: Set<String>;
  playerName: string;
  setPlayerName: (name: string) => void;

  updatePosition: (position: string) => void;
  selectedPostion: Set<String>;
};
export function HeaderPlayerInfo(props: HeaderPlayerInfoProps) {
  const {
    setFilterState,
    searchPlayer,
    selectedID,
    updateSeasons,
    setPlayerName,
    playerName,
    updatePosition,
    selectedPostion,
  } = props;
  useEffect(() => {
    console.log(selectedID);
  }, [selectedID]);
  return (
    <div className="relative flex flex-col w-[1000px]">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <Image
            src="/assets/f22-ratings-db-logo.png"
            width={60}
            height={60}
            alt="Danh sách cầu thủ trong FC Online"
          />
          <div className="mr-3">
            <span className="text-slate-500">Ratings Collective</span>
            <h1 className="font-riftonnorm text-white">
              FC Online | Danh sách cầu thủ
            </h1>
          </div>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <Input
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Nhập tên cầu thủ..."
          />
          <Button onClick={() => searchPlayer()}>
            <FontAwesomeIcon width="20" icon={faMagnifyingGlass} />
            <p className="ml-1">Tìm kiếm</p>
          </Button>
          <Search />
        </div>
        <div className="flex flex-col justify-center">
          <span className="font-[INGAME] text-[25px] mx-6 text-white">
            0/100
          </span>
        </div>
      </div>
      <div className="flex flex-col bg-[#1B1B1C]py-4">
        <SeasonHeaderList
          selectedID={selectedID}
          updateSeasons={updateSeasons}
        ></SeasonHeaderList>
        <PositionHeader
          selectedID={selectedPostion}
          updatePosition={updatePosition}
        ></PositionHeader>
      </div>
    </div>
  );
}
