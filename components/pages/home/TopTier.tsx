import { Tab, Tabs } from "@nextui-org/react";
import React from "react";
import TopTierByPosition from "./TopTierByPosition";
import TopTierBySalary from "./TopTierBySalary";
import TopTierBySeason from "./TopTierBySeason";

interface Props {
  dataPosition: any;
  dataSalary: any;
  dataSeason: any;
  seasonList: any;
}

const TopTierHomePage = ({
  dataPosition,
  dataSalary,
  seasonList,
  dataSeason,
}: Props) => {
  return (
    <div className="w-[320px] h-[370px] p-4 mx-auto">
      <Tabs
        radius={"none"}
        aria-label="Tabs radius"
        fullWidth
        classNames={{
          panel: "p-0",
          tabList: "p-0",
          cursor: "bg-[#00c7ff]",
          tabContent: "group-data-[selected=true]:text-white",
        }}
      >
        <Tab key="season" title="Mùa giải">
          <TopTierBySeason dataTopTier={dataSeason} dataSeason={seasonList} />
        </Tab>
        <Tab key="position" title="Vị trí">
          <TopTierByPosition
            dataTopTier={dataPosition}
            dataSeason={seasonList}
          />
        </Tab>
        <Tab key="salary" title="Lương">
          <TopTierBySalary dataTopTier={dataSalary} dataSeason={seasonList} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default TopTierHomePage;
