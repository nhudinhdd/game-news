import { Select, SelectItem, Avatar, Input } from "@nextui-org/react";
import SelectBox from "./SelectBox";
import useNation from "@/lib/useNation";

export default function CountryHeader() {
  const { data = [] } = useNation();

  return (
    <div className="flex flex-row text-white  border-b-1 border-[#989696] bg-black bg-opacity-70 gap-10 xss:max-laptop:gap-0">
      <div className="flex flex-rowg gap-5">
        <div className="bg-[#1B1B1C]  w-[80px] text-center flex flex-col justify-center xss:max-mobileMiddle:w-[67px]   py-6">
          <span>Châu lục</span>
        </div>
        <div className="w-[170px] flex flex-col justify-center">
          <Select
            radius="sm"
            className="max-w-xs dark rounded-sm"
            labelPlacement="outside"
            //   selectorIcon={<SelectorIcon />}
            scrollShadowProps={{
              isEnabled: false,
            }}
          >
            <SelectItem key={"0fdce07c-88cc-4482-bf63-19a255882ea9"}>
              Nam Mỹ
            </SelectItem>
            <SelectItem key={"2258c543-1766-4de8-9d14-9298d152f7ad"}>
              Bắc và Trung Mỹ
            </SelectItem>
            <SelectItem key={"54c9f958-7ea1-48e9-8334-48dd7f8e654c"}>
              Châu Á
            </SelectItem>
            <SelectItem key={"71a5bc17-07d3-4b3b-96c0-ba32f422dfbf"}>
              Châu Âu
            </SelectItem>
            <SelectItem key={"7e5dac04-982d-4b7f-bc4b-4a58d44488a0"}>
              Châu Phi
            </SelectItem>
            <SelectItem key={"bfed63a9-4932-4640-aaa4-3e0df234bb21"}>
              Châu Đại Dương
            </SelectItem>
          </Select>
        </div>
      </div>
      <div className="flex flex-rowg gap-5">
        <div className="bg-[#1B1B1C]  w-[80px] text-center flex flex-col justify-center xss:max-mobileMiddle:w-[67px]   py-6">
          <span>Quốc gia</span>
        </div>
        <div className="w-[170px] flex flex-col justify-center">
          <Select
            items={data}
            radius="sm"
            className="w-[190px] dark rounded-sm"
            labelPlacement="outside"
            //   selectorIcon={<SelectorIcon />}
            scrollShadowProps={{
              isEnabled: false,
            }}
            renderValue={(items) => {
              return items.map((item) => (
                <div key={item.key} className="flex items-center gap-2">
                  <div className="flex flex-col w-[100px]">
                    <span className="truncate">{item.data?.nationName}</span>
                    {/* <span className="text-default-500 text-tiny">
                      ({item.data?.name})
                    </span> */}
                  </div>
                </div>
              ));
            }}
          >
            {(e) => (
              <SelectItem key={e.nationName} textValue={e.nationName}>
                <div className="flex gap-2 items-center">
                  <div className="w-[10px] ">
                    <span className="text-small truncate">{e.nationName}</span>
                  </div>
                </div>
              </SelectItem>
            )}
          </Select>
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
