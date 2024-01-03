import { axiosClient } from "@/api-client/axiosClient";
import { NotFound } from "@/components/pages";
import { PlayerSeasonList } from "@/components/playerInfo/table/playeSeasonList";
import { PlayerSeasonTab } from "@/components/playerInfo/tabs/playerSeasonTab";
import { Tabs } from "@/components/tabs/tabs";
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

  if (!data) return <NotFound />;
  return (
    <PlayerLayout>
      <Tabs
        id="react-aria7602836567-:r4n:"
        tabIndex={2}
        tabs={[
          {
            title: "Danh sách cầu thủ",
            dataKey: "player-list",
            content: <>Danh sách cầu thủ</>,
            href: "/du-lieu-cau-thu-fc-online",
          },
          {
            title: "Danh sách cầu thủ yêu thích",
            dataKey: "player-list-favorite",
            content: <PlayerSeasonList data={data?.data} />,
            href: "/du-lieu-cau-thu-fc-online/danh-sach-cau-thu-yeu-thich",
          },
        ]}
        ariaLabel="Navbar danh sách cầu thủ FC Online"
      />
    </PlayerLayout>
  );
}
