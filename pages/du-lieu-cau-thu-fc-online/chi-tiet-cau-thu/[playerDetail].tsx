import { axiosClient } from "@/api-client/axiosClient";
import { PlayerCommonInfo } from "@/components/PlayerDetail/PlayerCommonInfo";
import { PlayerDetailAvatar } from "@/components/PlayerDetail/PlayerDetailAvatar";
import PlayerDetailHeader from "@/components/PlayerDetail/PlayerDetailHeader/playerDetailHeader";
import { PlayerStatistic } from "@/components/PlayerDetail/PlayerStatistic";
import { NotFound } from "@/components/pages";
import { PLAYER_SEASON_POPULAR_URL, PLAYER_SEASON_URL } from "@/interfaces";
import PlayerLayout from "@/layouts/PlayerLayout";
import { MetaData } from "@/model/common";
import { PlayerSeasonDetailRes } from "@/model/player/player";
import { Divider } from "@nextui-org/react";
import { useState } from "react";

type PlayerSeasonIndexProps = {
  data: PlayerSeasonDetailRes;
};

export default function PlayerDetail(props: PlayerSeasonIndexProps) {
  const { data } = props;
  const [upgrade, setUpgrade] = useState(1);
  const [level, setLevel] = useState(1);
  const [teamColor, setTeamColor] = useState(1);
  if (!data) return <NotFound />;
  return (
    <PlayerLayout>
      <div className="header__infomation pt-10 flex flex-row">
        <PlayerDetailHeader
          data={data}
          setUpgrade={setUpgrade}
          setLevel={setLevel}
          setTeamColor={setTeamColor}
          upgrade={upgrade}
          level={level}
          teamColor={teamColor}
          classNames="flex flex-row gap-8 xss:max-mobile:gap-[10px]"
        ></PlayerDetailHeader>
      </div>
      <Divider className="my-4" />
      <PlayerStatistic
        data={data}
        upgrade={upgrade}
        level={level}
        teamColor={teamColor}
      ></PlayerStatistic>
    </PlayerLayout>
  );
}

export async function getStaticProps(context: {
  params: { playerDetail: string };
}) {
  let data = null;
  try {
    data = await getPlayerSeasonDetail(context.params.playerDetail);
    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    return {
      props: { data },
    };
  }
}

async function getPlayerSeasonDetail(playerDetail: string) {
  let data = null;
  try {
    data = await axiosClient
      .get<PlayerSeasonDetailRes>(
        PLAYER_SEASON_URL.concat("/").concat(playerDetail)
      )
      .then((res: any) => res.data.data);
    return data;
  } catch (error) {
    return data;
  }
}

export async function getStaticPaths() {
  let data = null;
  try {
    data = await axiosClient
      .get<MetaData<string>>(PLAYER_SEASON_POPULAR_URL)
      .then((res: any) => res.data.data);
    const paths = data.map((id: string) => ({
      params: { playerDetail: id.toString() },
    }));

    return { paths: paths, fallback: true };
  } catch (error) {
    return data;
  }
}
