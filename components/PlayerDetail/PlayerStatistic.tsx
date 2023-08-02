import { PlayerSeasonDetailRes } from "@/model/player/player";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import PlayerStatisticHeader from "./PlayerSeatisticHeader";
import { PlayerStatisticBody } from "./PlayerStatisticBody";
import PlayerDetailSubInfo from "./PlayerDetailSubInfo";
type PlayerStatistic = {
  data: PlayerSeasonDetailRes;
};

export function PlayerStatistic(props: PlayerStatistic) {
  const { data } = props;
  return (
    <div className="mt-10">
      <PlayerStatisticHeader data={data} />
      <PlayerStatisticBody data={data} />
      <PlayerDetailSubInfo data={data}></PlayerDetailSubInfo>
    </div>
  );
}
