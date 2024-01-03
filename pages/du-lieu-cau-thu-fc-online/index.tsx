import { PlayerSeasonTab } from "@/components/playerInfo/tabs/playerSeasonTab";
import { PlayerSeasonRes } from "@/model/player/player";
import { useState } from "react";
import { axiosClient } from "../../api-client/axiosClient";
import { PlayerSeasonList } from "../../components/playerInfo/table/playeSeasonList";
import { PLAYER_SEASON_URL } from "../../interfaces";

import PlayerLayout from "@/layouts/PlayerLayout";
import { MetaDataList } from "../../model/common";
import { Tabs } from "@/components/tabs/tabs";
import { NotFound } from "@/components/pages";

type PlayerSeasonIndexProps = {
  data: MetaDataList<PlayerSeasonRes>;
};

export default function PlayerSeasonIndex(props: PlayerSeasonIndexProps) {
  const { data } = props;
  const [isShowFilter, setIsShowFilter] = useState(false);
  const setFilterState = () => {
    setIsShowFilter(!isShowFilter);
  };
  if (!data) return <NotFound />;
  return (
    <PlayerLayout>
      <Tabs
        id="react-aria7602836567-:r4n:"
        tabIndex={1}
        tabs={[
          {
            title: "Danh sách cầu thủ",
            dataKey: "player-list",
            content: <PlayerSeasonList data={data.data} />,
            href: "/du-lieu-cau-thu-fc-online",
          },
          {
            title: "Danh sách cầu thủ yêu thích",
            dataKey: "player-list-favorite",
            content: <>Danh sách cầu thủ yêu thích</>,
            href: "/du-lieu-cau-thu-fc-online/danh-sach-cau-thu-yeu-thich",
          },
        ]}
        ariaLabel="Navbar danh sách cầu thủ FC Online"
      />
    </PlayerLayout>
  );
}

export async function getStaticProps() {
  try {
    const data = await axiosClient
      .get<MetaDataList<PlayerSeasonRes>>(PLAYER_SEASON_URL)
      .then((res: any) => res.data.data);
    return { props: { data } };
  } catch (error) {
    return { props: {} };
  }
}
