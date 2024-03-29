import { axiosClient } from "@/api-client/axiosClient";
import PlayerDetailHeader from "@/components/pages/du-lieu-cau-thu-fc-online/PlayerDetail/PlayerDetailHeader/playerDetailHeader";
import { PlayerStatistic } from "@/components/pages/du-lieu-cau-thu-fc-online/PlayerDetail/PlayerStatistic";
import { PLAYER_SEASON_POPULAR_URL, PLAYER_SEASON_URL } from "@/interfaces";
import PlayerLayout from "@/layouts/PlayerLayout";
import { MetaData } from "@/model/common";
import { PlayerSeasonDetailRes } from "@/model/player/player";
import { Divider } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState } from "react";

type PlayerSeasonIndexProps = {
  data: PlayerSeasonDetailRes;
};

export default function PlayerDetail(props: PlayerSeasonIndexProps) {
  const { data } = props;
  const [upgrade, setUpgrade] = useState(1);
  const [level, setLevel] = useState(1);
  const [teamColor, setTeamColor] = useState(0);

  const router = useRouter();
  if (router.isFallback) {
    return <div> loading</div>;
  }
  if (!data) return null;
  return (
    <PlayerLayout>
      <div className="bg-bgWhite shadow-md   xss:max-mobileMiddle:px-0 px-20  mobile:max-laptop:px-2 mobileMiddle:max-mobile:px-0">
        <div className="header__infomation flex flex-col gap-4 pt-6 ">
          <h1 className="font-semibold text-[17px]">
            {data.playerInfo.fullName +
              " mùa giải " +
              data.season.shortName.toUpperCase()}
          </h1>

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
      </div>
    </PlayerLayout>
  );
}

export async function generateStaticParams() {}

export async function getStaticProps(context: {
  params: { playerDetail: string };
}) {
  try {
    const data = await getPlayerSeasonDetail(context.params.playerDetail);
    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}

async function getPlayerSeasonDetail(playerDetail: string) {
  try {
    const data = await axiosClient
      .get<PlayerSeasonDetailRes>(
        PLAYER_SEASON_URL.concat("/").concat(playerDetail)
      )
      .then((res: any) => res.data.data);
    return data;
  } catch (error) {
    throw Error("Server Error, Please check log on server!");
  }
}

export async function getStaticPaths() {
  try {
    const data = await axiosClient
      .get<MetaData<string>>(PLAYER_SEASON_POPULAR_URL)
      .then((res: any) => res.data.data);
    const paths = data.map((id: string) => ({
      params: { playerDetail: id.toString() },
    }));
    return { paths: paths, fallback: true };
  } catch (error) {
    return { paths: [], fallback: true };
  }
}
