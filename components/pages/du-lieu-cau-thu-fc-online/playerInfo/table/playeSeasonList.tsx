import { PlayerSeasonRes } from "@/model/player/player";
import { useEffect, useState } from "react";
import TablePlayer from "./table";

type PlayerSeasonProps = {
  data: PlayerSeasonRes[];
  favoriteList: Array<string>;
  saveFavorite: (value: string) => void;
  setDataPlayerForcus?: (playerSeasonId: string) => void;
};
export function PlayerSeasonList(props: PlayerSeasonProps) {
  const { data, favoriteList, saveFavorite, setDataPlayerForcus } = props;
  return (
    <TablePlayer
      data={data}
      favoriteList={favoriteList}
      saveFavorite={saveFavorite}
      setDataPlayerForcus={setDataPlayerForcus}
    ></TablePlayer>
  );
}
