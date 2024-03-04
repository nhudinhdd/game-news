import { PlayerSeasonRes } from "@/model/player/player";
import { useEffect, useReducer, useState } from "react";
import { axiosClient } from "../../api-client/axiosClient";
import { PLAYER_SEASON_FVORITE_URL, PLAYER_SEASON_URL } from "../../interfaces";

import PlayerLayout from "@/layouts/PlayerLayout";
import { MetaDataList } from "../../model/common";
import { Tabs } from "@/components/tabs/tabs";
import { Loading } from "@/components/pages";
import { PlayerSeasonList } from "@/components/pages/du-lieu-cau-thu-fc-online/playerInfo/table/playeSeasonList";
import { HeaderPlayerInfo } from "@/components/pages/du-lieu-cau-thu-fc-online/playerInfo/playerInfoHeader";
import { GetServerSideProps } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FAVORITE, saveLocalStorage } from "@/lib/common";
type PlayerSeasonIndexProps = {
  data: MetaDataList<PlayerSeasonRes>;
};

export default function PlayerSeasonIndex(props: PlayerSeasonIndexProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const { data } = props;

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
  const [ovrMin, setOvrMin] = useState("");
  const [ovrMax, setOvrMax] = useState("200");

  const [salaryMin, setSalaryMin] = useState("");
  const [salaryMax, setSalaryMax] = useState("200");
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

  const [favoriteList, saveFavoriteList] = useState<Array<string>>([]);

  useEffect(() => {
    let retString = localStorage.getItem(FAVORITE) || "[]";
    saveFavoriteList(JSON.parse(retString));
  }, []);

  const [dataFavoriePlayer, setDataFavotitePlayer] =
    useState<MetaDataList<PlayerSeasonRes>>();

  useEffect(() => {
    try {
      axiosClient
        .post<MetaDataList<PlayerSeasonRes>>(PLAYER_SEASON_FVORITE_URL, {
          playerFavoriteIds: favoriteList,
        })
        .then((res: any) => setDataFavotitePlayer(res.data));
    } catch (error) {}
  }, [favoriteList]);

  const saveFavorite = (value: string) => {
    var index = favoriteList.indexOf(value);
    if (index !== -1) {
      favoriteList.splice(index, 1);
    } else {
      favoriteList.push(value);
    }
    saveLocalStorage(FAVORITE, favoriteList);
    saveFavoriteList(favoriteList);
    forceUpdate();
    axiosClient
      .post<MetaDataList<PlayerSeasonRes>>(PLAYER_SEASON_FVORITE_URL, {
        playerFavoriteIds: favoriteList,
      })
      .then((res: any) => setDataFavotitePlayer(res.data));
  };

  const [currentTabForce, setCurrentTabForce] = useState(1);
  const searchPlayer = () => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete("mua");
    params.delete("viTri");
    params.delete("ten");
    params.delete("ovrMin");
    params.delete("ovrMax");
    params.delete("salaryMin");
    params.delete("salaryMax");

    params.set("mua", Array.from(seasons).join(","));
    params.set("viTri", Array.from(positions).join(","));
    params.set("tenCauThu", name);

    params.set("ovrMin", ovrMin);
    params.set("ovrMax", ovrMax);
    params.set("salaryMin", salaryMin);
    params.set("salaryMax", salaryMax);
    const queryString = params.toString();
    const updatedPath = queryString ? `${pathname}?${queryString}` : pathname;
    router.push(updatedPath);
    setCurrentTabForce(1);
  };
  return (
    <PlayerLayout>
      <HeaderPlayerInfo
        selectedID={seasons}
        updateSeasons={updateSeasons}
        searchPlayer={searchPlayer}
        playerName={name}
        setPlayerName={setName}
        updatePosition={updatePostion}
        selectedPostion={positions}
        likeSize={favoriteList.length}
        ovrMin={ovrMin}
        setOvrMin={setOvrMin}
        ovrMax={ovrMax}
        setOvrMax={setOvrMax}
        salaryMin={salaryMin}
        setSalaryMin={setSalaryMin}
        salaryMax={salaryMax}
        setSalaryMax={setSalaryMax}
      />
      <Tabs
        id="react-aria7602836567-:r4n:"
        tabIndex={1}
        tabs={[
          {
            title: "Danh sách cầu thủ",
            dataKey: "player-list",
            content: (
              <PlayerSeasonList
                data={data.data}
                favoriteList={favoriteList}
                saveFavorite={saveFavorite}
              />
            ),

            // href: "/du-lieu-cau-thu-fc-online",
          },
          {
            title: "Danh sách cầu thủ yêu thích",
            dataKey: "player-list-favorite",
            content:
              !dataFavoriePlayer || !dataFavoriePlayer.data.length ? (
                <Loading />
              ) : (
                <PlayerSeasonList
                  data={dataFavoriePlayer.data}
                  favoriteList={favoriteList}
                  saveFavorite={saveFavorite}
                />
              ),
            // href: "/du-lieu-cau-thu-fc-online",
          },
        ]}
        currentTabForce={currentTabForce}
        setCurrentTabForce={setCurrentTabForce}
        ariaLabel="Navbar danh sách cầu thủ FC Online"
      />
    </PlayerLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const query = ctx.query;
  const season = query.mua;
  const position = query.viTri;
  const name = query.tenCauThu;
  const ovrMin = query.ovrMin;
  const ovrMax = query.ovrMax;
  const salaryMin = query.salaryMin;
  const salaryMax = query.salaryMax;
  const params = {
    "season-id": season,
    position: position,
    "player-name": name,
    "ovr-min": ovrMin,
    "ovr-max": ovrMax,
    "salary-min": salaryMin,
    "salary-max": salaryMax,
  };

  const data = await axiosClient
    .get<MetaDataList<PlayerSeasonRes>>(PLAYER_SEASON_URL, { params })
    .then((res: any) => res.data);
  return {
    props: { data },
  };
};
