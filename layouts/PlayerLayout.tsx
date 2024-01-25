import clsx from "clsx";
import { useState } from "react";
import style from "../styles/player.module.css";
import DefaultLayout from "./default";
import { HeaderPlayerInfo } from "@/components/pages/du-lieu-cau-thu-fc-online/playerInfo/playerInfoHeader";
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
          "relative bg-overlay/50 backdrop-opacity-disabled z-50",
          style.background
        )}
      >
        <div
          className={clsx(
            style.overlay,
            "relative items-center justify-center flex mx-3 my-8"
          )}
        >
          <div className="flex flex-col gap-3 min-h-screen px-3 py-8">
            <HeaderPlayerInfo setFilterState={setFilterState} />
            <div className="bg-black bg-opacity-30 p-3">{children}</div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
