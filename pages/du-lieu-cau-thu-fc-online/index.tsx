import { PlayerSeasonRes } from "@/model/player/player";
import { useEffect, useReducer, useState } from "react";
import { axiosClient } from "../../api-client/axiosClient";
import { PLAYER_SEASON_URL } from "../../interfaces";

import PlayerLayout from "@/layouts/PlayerLayout";
import { MetaDataList } from "../../model/common";
import { Tabs } from "@/components/tabs/tabs";
import { Loading } from "@/components/pages";
import { PlayerSeasonList } from "@/components/pages/du-lieu-cau-thu-fc-online/playerInfo/table/playeSeasonList";
import { HeaderPlayerInfo } from "@/components/pages/du-lieu-cau-thu-fc-online/playerInfo/playerInfoHeader";
import { GetServerSideProps } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
type PlayerSeasonIndexProps = {
  data: MetaDataList<PlayerSeasonRes>;
};

export default function PlayerSeasonIndex(props: PlayerSeasonIndexProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const { data } = props;

  const [isShowFilter, setIsShowFilter] = useState(false);
  const setFilterState = () => {
    setIsShowFilter(!isShowFilter);
  };
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const defaultSeason =
    searchParams.get("mua") == null
      ? new Set<String>()
      : new Set(String(searchParams.get("mua")).split(","));
  const defaultPostion =
    searchParams.get("viTri") == null
      ? new Set<String>()
      : new Set(String(searchParams.get("viTri")).split(","));

  const [seasons, setSeasons] = useState(defaultSeason);
  const [name, setName] = useState("");

  const [positions, setPosition] = useState(defaultPostion);

  const updateSeasons = (seasonId: string) => {
    if (seasons.has(seasonId)) {
      seasons.delete(seasonId);
    } else {
      seasons.add(seasonId);
    }
    setSeasons(seasons);
    forceUpdate();
  };

  const updatePostion = (position: string) => {
    if (position === "FW" && !positions.has("FW")) {
      positions.add("ST");
      positions.add("CF");
      positions.add("LW");
      positions.add("RW");
      positions.add("FW");
    } else if (position === "FW" && positions.has("FW")) {
      positions.delete("ST");
      positions.delete("CF");
      positions.delete("LW");
      positions.delete("RW");
      positions.delete("FW");
    } else if (position === "MF" && !positions.has("MF")) {
      positions.add("CAM");
      positions.add("CM");
      positions.add("MF");
      positions.add("CDM");
      positions.add("RM");
      positions.add("LM");
    } else if (position === "MF" && positions.has("MF")) {
      positions.delete("CAM");
      positions.delete("CM");
      positions.delete("CDM");
      positions.delete("RM");
      positions.delete("LM");
      positions.delete("MF");
    } else if (position === "DF" && !positions.has("DF")) {
      positions.add("CB");
      positions.add("RB");
      positions.add("LB");
      positions.add("RWB");
      positions.add("LWB");
      positions.add("DF");
    } else if (position === "DF" && positions.has("DF")) {
      positions.delete("CB");
      positions.delete("RB");
      positions.delete("LB");
      positions.delete("RWB");
      positions.delete("LWB");
      positions.delete("DF");
    } else if (positions.has(position)) {
      positions.delete(position);
    } else {
      positions.add(position);
    }

    setSeasons(seasons);
    forceUpdate();
  };

  const searchPlayer = () => {
    const params = new URLSearchParams(searchParams.toString());
    console.log(seasons);
    console.log(positions);

    params.delete("mua");
    params.delete("viTri");
    params.set("mua", Array.from(seasons).join(","));
    params.set("viTri", Array.from(positions).join(","));
    const queryString = params.toString();
    const updatedPath = queryString ? `${pathname}?${queryString}` : pathname;
    router.push(updatedPath);
  };
  return (
    <PlayerLayout>
      <HeaderPlayerInfo
        setFilterState={setFilterState}
        selectedID={seasons}
        updateSeasons={updateSeasons}
        searchPlayer={searchPlayer}
        playerName={name}
        setPlayerName={setName}
        updatePosition={updatePostion}
        selectedPostion={positions}
      />
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
            content: <Loading />,
            href: "/du-lieu-cau-thu-fc-online/danh-sach-cau-thu-yeu-thich",
          },
        ]}
        ariaLabel="Navbar danh sách cầu thủ FC Online"
      />
    </PlayerLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const query = ctx.query;
  const season = query.mua;
  const position = query.viTri;
  const params = {
    "season-id": season,
    position: position,
  };

  const data = await axiosClient
    .get<MetaDataList<PlayerSeasonRes>>(PLAYER_SEASON_URL, { params })
    .then((res: any) => res.data);
  return {
    props: { data },
  };
};
