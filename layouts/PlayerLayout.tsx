import { HeaderPlayerInfo } from "@/components/playerInfo/playerInfoHeader";
import { useState } from "react";
import DefaultLayout from "./default";
import { Filter } from "@/components/playerInfo/filter/filter";
import Image from "next/image";
import style from "../styles/player.module.css";
import clsx from "clsx";
export default function PlayerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isShowFilter, setIsShowFilter] = useState(false);
  const setFilterState = () => {
    setIsShowFilter(!isShowFilter);
  };

  //position
  const [postion, setPostion] = useState("");
  const [postionDetail, setPostionDetail] = useState("");

  const [seasonID, setSeasonID] = useState("");
  const [fitness, setFitness] = useState("");

  const [tournamentID, setTournamentID] = useState("");
  const [teamID, setTeamID] = useState("");
  const [continentID, setContinentID] = useState("");
  const [nationID, setNationID] = useState("");
  const [trait1, setTrait1] = useState("");
  const [trait2, setTrait2] = useState("");
  const [trait3, setTrait3] = useState("");
  return (
    <DefaultLayout>
      <div
        className={clsx(
          "relative flex justify-center min-h-full",
          style.background
        )}
      >
        <div className="absolute z-10  ">
          <HeaderPlayerInfo setFilterState={setFilterState} />
          {isShowFilter && (
            <Filter
              setPostion={setPostion}
              setPostionDetail={setPostionDetail}
              setSeasonID={setSeasonID}
              setFitness={setFitness}
              setTournamentID={setTournamentID}
              tournamentID={tournamentID}
              setTeamID={setTeamID}
              setContinentID={setContinentID}
              continentID={continentID}
              setNationID={setNationID}
              setTrait1={setTrait1}
              setTrait2={setTrait2}
              setTrait3={setTrait3}
            ></Filter>
          )}
          {children}
        </div>
      </div>
    </DefaultLayout>
  );
}
