import { Input } from "@/components/inputs/input";
import { useState } from "react";
import BackGroundHeader from "../BackGroundSearchHeader";
import CommonSearchHeader from "../CommonSeachHeader";
type OvrHeader = {
  ovrMin: string;
  setOvrMin: (ovr: string) => void;
  ovrMax: string;
  setOvrMax: (ovr: string) => void;

  salaryMin: string;
  setSalaryMin: (ovr: string) => void;
  salaryMax: string;
  setSalaryMax: (ovr: string) => void;
};

export default function OvrHeader(props: OvrHeader) {
  const {
    ovrMin,
    setOvrMin,
    ovrMax,
    setOvrMax,

    salaryMin,
    setSalaryMin,
    salaryMax,
    setSalaryMax,
  } = props;

  return (
    <BackGroundHeader>
      <div className="flex flex-row gap-2">
        <CommonSearchHeader title={"Ovr"}></CommonSearchHeader>

        <div className="flex flex-col gap-2  h-full max-w-md items-start justify-center bg-black bg-opacity-70">
          <div className="flex flex-row gap-2 xss:max-mobileMiddle:gap-0 mobile:w-[190px] xss:max-mobile:w-[120px]">
            <Input
              value={ovrMin}
              onChange={(e) => setOvrMin(e.target.value)}
              placeholder="Min"
              className="border-none w-[80px] xss:max-mobile:w-[50px] bg-darkGray2 rounded-none font-semibold text-textMobileStatistic text-bgWhite"
            />
            <Input
              value={ovrMax}
              onChange={(e) => setOvrMax(e.target.value)}
              placeholder="Max"
              className="border-none w-[80px]  xss:max-mobile:w-[50px] bg-darkGray2 rounded-none font-semibold text-textMobileStatistic text-bgWhite"
            />
          </div>
        </div>
      </div>

      <div className=" flex flex-row ">
        <CommonSearchHeader title={"Lương"}></CommonSearchHeader>
        <div className="flex flex-col gap-2 h-full max-w-md items-start justify-center  px-2 py-3">
          <div className="flex flex-row gap-2 xss:max-mobileMiddle:gap-0">
            <Input
              value={salaryMin}
              onChange={(e) => setSalaryMin(e.target.value)}
              placeholder="Min"
              className="border-none w-[80px] xss:max-mobile:w-[50px] bg-darkGray2 rounded-none font-semibold text-textMobileStatistic text-bgWhite"
            />
            <Input
              value={salaryMax}
              onChange={(e) => setSalaryMax(e.target.value)}
              placeholder="Max"
              className="border-none w-[80px] xss:max-mobile:w-[50px] bg-darkGray2 rounded-none font-semibold text-textMobileStatistic text-bgWhite"
            />
          </div>
        </div>
      </div>
    </BackGroundHeader>
  );
}
