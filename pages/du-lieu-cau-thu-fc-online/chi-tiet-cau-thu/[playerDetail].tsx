import { axiosClient } from "@/api-client/axiosClient";
import { PlayerCommonInfo } from "@/components/PlayerDetail/PlayerCommonInfo";
import { PlayerDetailAvatar } from "@/components/PlayerDetail/PlayerDetailAvatar";
import { PLAYER_SEASON_POPULAR_URL, PLAYER_SEASON_URL } from "@/interfaces";
import PlayerLayout from "@/layouts/PlayerLayout";
import { MetaData } from "@/model/common";
import { PlayerSeasonDetailRes, PlayerSeasonRes } from "@/model/player/player";
import Image from "next/image";
import style from "../../../styles/player.module.css";
import { PlayerStatistic } from "@/components/PlayerDetail/PlayerStatistic";
import { Divider } from "@nextui-org/react";

type PlayerSeasonIndexProps = {
  data: PlayerSeasonDetailRes;
};

export default function PlayerDetail(props: PlayerSeasonIndexProps) {
  const { data } = props;
  return (
    <PlayerLayout>
      <div className="header__infomation pt-10 flex flex-row">
        <div className="flex flex-row gap-8">
          <PlayerDetailAvatar data={data}></PlayerDetailAvatar>
          <PlayerCommonInfo data={data}></PlayerCommonInfo>
          <div className={style.match}></div>
        </div>
      </div>
      <Divider className="my-4" />
      <PlayerStatistic data={data}></PlayerStatistic>
    </PlayerLayout>
  );
}

export async function getStaticProps(context: {
  params: { playerDetail: string };
}) {
  console.log("-=====================");

  console.log(context.params.playerDetail);

  return {
    props: {
      data: await getPlayerSeasonDetail(context.params.playerDetail),
    },
  };
}

async function getPlayerSeasonDetail(playerDetail: string) {
  console.log("playerDetail");
  console.log(playerDetail);

  const data = await axiosClient
    .get<PlayerSeasonDetailRes>(
      PLAYER_SEASON_URL.concat("/").concat(playerDetail)
    )
    .then((res: any) => res.data.data);

  return data;
}

export async function getStaticPaths() {
  const data = await axiosClient
    .get<MetaData<string>>(PLAYER_SEASON_POPULAR_URL)
    .then((res: any) => res.data.data);
  const paths = data.map((id: string) => ({
    params: { playerDetail: id.toString() },
  }));

  return { paths: paths, fallback: true };
}
