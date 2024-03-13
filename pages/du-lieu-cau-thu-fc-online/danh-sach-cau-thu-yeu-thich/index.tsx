// import { axiosClient } from "@/api-client/axiosClient";
// import { Loading } from "@/components/pages";
// import { HeaderPlayerInfo } from "@/components/pages/du-lieu-cau-thu-fc-online/playerInfo/playerInfoHeader";
// import { PlayerSeasonList } from "@/components/pages/du-lieu-cau-thu-fc-online/playerInfo/table/playeSeasonList";
// import { Tabs } from "@/components/tabs/tabs";
// import { PLAYER_SEASON_FVORITE_URL } from "@/interfaces";
// import PlayerLayout from "@/layouts/PlayerLayout";
// import { FAVORITE, getLocalStorege, saveLocalStorage } from "@/lib/common";
// import { MetaDataList } from "@/model/common";
// import { PlayerSeasonRes } from "@/model/player/player";
// import { useSearchParams, usePathname } from "next/navigation";
// import { useRouter } from "next/router";
// import { useEffect, useReducer, useState } from "react";

// export default function PlayerSeasonIndex() {
//   const [isShowFilter, setIsShowFilter] = useState(false);
//   const setFilterState = () => {
//     setIsShowFilter(!isShowFilter);
//   };

//   const [data, setData] = useState<MetaDataList<PlayerSeasonRes>>();

//   const [favoriteList, saveFavoriteList] = useState<Array<string>>([]);

//   useEffect(() => {
//     let retString = localStorage.getItem(FAVORITE) || "[]";
//     saveFavoriteList(JSON.parse(retString));
//   }, []);

//   useEffect(() => {
//     try {
//       axiosClient
//         .post<MetaDataList<PlayerSeasonRes>>(PLAYER_SEASON_FVORITE_URL, {
//           playerFavoriteIds: favoriteList,
//         })
//         .then((res: any) => setData(res.data));
//     } catch (error) {}
//   }, [favoriteList]);

//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const router = useRouter();

//   const [, forceUpdate] = useReducer((x) => x + 1, 0);
//   const defaultSeason =
//     searchParams.get("mua") == null
//       ? new Set<String>()
//       : new Set(String(searchParams.get("mua")).split(","));
//   const defaultPostion =
//     searchParams.get("viTri") == null
//       ? new Set<String>()
//       : new Set(String(searchParams.get("viTri")).split(","));

//   const [seasons, setSeasons] = useState(defaultSeason);
//   const [name, setName] = useState("");

//   const [positions, setPosition] = useState(defaultPostion);

//   const updateSeasons = (seasonId: string) => {
//     if (seasons.has(seasonId)) {
//       seasons.delete(seasonId);
//     } else {
//       seasons.add(seasonId);
//     }
//     setSeasons(seasons);
//     forceUpdate();
//   };

//   const updatePostion = (position: string) => {
//     if (position === "FW" && !positions.has("FW")) {
//       positions.add("ST");
//       positions.add("CF");
//       positions.add("LW");
//       positions.add("RW");
//       positions.add("FW");
//     } else if (position === "FW" && positions.has("FW")) {
//       positions.delete("ST");
//       positions.delete("CF");
//       positions.delete("LW");
//       positions.delete("RW");
//       positions.delete("FW");
//     } else if (position === "MF" && !positions.has("MF")) {
//       positions.add("CAM");
//       positions.add("CM");
//       positions.add("MF");
//       positions.add("CDM");
//       positions.add("RM");
//       positions.add("LM");
//     } else if (position === "MF" && positions.has("MF")) {
//       positions.delete("CAM");
//       positions.delete("CM");
//       positions.delete("CDM");
//       positions.delete("RM");
//       positions.delete("LM");
//       positions.delete("MF");
//     } else if (position === "DF" && !positions.has("DF")) {
//       positions.add("CB");
//       positions.add("RB");
//       positions.add("LB");
//       positions.add("RWB");
//       positions.add("LWB");
//       positions.add("DF");
//     } else if (position === "DF" && positions.has("DF")) {
//       positions.delete("CB");
//       positions.delete("RB");
//       positions.delete("LB");
//       positions.delete("RWB");
//       positions.delete("LWB");
//       positions.delete("DF");
//     } else if (positions.has(position)) {
//       positions.delete(position);
//     } else {
//       positions.add(position);
//     }

//     setSeasons(seasons);
//     forceUpdate();
//   };

//   const searchPlayer = () => {
//     const params = new URLSearchParams(searchParams.toString());

//     params.delete("mua");
//     params.delete("viTri");
//     params.set("mua", Array.from(seasons).join(","));
//     params.set("viTri", Array.from(positions).join(","));
//     const queryString = params.toString();
//     const updatedPath = queryString ? `${pathname}?${queryString}` : pathname;
//     router.push({
//       pathname: "/du-lieu-cau-thu-fc-online",
//       query: queryString,
//     });
//   };

//   const saveFavorite = (value: string) => {
//     var index = favoriteList.indexOf(value);
//     if (index !== -1) {
//       favoriteList.splice(index, 1);
//     } else {
//       favoriteList.push(value);
//     }
//     saveLocalStorage(FAVORITE, favoriteList);
//     saveFavoriteList(favoriteList);
//     forceUpdate();
//   };

//   return (
//     <PlayerLayout>
//       <HeaderPlayerInfo
//         selectedID={seasons}
//         updateSeasons={updateSeasons}
//         searchPlayer={searchPlayer}
//         playerName={name}
//         setPlayerName={setName}
//         updatePosition={updatePostion}
//         selectedPostion={positions}
//         likeSize={favoriteList.length}
//       />
//       <Tabs
//         id="react-aria7602836567-:r4n:"
//         tabIndex={2}
//         tabs={[
//           {
//             title: "Danh sách cầu thủ",
//             dataKey: "player-list",
//             content: <Loading />,
//             href: "/du-lieu-cau-thu-fc-online",
//           },
//           {
//             title: "Danh sách cầu thủ yêu thích",
//             dataKey: "player-list-favorite",
//             content:
//               !data || !data.data.length ? (
//                 <Loading />
//               ) : (
//                 <PlayerSeasonList
//                   data={data.data}
//                   favoriteList={favoriteList}
//                   saveFavorite={saveFavorite}
//                 />
//               ),
//             href: "/du-lieu-cau-thu-fc-online/danh-sach-cau-thu-yeu-thich",
//           },
//         ]}
//         ariaLabel="Navbar danh sách cầu thủ FC Online"
//       />
//     </PlayerLayout>
//   );
// }
