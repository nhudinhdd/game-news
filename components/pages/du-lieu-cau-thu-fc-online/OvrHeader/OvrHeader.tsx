import { Input } from "@/components/inputs/input";
import { useState } from "react";
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
    <div className="flex flex-row text-white  border-b-1 border-[#989696] bg-black bg-opacity-70 gap-10 xss:max-laptop:gap-0">
      <div className="flex flex-row">
        <div className="bg-[#1B1B1C]  w-[100px] text-center flex flex-col justify-center xss:max-mobileMiddle:w-[67px]   py-6">
          <span>Ovr</span>
        </div>
        <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center bg-black bg-opacity-70 px-2 py-3">
          <div className="flex flex-row gap-2 xss:max-mobileMiddle:gap-0">
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

      <div className=" flex flex-row">
        <div className="bg-[#1B1B1C]  w-[100px] text-center flex flex-col justify-center    py-6 xss:max-mobileMiddle:w-[65px]">
          <span>Lương</span>
        </div>
        <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center  px-2 py-3">
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
    </div>
  );
}
