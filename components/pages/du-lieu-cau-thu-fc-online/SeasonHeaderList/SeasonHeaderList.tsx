import useSeason from "@/lib/useSeason";
import clsx from "clsx";
import Image from "next/image";
import { useReducer, useState } from "react";

type SeasonHeaderList = {
  updateSeasons: (seasonId: string) => void;
  selectedID: Set<String>;
};

export default function SeasonHeaderList(props: SeasonHeaderList) {
  const { updateSeasons, selectedID } = props;
  const [activeSeason, setActiveSeason] = useState("");
  const { data = [] } = useSeason();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  return (
    <div className="flex flex-row text-white  border-b-1 border-[#989696]">
      <div className="bg-[#1B1B1C]  w-20 text-center flex flex-col justify-center py-6 xss:max-mobileMiddle:w-14">
        <span>Mùa</span>
      </div>
      <div className=" py-6 bg-black bg-opacity-70 flex w-full">
        <div className="flex flex-row flex-wrap h-[200px] overflow-y-auto  ">
          {data.map((v, index) => (
            <div
              key={v.seasonID}
              onClick={() => updateSeasons(v.seasonID)}
              className={clsx(
                "flex flex-row gap-3 py-1 flex_basic1_7  mobile:max-middeLaptop:basis-1/6  xss:max-mobileMiddle:basis-1/6 pl-3  xss:max-mobileMiddle:pl-2 cursor-pointer   border-r border-b border-[#3b3b3b] ",
                // index % 2 == 0 ? "bg-[#242424]" : "",
                selectedID.has(v.seasonID)
                  ? "bg-[#f4f4f8] text-black font-semibold   border-r border-b hover:bg-[#cbcaca]  border-[#bebebe] "
                  : "hover:bg-[#3f3f45] "
              )}
            >
              <div className="flex flex-col justify-center">
                <Image
                  src={v.logo}
                  alt={
                    "Mùa giải " +
                    v.fullName +
                    " trong FC online | Fifa online 4"
                  }
                  width={25}
                  height={22}
                  className=""
                ></Image>
              </div>

              <span className="text-[14px] flex flex-col justify-center xss:max-mobile:hidden">
                {v.shortName ? v.shortName.toLocaleUpperCase() : ""}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
