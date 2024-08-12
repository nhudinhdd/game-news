import { Select, SelectItem, Avatar, Chip, Tooltip } from "@nextui-org/react";
import SelectBox from "../contryHeader/SelectBox";
import useTrait from "@/lib/useTrait";
import { SetStateAction, useEffect, useState } from "react";
import BackGroundHeader from "../BackGroundSearchHeader";
import CommonSearchHeader from "../CommonSeachHeader";

type OvrHeader = {
  trait: string;
  setTrait: (trait: string) => void;
  leftFoot: string;
  setLeftFoot: (leftFoot: string) => void;
  rightFoot: string;
  setRightFoot: (rightFoot: string) => void;
};

export default function AttribuiteSearch(props: OvrHeader) {
  const { trait, setTrait, leftFoot, setLeftFoot, rightFoot, setRightFoot } =
    props;

  const { data = [] } = useTrait();

  const hanldeSelectTrait = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTrait(e.target.value.toString());
  };

  const hanldeSelectLeftFoot = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLeftFoot(e.target.value.toString());
  };

  const hanldeSelectRightFoot = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setRightFoot(e.target.value.toString());
  };

  return (
    <div>
      <BackGroundHeader>
        <div className="flex flex-row gap-2">
          <CommonSearchHeader title={"Chỉ số ẩn"}></CommonSearchHeader>
          <div className="flex flex-col   max-w-md items-start justify-center bg-black bg-opacity-70 w-[190px] ">
            <div className="flex flex-row  xss:max-mobileMiddle:gap-0 ">
              <Select
                aria-label="Tìm kiếm theo chỉ số ẩn FC online"
                items={data}
                radius="sm"
                className="w-[190px] dark rounded-sm"
                labelPlacement="outside"
                scrollShadowProps={{
                  isEnabled: false,
                }}
                onChange={hanldeSelectTrait}
                selectedKeys={trait ? new Set(trait.split(",")) : ""}
                isMultiline={true}
                selectionMode="multiple"
                placeholder="Chỉ số ẩn FCO"
                renderValue={(items) => {
                  return (
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <div key={item.key} className="flex items-center gap-2">
                          <Tooltip content={item.data?.name}>
                            <Avatar
                              alt={item.data?.name}
                              className=""
                              size="sm"
                              src={item.data?.logo}
                            />
                          </Tooltip>
                        </div>
                      ))}
                    </div>
                  );
                }}
              >
                {(e) => (
                  <SelectItem key={e.traitID}>
                    <div className="flex gap-2 items-center">
                      <Avatar
                        alt={e.name}
                        className="w-6 h-6"
                        size="sm"
                        src={e.logo}
                      />
                      <div className="w-[10px] ">
                        <span className="text-small truncate">{e.name}</span>
                      </div>
                    </div>
                  </SelectItem>
                )}
              </Select>
            </div>
          </div>
        </div>

        <div className="flex flex-row xss:max-mobile:hidden">
          <CommonSearchHeader title={"Chân trái"}></CommonSearchHeader>
          <div className="flex flex-col gap-2  justify-center  py-3  w-[70px] px-2">
            <div className="xss:max-mobileMiddle:gap-0">
              <Select
                aria-label="Tìm kiếm theo chuân thuận FC online"
                radius="sm"
                className="max-w-xs dark rounded-sm w-[70px]"
                labelPlacement="outside"
                //   selectorIcon={<SelectorIcon />}
                scrollShadowProps={{
                  isEnabled: false,
                }}
                onChange={hanldeSelectLeftFoot}
                selectedKeys={new Set([leftFoot])}
              >
                <SelectItem key={""}>--</SelectItem>
                <SelectItem key={1}>1</SelectItem>
                <SelectItem key={2}>2</SelectItem>
                <SelectItem key={3}>3</SelectItem>
                <SelectItem key={4}>3</SelectItem>
                <SelectItem key={5}>5</SelectItem>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex flex-row ml-5 xss:max-mobile:hidden">
          <CommonSearchHeader title={"Chân phải"}></CommonSearchHeader>
          <div className="flex flex-col gap-2  justify-center  py-3  w-[70px] px-2">
            <div className="xss:max-mobileMiddle:gap-0">
              <Select
                aria-label="Tìm kiếm theo chuân thuận FC online"
                radius="sm"
                className="max-w-xs dark rounded-sm w-[70px]"
                labelPlacement="outside"
                //   selectorIcon={<SelectorIcon />}
                scrollShadowProps={{
                  isEnabled: false,
                }}
                onChange={hanldeSelectRightFoot}
                selectedKeys={new Set([rightFoot])}
              >
                <SelectItem key={""}>--</SelectItem>
                <SelectItem key={1}>1</SelectItem>
                <SelectItem key={2}>2</SelectItem>
                <SelectItem key={3}>3</SelectItem>
                <SelectItem key={4}>4</SelectItem>
                <SelectItem key={5}>5</SelectItem>
              </Select>
            </div>
          </div>
        </div>
      </BackGroundHeader>

      <div className="mobile:hidden">
        <BackGroundHeader>
          <div className="flex flex-row">
            <CommonSearchHeader title={"Chân trái"}></CommonSearchHeader>
            <div className="flex flex-col gap-2  justify-center  py-3  w-[70px] px-2">
              <div className="xss:max-mobileMiddle:gap-0">
                <Select
                  aria-label="Tìm kiếm theo chuân thuận FC online"
                  radius="sm"
                  className="max-w-xs dark rounded-sm w-[70px]"
                  labelPlacement="outside"
                  //   selectorIcon={<SelectorIcon />}
                  scrollShadowProps={{
                    isEnabled: false,
                  }}
                  onChange={hanldeSelectLeftFoot}
                  selectedKeys={new Set([leftFoot])}
                >
                  <SelectItem key={""}>--</SelectItem>
                  <SelectItem key={1}>1</SelectItem>
                  <SelectItem key={2}>2</SelectItem>
                  <SelectItem key={3}>3</SelectItem>
                  <SelectItem key={4}>4</SelectItem>
                  <SelectItem key={5}>5</SelectItem>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex flex-row ml-5">
            <CommonSearchHeader title={"Chân phải"}></CommonSearchHeader>
            <div className="flex flex-col gap-2  justify-center  py-3  w-[70px] px-2">
              <div className="xss:max-mobileMiddle:gap-0">
                <Select
                  aria-label="Tìm kiếm theo chuân thuận FC online"
                  radius="sm"
                  className="max-w-xs dark rounded-sm w-[70px]"
                  labelPlacement="outside"
                  //   selectorIcon={<SelectorIcon />}
                  scrollShadowProps={{
                    isEnabled: false,
                  }}
                  onChange={hanldeSelectRightFoot}
                  selectedKeys={new Set([rightFoot])}
                >
                  <SelectItem key={""}>--</SelectItem>
                  <SelectItem key={1}>1</SelectItem>
                  <SelectItem key={2}>2</SelectItem>
                  <SelectItem key={3}>3</SelectItem>
                  <SelectItem key={4}>4</SelectItem>
                  <SelectItem key={5}>5</SelectItem>
                </Select>
              </div>
            </div>
          </div>
        </BackGroundHeader>
      </div>
    </div>
  );
}
