import { HeaderPlayerInfo } from "@/components/playerInfo/playerInfoHeader";
import clsx from "clsx";
import { useState } from "react";
import style from "../styles/player.module.css";
import DefaultLayout from "./default";
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
          "relative min-h-full bg-overlay/50 backdrop-opacity-disabled z-50",
          style.background
        )}
      >
        <div className={clsx(style.overlay, "relative  flex justify-center")}>
          <div className={clsx("absolute z-10")}>
            <HeaderPlayerInfo setFilterState={setFilterState} />
            {children}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
