import { Select, SelectItem, Avatar, Input } from "@nextui-org/react";
import SelectBox from "./SelectBox";

export default function CountryHeader() {
  return (
    <div className="flex flex-row text-white  border-b-1 border-[#989696] bg-black bg-opacity-70 gap-10 xss:max-laptop:gap-0">
      <div className="flex flex-rowg gap-5">
        <div className="bg-[#1B1B1C]  w-[80px] text-center flex flex-col justify-center xss:max-mobileMiddle:w-[67px]   py-6">
          <span>Châu lục</span>
        </div>
        <div className="w-[170px] flex flex-col justify-center">
          <SelectBox></SelectBox>
        </div>
      </div>

      {/* <div className=" flex flex-row">
        <div className="bg-[#1B1B1C]  w-[100px] text-center flex flex-col justify-center    py-6 xss:max-mobileMiddle:w-[65px]">
          <span>Quốc gia</span>
        </div>
        <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center  px-2 py-3">
          <div className="flex flex-row gap-2 xss:max-mobileMiddle:gap-0"></div>
        </div>
      </div> */}
    </div>
  );
}
