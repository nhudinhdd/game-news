import { PlayerStatisticBodyCompare } from "@/components/pages/du-lieu-cau-thu-fc-online/PlayerDetail/PlayerStatisticBodyCompare";
import { PlayerSeasonDetailRes } from "@/model/player/player";

type CompareStatistic = {
  playerData1: PlayerSeasonDetailRes;
  playerData2: PlayerSeasonDetailRes;
  upgrade: number;
  level: number;
  teamColor: number;

  upgrade2: number;
  level2: number;
  teamColor2: number;
};

export default function CommonStatistic(props: CompareStatistic) {
  const {
    playerData1,
    playerData2,
    upgrade,
    level,
    teamColor,
    upgrade2,
    level2,
    teamColor2,
  } = props;
  return (
    <div>
      <PlayerStatisticBodyCompare
        data={playerData1}
        data2={playerData2}
        upgrade={upgrade}
        level={level}
        teamColor={teamColor}
        upgrade2={upgrade2}
        level2={level2}
        teamColor2={teamColor2}
      />
    </div>
  );
}
