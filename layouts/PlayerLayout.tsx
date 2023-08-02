import { HeaderPlayerInfo } from "@/components/playerInfo/playerInfoHeader";
import { useState } from "react";
import DefaultLayout from "./default";
import { Filter } from "@/components/playerInfo/filter/filter";

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
      <div className="relative flex justify-center min-h-full">
        <img
          src="https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/f22-ratings-database-bg-xl.jpg.adapt.320w.jpg"
          alt=""
          srcSet="https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/f22-ratings-database-bg-xl.jpg.adapt.320w.jpg 320w, 
            https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/f22-ratings-database-bg-xl.jpg.adapt.768w.jpg 768w,
             https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/f22-ratings-database-bg-xl.jpg.adapt.1024w.jpg 1024w,
              https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/f22-ratings-database-bg-xl.jpg.adapt.1456w.jpg 1320w, 
              https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/f22-ratings-database-bg-xl.jpg.adapt.1920w.jpg 1456w"
        />
        <div className="absolute z-10  min-w-2/3 max-w-2/3">
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
