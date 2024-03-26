import { Tabs, Tab } from "@nextui-org/react";
import PlayerLayout from "@/layouts/PlayerLayout";
import BySeason from "@/components/pages/top-tier/BySeason";
import ByPosition from "@/components/pages/top-tier/ByPosition";
import BySalary from "@/components/pages/top-tier/BySalary";
import { axiosClient } from "@/api-client/axiosClient";
import { MetaDataList } from "@/model/common";
import { TOP_TIER_URL } from "@/interfaces";
import useSeason from "@/lib/useSeason";

interface DataResponse {
  bySeason: any;
  byPosition: any;
  bySalary: any;
}

export async function getStaticProps() {
  const res = await axiosClient.get<MetaDataList<any>>(TOP_TIER_URL);
  const resData: any = res.data.data;
  return {
    props: {
      bySeason: resData.topTierSeason.topTierBySeason,
      byPosition: resData.topTierPositionRes.topTierByPosition,
      bySalary: resData.topTierSalaryRes.dailySquadSalaryRes,
    },
    revalidate: 60,
  };
}

export default function TopTier({
  bySeason,
  byPosition,
  bySalary,
}: DataResponse) {
  const { data = [] } = useSeason();
  return (
    <PlayerLayout>
      <div className="container flex flex-col gap-4">
        <BySeason dataSeason={data} dataList={bySeason} />
        <ByPosition dataSeason={data} dataList={byPosition} />
        <BySalary dataSeason={data} dataList={bySalary} />
        {/* <Tabs aria-label="Options">
          <Tab key="season" title="Top theo mùa"></Tab>
          <Tab key="position" title="Top theo vị trí"></Tab>
          <Tab key="salary" title="Top theo lương"></Tab>
        </Tabs> */}
      </div>
    </PlayerLayout>
  );
}
