import { Tabs, Tab } from "@nextui-org/react";
import PlayerLayout from "@/layouts/PlayerLayout";
import BySeason from "@/components/pages/top-tier/BySeason";
import ByPosition from "@/components/pages/top-tier/ByPosition";
import BySalary from "@/components/pages/top-tier/BySalary";
import { axiosClient } from "@/api-client/axiosClient";
import { MetaDataList } from "@/model/common";
import { TOP_TIER_URL } from "@/interfaces";
import useSeason from "@/lib/useSeason";
import { SeasonRes } from "@/model/player/season";

interface DataResponse {
  season: SeasonRes[];
  bySeason: any;
  byPosition: any;
  bySalary: any;
}

const REVALIDATE_TIME = 24 * 60 * 60;

export async function getStaticProps() {
  const res = await axiosClient.get<MetaDataList<any>>(TOP_TIER_URL);
  const resData: any = res.data.data;
  return {
    props: {
      season: resData.topTierSeason?.seasonRes,
      bySeason: resData.topTierSeason?.topTierBySeason,
      byPosition: resData.topTierPositionRes?.topTierByPosition,
      bySalary: resData.topTierSalaryRes?.dailySquadSalaryRes,
    },
    revalidate: REVALIDATE_TIME,
  };
}

export default function TopTier({
  season,
  bySeason,
  byPosition,
  bySalary,
}: DataResponse) {
  return (
    <PlayerLayout>
      <div className="container xss:max-xssMiddle:max-w-[320px] flex flex-col gap-4">
        <h1 className="text-white  text-[30px] font-black leading-[120%] mb-5 font-[none]">
          Top cầu thủ FC Online
        </h1>
        <BySeason dataSeason={season} dataList={bySeason} />
        <ByPosition dataSeason={season} dataList={byPosition} />
        <BySalary dataSeason={season} dataList={bySalary} />
      </div>
    </PlayerLayout>
  );
}
