import { PlayerSeasonDetailRes } from "@/model/player/player";
import PlayerStatisticHeader from "./PlayerSeatisticHeader";
import { PlayerStatisticBody } from "./PlayerStatisticBody";
import PlayerDetailSubInfo from "./PlayerDetailSubInfo";
type PlayerStatistic = {
  data: PlayerSeasonDetailRes;
  upgrade: number;
  level: number;
  teamColor: number;
};

export function PlayerStatistic(props: PlayerStatistic) {
  const { data, upgrade, level, teamColor } = props;
  return (
    <div className="mt-10 text-[#757574] font-sans font-medium">
      <PlayerStatisticHeader
        data={data}
        upgrade={upgrade}
        level={level}
        teamColor={teamColor}
      />
      <PlayerStatisticBody
        data={data}
        upgrade={upgrade}
        level={level}
        teamColor={teamColor}
      />
      <PlayerDetailSubInfo data={data}></PlayerDetailSubInfo>
    </div>
  );
}
