import { PlayerSeasonRes } from "@/model/player/player";
import { useEffect, useState } from "react";
import TablePlayer from "./table";

type PlayerSeasonProps = {
  data: PlayerSeasonRes[];
};
export function PlayerSeasonList(props: PlayerSeasonProps) {
  const { data } = props;
  return <TablePlayer data={data}></TablePlayer>;
}
