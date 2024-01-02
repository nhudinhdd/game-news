import { axiosClient } from "@/api-client/axiosClient";
import { PlayerSeasonList } from "@/components/playerInfo/table/playeSeasonList";
import { PlayerSeasonTab } from "@/components/playerInfo/tabs/playerSeasonTab";
import { PLAYER_SEASON_FVORITE_URL } from "@/interfaces";
import PlayerLayout from "@/layouts/PlayerLayout";
import { FAVORITE, getLocalStorege } from "@/lib/common";
import { MetaDataList } from "@/model/common";
import { PlayerSeasonRes } from "@/model/player/player";
import { useEffect, useState } from "react";

export default function PlayerSeasonIndex() {
  const [isShowFilter, setIsShowFilter] = useState(false);
  const setFilterState = () => {
    setIsShowFilter(!isShowFilter);
  };

  const [data, setData] = useState<MetaDataList<PlayerSeasonRes>>();
  useEffect(() => {
    const favoriteList = getLocalStorege(FAVORITE);

    axiosClient
      .post<MetaDataList<PlayerSeasonRes>>(PLAYER_SEASON_FVORITE_URL, {
        playerFavoriteIds: favoriteList,
      })
      .then((res: any) => setData(res.data));
  }, []);
  if (!data) return null;
  return (
    <PlayerLayout>
      <PlayerSeasonTab tabNumber={2} />
      <PlayerSeasonList data={data?.data} />
    </PlayerLayout>
  );
}
