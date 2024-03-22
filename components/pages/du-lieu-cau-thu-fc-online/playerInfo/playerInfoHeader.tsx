import { Button } from "@/components/buttons/Button";
import { Input } from "@/components/inputs/input";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import OvrHeader from "../OvrHeader/OvrHeader";
import PositionHeader from "../PositionHeader/PositionHeader";
import SeasonHeaderList from "../SeasonHeaderList/SeasonHeaderList";
import { Search } from "./filter/search";

type HeaderPlayerInfoProps = {
  playerPos: string;
  searchPlayer: (value: string) => void;
  updateSeasons: (seasonId: string) => void;
  selectedID: Set<String>;
  playerName: string;
  setPlayerName: (name: string) => void;

  updatePosition: (position: string) => void;
  selectedPostion: Set<String>;
  likeSize: number;

  ovrMin: string;
  setOvrMin: (ovr: string) => void;
  ovrMax: string;
  setOvrMax: (ovr: string) => void;

  salaryMin: string;
  setSalaryMin: (ovr: string) => void;
  salaryMax: string;
  setSalaryMax: (ovr: string) => void;
};
export function HeaderPlayerInfo(props: HeaderPlayerInfoProps) {
  const {
    playerPos,
    searchPlayer,
    selectedID,
    updateSeasons,
    setPlayerName,
    playerName,
    updatePosition,
    selectedPostion,
    likeSize,

    ovrMin,
    setOvrMin,
    ovrMax,
    setOvrMax,

    salaryMin,
    setSalaryMin,
    salaryMax,
    setSalaryMax,
  } = props;

  return (
    <div
      className="relative flex flex-col laptop:w-[1000px] middeLaptop:max-laptop:w-[800px] mobile:max-middeLaptop:w-[700px] mobileMiddle:max-mobile:w-[500px] 
    xss:max-mobileMiddle:w-full"
    >
      <div className="flex justify-center mb-1 bg-blackLow py-4 bg-gradient-to-r from-blackLow to-[#323131]">
        <h1 className="text-bgWhite font-bold text-[18px]">
          Dữ liệu cầu thủ FC online
        </h1>
      </div>
      <div className="flex flex-row justify-between mb-2 bg-blackLow py-2 pl-4">
        <div className="flex flex-row gap-3 items-center grow xss:max-mobileMiddle:gap-1">
          <Input
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Nhập tên cầu thủ..."
            className="border-none w-3/5 xss:max-mobileMiddle:w-1/2 bg-darkGray2 rounded-none font-semibold text-textMobileStatistic text-bgWhite"
          />
          <Button onClick={() => searchPlayer(playerName)} className="!bg-blueGray">
            <FontAwesomeIcon width="18" icon={faMagnifyingGlass} />
          </Button>
          <Search />

          {/* <Button onClick={() => searchPlayer()} className="!bg-blueGray">
            <p className="ml-1 xss:max-mobileMiddle:text-[12px]">
              Mùa & Vị trí
            </p>
          </Button> */}
        </div>
        <div className="flex flex-col justify-center">
          <span className="font-[INGAME] text-[25px] mx-6 xss:max-mobileMiddle:mx-1 text-white xss:max-mobileMiddle:text-[18px]">
            {likeSize}/100
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
          selectedPos={playerPos}
        ></PositionHeader>
        <OvrHeader
          ovrMin={ovrMin}
          setOvrMin={setOvrMin}
          ovrMax={ovrMax}
          setOvrMax={setOvrMax}
          salaryMin={salaryMin}
          setSalaryMin={setSalaryMin}
          salaryMax={salaryMax}
          setSalaryMax={setSalaryMax}
        ></OvrHeader>
      </div>
    </div>
  );
}
