import { useReducer, useState } from "react";
import { SquatBuilderSearchByName } from "./SquatBuilderSearchByName";
import { SquatBuilderSearchByPosition } from "./SquatBuilderSearchByPosition";
import { SquatBuilderSearchBySeason } from "./SquatBuilderSearchBySeason";
import { SquatBuilderSearchResult } from "./SquatBuilderSearchResult";
import { HeaderPlayerInfo } from "../du-lieu-cau-thu-fc-online/playerInfo/playerInfoHeader";
import { axiosClient } from "@/api-client/axiosClient";
import { MetaDataList } from "@/model/common";
import { PlayerSeasonRes } from "@/model/player/player";
import { PLAYER_SEASON_URL } from "@/interfaces";

type HeaderPlayerInfoProps = {
  setFilterState: () => void;
  searchPlayer: () => void;
  updateSeasons: (seasonId: string) => void;
  selectedID: Set<String>;
  playerName: string;
  setPlayerName: (name: string) => void;

  updatePosition: (position: string) => void;
  selectedPostion: Set<String>;
};

const SquatBuilderSearch = (props: HeaderPlayerInfoProps) => {
  const [name, setName] = useState<string>("");
  const [data, setData] = useState<[]>([]);
  const [positions, setPositions] = useState(new Set<String>());
  const [seasons, setSeasons] = useState(new Set<String>());
  const [isShowFilter, setIsShowFilter] = useState(false);

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const setFilterState = () => {
    setIsShowFilter(!isShowFilter);
  };

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

  const searchPlayer = async () => {
    try {
      let season = Array.from(seasons).join(",");
      let position = Array.from(positions).join(",");

      console.log(season);
      console.log(position);

      const params = {
        "season-id": season,
        position: position,
      };

      const { data } = await axiosClient.get<MetaDataList<PlayerSeasonRes>>(
        PLAYER_SEASON_URL,
        { params }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">FC Online | Tìm kiếm cầu thủ</h1>
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
      {data && <SquatBuilderSearchResult data={data} />}
    </div>
  );
};

export { SquatBuilderSearch };
