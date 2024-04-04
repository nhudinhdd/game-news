import { Tab, Tabs } from "@nextui-org/react";
import React from "react";
import TopTierByPosition from "./TopTierByPosition";
import TopTierBySalary from "./TopTierBySalary";

interface Props {
  dataPosition: any;
  dataSalary: any;
  dataSeason: any;
}

const TopTierHomePage = ({ dataPosition, dataSalary, dataSeason }: Props) => {
  return (
    <div className="w-[320px] h-[370px] p-4">
      <Tabs
        radius={"none"}
        aria-label="Tabs radius"
        fullWidth
        classNames={{
          panel: "p-0",
          tabList: "p-0",
          cursor: "bg-primary",
          tabContent: "group-data-[selected=true]:text-white",
        }}
      >
        <Tab key="position" title="Position">
          <TopTierBySalary
            dataTopTier={dataPosition}
            dataSeason={dataSeason}
            type="position"
          />
        </Tab>
        <Tab key="salary" title="Salary">
          <TopTierBySalary
            dataTopTier={dataSalary}
            dataSeason={dataSeason}
            type="salary"
          />
        </Tab>
      </Tabs>
    </div>
  );
};

export default TopTierHomePage;
