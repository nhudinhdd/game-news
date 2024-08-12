import { Select, SelectItem, Avatar, Input } from "@nextui-org/react";
import SelectBox from "./SelectBox";
import useNation from "@/lib/useNation";
import CommonSearchHeader from "../CommonSeachHeader";
import BackGroundHeader from "../BackGroundSearchHeader";
import React from "react";
import { log } from "console";

type OvrHeader = {
  continent: string;
  setContinent: (continent: string) => void;
  nation: string;
  setNation: (nation: string) => void;
};

export default function CountryHeader(props: OvrHeader) {
  const { continent, setContinent, nation, setNation } = props;

  const { data = [] } = useNation();

  const hanldeSelectContinent = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setContinent(e.target.value.toString());
  };

  const hanldeSelectNationtion = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setNation(e.target.value.toString());
  };
  return (
    <div>
      <BackGroundHeader>
        <div className="flex flex-row gap-2 ">
          <CommonSearchHeader title={"Châu lục"}></CommonSearchHeader>
          <div className="w-[190px] flex flex-col justify-center">
            <Select
              radius="sm"
              className="max-w-xs dark rounded-sm"
              labelPlacement="outside"
              scrollShadowProps={{
                isEnabled: false,
              }}
              onChange={hanldeSelectContinent}
              selectedKeys={new Set([continent])}
              aria-label="Tìm kiếm cầu thủ FC Online theo châu lục"
            >
              <SelectItem
                key={"nam-my"}
                aria-label="Tìm kiếm cầu thủ FC Online theo châu Nam Mỹ"
              >
                Nam Mỹ
              </SelectItem>
              <SelectItem
                key={"bac-va-trung-my"}
                aria-label="Tìm kiếm cầu thủ FC Online theo châu Bắc và Trung Mỹ"
              >
                Bắc và Trung Mỹ
              </SelectItem>
              <SelectItem
                key={"chau-a"}
                aria-label="Tìm kiếm cầu thủ FC Online theo châu Châu Á"
              >
                Châu Á
              </SelectItem>
              <SelectItem
                key={"chau-au"}
                aria-label="Tìm kiếm cầu thủ FC Online theo châu Châu Âu"
              >
                Châu Âu
              </SelectItem>
              <SelectItem
                key={"chau-phi"}
                aria-label="Tìm kiếm cầu thủ FC Online theo châu Châu Phi"
              >
                Châu Phi
              </SelectItem>
              <SelectItem
                key={"chau-dai-duong"}
                aria-label="Tìm kiếm cầu thủ FC Online theo châu Châu Đại Dương"
              >
                Châu Đại Dương
              </SelectItem>
            </Select>
          </div>
        </div>
        <div className="flex flex-row gap-2 xss:max-mobile:hidden">
          <CommonSearchHeader title={"Quốc gia"}></CommonSearchHeader>
          <div className="w-[170px] flex flex-col justify-center">
            <Select
              items={data}
              radius="sm"
              className="w-[190px] dark rounded-sm"
              labelPlacement="outside"
              scrollShadowProps={{
                isEnabled: false,
              }}
              onChange={hanldeSelectNationtion}
              selectedKeys={new Set([nation])}
              renderValue={(items) => {
                return items.map((item) => (
                  <div key={item.key} className="flex items-center gap-2">
                    <div className="flex flex-col w-[100px]">
                      <span className="truncate">{item.data?.nationName}</span>
                    </div>
                  </div>
                ));
              }}
              aria-label="Tìm kiếm cầu thủ FC Online theo quốc gia"
            >
              {(e) => (
                <SelectItem
                  key={e.nationName}
                  textValue={e.nationName}
                  aria-label={
                    `Tìm kiếm cầu thủ FC Online theo quốc gia ` + e.nationName
                  }
                >
                  <div className="flex gap-2 items-center">
                    <div className="w-[10px] ">
                      <span className="text-small truncate">
                        {e.nationName}
                      </span>
                    </div>
                  </div>
                </SelectItem>
              )}
            </Select>
          </div>
        </div>
      </BackGroundHeader>
      <div className=" mobile:hidden">
        <BackGroundHeader>
          <div className="flex flex-row gap-2">
            <CommonSearchHeader title={"Quốc gia"}></CommonSearchHeader>
            <div className="w-[170px] flex flex-col justify-center">
              <Select
                items={data}
                radius="sm"
                className="w-[190px] dark rounded-sm"
                labelPlacement="outside"
                scrollShadowProps={{
                  isEnabled: false,
                }}
                renderValue={(items) => {
                  return items.map((item) => (
                    <div key={item.key} className="flex items-center gap-2">
                      <div className="flex flex-col w-[100px]">
                        <span className="truncate">
                          {item.data?.nationName}
                        </span>
                      </div>
                    </div>
                  ));
                }}
                aria-label="test"
              >
                {(e) => (
                  <SelectItem key={e.nationName} textValue={e.nationName}>
                    <div className="flex gap-2 items-center">
                      <div className="w-[10px] ">
                        <span className="text-small truncate">
                          {e.nationName}
                        </span>
                      </div>
                    </div>
                  </SelectItem>
                )}
              </Select>
            </div>
          </div>
        </BackGroundHeader>
      </div>
    </div>
  );
}
