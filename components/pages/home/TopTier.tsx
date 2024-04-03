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
    <Tabs radius={"none"} aria-label="Tabs radius">
      <Tab key="position" title="Position">
        <TopTierByPosition />
      </Tab>
      <Tab key="salary" title="Salary">
        <TopTierBySalary dataTopTier={dataSalary} dataSeason={dataSeason} />
      </Tab>
    </Tabs>
  );
};

export default TopTierHomePage;
