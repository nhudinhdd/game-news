import { BottomConent } from "@/components/playerInfo/bottomContent/bottomContent";
import { Filter } from "@/components/playerInfo/filter/filter";
import { PlayerSeasonTab } from "@/components/playerInfo/tabs/playerSeasonTab";
import DefaultLayout from "@/layouts/default";
import { PlayerSeasonRes } from "@/model/player/player";
import { Divider } from "@nextui-org/react";
import { useState } from "react";
import { axiosClient } from "../../api-client/axiosClient";
import { HeaderPlayerInfo } from "../../components/playerInfo/playerInfoHeader";
import { PlayerSeasonList } from "../../components/playerInfo/table/playeSeasonList";
import { PLAYER_SEASON_URL } from "../../interfaces";

import { MetaDataList } from "../../model/common";

type PlayerSeasonIndexProps = {
  data: MetaDataList<PlayerSeasonRes>;
};
export default function PlayerSeasonIndex(props: PlayerSeasonIndexProps) {
  const { data } = props;
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
            ></Filter>
          )}
          <PlayerSeasonTab />
          <PlayerSeasonList data={data?.data} />
          {/* <BottomConent /> */}
        </div>
      </div>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const data = await axiosClient
    .get<MetaDataList<PlayerSeasonRes>>(PLAYER_SEASON_URL)
    .then((res: any) => res.data);
  return { props: { data } };
}