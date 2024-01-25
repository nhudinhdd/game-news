import { axiosClient } from "@/api-client/axiosClient";
import RelatedSeasonOnlyIcon from "@/components/commonInfo/subInfo/related/relatedSeasonOnlyIcon";
import CompareTab from "@/components/compare/tab/compareTab";
import PlayerDetailHeader from "@/components/pages/du-lieu-cau-thu-fc-online/PlayerDetail/PlayerDetailHeader/playerDetailHeader";
import { PLAYER_SEASON_URL } from "@/interfaces";
import PlayerLayout from "@/layouts/PlayerLayout";
import DefaultLayout from "@/layouts/default";
import { PlayerSeasonDetailRes } from "@/model/player/player";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PlayerCompare() {
  const router = useRouter();

  const [playerIds, setPlayerIds] = useState(
    Array.from(router.query.playerIds || "")
      .join("")
      .split("-vs-")
  );
  const [playerId1, setPlayerId1] = useState(playerIds.at(0));
  const [playerId2, setPlayerId2] = useState(playerIds.at(1));
  const [playerData1, setPlayerData1] = useState<PlayerSeasonDetailRes>();
  const [playerData2, setPlayerData2] = useState<PlayerSeasonDetailRes>();
  const [upgrade, setUpgrade] = useState(1);
  const [level, setLevel] = useState(1);
  const [teamColor, setTeamColor] = useState(1);

  const [upgrade2, setUpgrade2] = useState(1);
  const [level2, setLevel2] = useState(1);
  const [teamColor2, setTeamColor2] = useState(1);
  useEffect(() => {
    const playerIds = Array.from(router.query.playerIds || "")
      .join("")
      .split("-vs-");

    setPlayerId1(playerIds.at(0));
    setPlayerId2(playerIds.at(1));
  }, [router.query.playerIds]);

  useEffect(() => {
    if (!playerId1) return;

    const fetchData1 = async () => {
      const response1 = await axiosClient
        .get<PlayerSeasonDetailRes>(
          PLAYER_SEASON_URL.concat("/").concat(playerId1)
        )
        .then((res: any) => res.data.data);

      setPlayerData1(response1);
    };

    fetchData1();
  }, [playerId1]);

  useEffect(() => {
    if (!playerId2) return;

    const fetchData2 = async () => {
      const response2 = await axiosClient
        .get<PlayerSeasonDetailRes>(
          PLAYER_SEASON_URL.concat("/").concat(playerId2)
        )
        .then((res: any) => res.data.data);

      setPlayerData2(response2);
    };
    fetchData2();
  }, [playerId2]);

  return (
    <DefaultLayout>
      <div className="desktop:w-[1050px] mobile:max-laptop:w-full flex flex-col justify-center pt-5 ">
        <div className="flex flex-row justify-between gap-10 xss:max-mobile:gap-0 menu-cotainer">
          <div>
            <PlayerDetailHeader
              data={playerData1}
              setUpgrade={setUpgrade}
              setLevel={setLevel}
              setTeamColor={setTeamColor}
              upgrade={upgrade}
              level={level}
              teamColor={teamColor}
              page="compare"
              classNames="flex flex-row gap-4 xss:max-mobile:gap-[3px]"
            ></PlayerDetailHeader>
            {/* <PlayerStatisticHeader
              data={playerData1}
              upgrade={upgrade}
              level={level}
              teamColor={teamColor}
              page="compare"
            /> */}
            <RelatedSeasonOnlyIcon
              data={playerData1?.relateSeason}
              setPlayerId={setPlayerId1}
            />
          </div>

          <div>
            <PlayerDetailHeader
              data={playerData2}
              setUpgrade={setUpgrade2}
              setLevel={setLevel2}
              setTeamColor={setTeamColor2}
              upgrade={upgrade2}
              level={level2}
              teamColor={teamColor2}
              page="compare"
              pageNumber={2}
              classNames="flex flex-row mobile:gap-4 xss:max-mobile:gap-[3px] flex-row-reverse"
            ></PlayerDetailHeader>
            {/* <PlayerStatisticHeader
              data={playerData2}
              upgrade={upgrade}
              level={level}
              teamColor={teamColor}
              page="compare"
            /> */}
            <RelatedSeasonOnlyIcon
              data={playerData2?.relateSeason}
              pageNumber={2}
              setPlayerId={setPlayerId2}
            />
          </div>
        </div>
      </div>

      <CompareTab
        playerData1={playerData1}
        playerData2={playerData2}
        upgrade={upgrade}
        level={level}
        teamColor={teamColor}
        upgrade2={upgrade2}
        level2={level2}
        teamColor2={teamColor2}
      ></CompareTab>
    </DefaultLayout>
  );
}
