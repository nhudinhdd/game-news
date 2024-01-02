import { PlayerSeasonTab } from "@/components/playerInfo/tabs/playerSeasonTab";
import { PlayerSeasonRes } from "@/model/player/player";
import { useState } from "react";
import { axiosClient } from "../../api-client/axiosClient";
import { PlayerSeasonList } from "../../components/playerInfo/table/playeSeasonList";
import { PLAYER_SEASON_URL } from "../../interfaces";

import PlayerLayout from "@/layouts/PlayerLayout";
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
  return (
    <PlayerLayout>
      <PlayerSeasonTab tabNumber={1} />
      <PlayerSeasonList data={data?.data} />
    </PlayerLayout>
  );
}

export async function getStaticProps() {
  const data = await axiosClient
    .get<MetaDataList<PlayerSeasonRes>>(PLAYER_SEASON_URL)
    .then((res: any) => res.data);
  return { props: { data } };
}
