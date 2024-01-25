// @ts-nocheck

import {
  FOOT,
  HEIGHT,
  OVR,
  POSITION,
  POSITIO_DETAIL,
  SALARY,
  WEIGHT,
  YEAR,
} from "@/lib/common";
import useSeason from "@/lib/useSeason";
import { Divider } from "@nextui-org/react";
import clsx from "clsx";
import { Roboto } from "next/font/google";
import { useEffect, useReducer, useState } from "react";
import { SelectBox } from "./selectbox/selectbox";
import { TabSearch } from "./tabbar/tabbar";
import Concact from "./concat";
import UpgradeFilterDropDown from "./dropdown/upgrade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/buttons/Button";
const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["vietnamese"],
  display: "swap",
});

export function Search() {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  const [positionTile, setPositionTitle] = useState("Vị trí");
  const [positionDetailTile, setPositionDetailTitle] =
    useState("Chi tiết vị trí");

  const [ovrStart, setOvrStart] = useState("- -");
  const [ovrEnd, setOvrEnd] = useState("- -");

  const [salaryStart, setSalaryStart] = useState("- -");
  const [salaryEnd, setSalaryEnd] = useState("- -");

  const [heightStart, setHeightStart] = useState("- -");
  const [heightEnd, setHeightEnd] = useState("- -");

  const [weightStart, setWeightStart] = useState("- -");
  const [weightEnd, setWeightEnd] = useState("- -");

  const [yearStart, setYearStart] = useState("- -");
  const [yearEnd, setYearEnd] = useState("- -");

  const [skillFootLeft, setSkillFootLeft] = useState("- -");
  const [skillFootRight, setSkillFootRight] = useState("- -");

  const [seasons, setSeasons] = useState(new Set<string>());
  const [titleSeason, setTitleSeason] = useState("Mùa");
  const [positionDetailStatus, setPositionDetailStatus] = useState(false);
  const { data = [] } = useSeason();

  useEffect(() => {
    if (positionTile != "Vị trí") {
      setPositionDetailStatus(true);
    }

    if (positionTile === "Vị trí") {
      setPositionDetailTitle("Chi tiết vị trí");
      setPositionDetailStatus(false);
    }
  }, [positionTile]);

  return (
    <div className={clsx(roboto.className, "font-[sans-serif]")}>
      <Button onClick={onClick}>
        <FontAwesomeIcon width="20" icon={faFilter} />
        <p className="ml-1">Nâng cao</p>
      </Button>
      <div
        className={`menu ${
          isActive ? "active " : "inactive"
        } bg-[#18181B] flex flex-row rounded-lg`}
      >
        <div className="searchCache bg-[#1d1d1f] w-[20%] flex flex-col rounded-lg">
          <div className="h-[65%] bg-white flex flex-col">
            <TabSearch title="Tìm kiếm cơ bản" isActive={true} />
            <TabSearch title="Lưu tìm kiếm 1" isActive={false} />
            <TabSearch title="Lưu tìm kiếm 2" isActive={false} />
            <TabSearch title="Lưu tìm kiếm 3" isActive={false} />
          </div>
        </div>
        <div className="grow bg-[#18181B] rounded-lg">
          <div className="headerSearch flex flex-row w-full justify-between px-3 h-14">
            <div className="flex justify-center flex-col">
              <span className={"text-lg"}>Tìm kiếm cơ bản</span>
            </div>
            <div className="flex justify-center flex-col">
              <Button radius="full" className="w-[120px] h-7">
                Tạo lại
              </Button>
            </div>
          </div>

          <Divider></Divider>
          <div className="flex flex-row text-sm text-[#c7c5c5]  px-8 h-[320px] pt-4 pb-6">
            <div className="flex flex-col">
              <div className="flex flex-col gap-[3px] grow">
                <span>Vị trí</span>
                <div className="flex flex-col gap-[3px]">
                  <SelectBox
                    title={positionTile}
                    type="DROP_DOWN"
                    isInline={false}
                    values={POSITION}
                    setTile={setPositionTitle}
                    contentEditable={false}
                  />

                  <SelectBox
                    title={positionDetailTile}
                    type="DROP_DOWN"
                    isInline={false}
                    isActive={positionDetailStatus}
                    values={POSITIO_DETAIL.get(positionTile) || []}
                    setTile={setPositionDetailTitle}
                    contentEditable={false}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[3px] grow">
                <span>OVR</span>
                <div className="flex flex-row gap-[3px]">
                  <SelectBox
                    title={ovrStart}
                    type="DROP_DOWN"
                    isInline={true}
                    values={OVR}
                    setTile={setOvrStart}
                    contentEditable={true}
                  />
                  <Concact />

                  <SelectBox
                    title={ovrEnd}
                    type="DROP_DOWN"
                    isInline={true}
                    values={OVR}
                    setTile={setOvrEnd}
                    contentEditable={true}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[3px] grow">
                <span>Lương</span>
                <div className="flex flex-row gap-[3px]">
                  <SelectBox
                    title={salaryStart}
                    type="DROP_DOWN"
                    isInline={true}
                    values={SALARY}
                    setTile={setSalaryStart}
                    contentEditable={true}
                  />
                  <Concact />
                  <SelectBox
                    title={salaryEnd}
                    type="DROP_DOWN"
                    isInline={true}
                    values={SALARY}
                    setTile={setSalaryEnd}
                    contentEditable={true}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[3px] ">
                <span>Mùa</span>
                <SelectBox
                  title={titleSeason}
                  type="MENU"
                  isInline={false}
                  valuesSeason={data}
                  selectedID={seasons}
                  selectedList={setSeasons}
                />
              </div>
            </div>
            <Divider
              orientation="vertical"
              className="mx-2 h-[256px] mt-[24px]"
            ></Divider>
            <div className="flex flex-col">
              <div className="flex flex-col gap-[3px] grow">
                <span>Nâng cấp</span>
                <div className="flex flex-row gap-[3px] relative">
                  <UpgradeFilterDropDown isInline={true} />
                  <Concact />
                  <UpgradeFilterDropDown isInline={true} />
                </div>
              </div>

              <div className="flex flex-col gap-[3px] grow">
                <span>Chiều cao</span>
                <div className="flex flex-row gap-[3px]">
                  <SelectBox
                    title={heightStart}
                    type="DROP_DOWN"
                    isInline={true}
                    setTile={setHeightStart}
                    values={HEIGHT}
                    contentEditable={true}
                  />
                  <Concact />

                  <SelectBox
                    title={heightEnd}
                    type="DROP_DOWN"
                    isInline={true}
                    setTile={setHeightEnd}
                    values={HEIGHT}
                    contentEditable={true}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[3px] grow">
                <span>Cân nặng</span>
                <div className="flex flex-row gap-[3px]">
                  <SelectBox
                    title={weightStart}
                    type="DROP_DOWN"
                    values={WEIGHT}
                    setTile={setWeightStart}
                    isInline={true}
                    contentEditable={true}
                  />
                  <Concact />

                  <SelectBox
                    title={weightEnd}
                    type="DROP_DOWN"
                    values={WEIGHT}
                    setTile={setWeightEnd}
                    isInline={true}
                    contentEditable={true}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[3px] grow">
                <span>Thể hình</span>
                <SelectBox
                  title="Thể hình"
                  type="DROP_DOWN"
                  valueDropdown={["a"]}
                  isInline={false}
                />
              </div>

              <div className="flex flex-col gap-[3px] ">
                <span>Năm sinh</span>
                <div className="flex flex-row gap-[3px]">
                  <SelectBox
                    title={yearStart}
                    type="DROP_DOWN"
                    isInline={true}
                    values={YEAR}
                    setTile={setYearStart}
                    contentEditable={true}
                  />
                  <Concact />
                  <SelectBox
                    title={yearEnd}
                    type="DROP_DOWN"
                    isInline={true}
                    values={YEAR}
                    setTile={setYearEnd}
                    contentEditable={true}
                  />
                </div>
              </div>
            </div>

            <Divider
              orientation="vertical"
              className="mx-2 h-[256px] mt-[24px]"
            ></Divider>
            <div className="flex flex-col">
              <div className="flex flex-col gap-[3px] grow">
                <span>Kĩ năng 2 chân</span>
                <div className="flex flex-row gap-[3px]">
                  <SelectBox
                    title={skillFootLeft}
                    type="DROP_DOWN"
                    values={FOOT}
                    setTile={setSkillFootLeft}
                    isInline={true}
                  />
                  <Concact />
                  <SelectBox
                    title={skillFootRight}
                    type="DROP_DOWN"
                    values={FOOT}
                    setTile={setSkillFootRight}
                    isInline={true}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[3px] grow">
                <span>Kĩ thuật</span>
                <SelectBox
                  title="Kĩ thuật"
                  type="DROP_DOWN"
                  valueDropdown={["a"]}
                  isInline={false}
                />
              </div>

              <div className="flex flex-col gap-[3px] grow">
                <span>Team color</span>
                <div className="flex flex-col gap-[3px] grow">
                  <SelectBox
                    title="Loại team color"
                    type="MENU"
                    valueDropdown={["a"]}
                    isInline={false}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[3px] ">
                <span>Giải/đội</span>
                <div className="flex flex-col gap-[3px] grow">
                  <SelectBox
                    title="Giải đấu"
                    type="MENU"
                    valueDropdown={["a"]}
                    isInline={false}
                  />
                  <SelectBox
                    title="Đội bóng"
                    type="MENU"
                    valueDropdown={["a"]}
                    isInline={false}
                    isActive={false}
                  />
                </div>
              </div>
            </div>

            <Divider
              orientation="vertical"
              className="mx-2  h-[256px] mt-[24px]"
            ></Divider>
            <div className="flex flex-col justify-between ">
              <div className="flex flex-col gap-[9px] grow ">
                <span>Quốc tịch</span>
                <div className="flex flex-col gap-[9px]">
                  <SelectBox
                    title="Lục địa"
                    type="MENU"
                    valueDropdown={["a"]}
                    isInline={false}
                  />
                  <SelectBox
                    title="Quốc gia"
                    type="MENU"
                    valueDropdown={["a"]}
                    isInline={false}
                    isActive={false}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[9px]">
                <span>C.Số ẩn</span>
                <div className="flex flex-col gap-[9px]">
                  <SelectBox
                    title="C.Số ẩn 1"
                    type="DROP_DOWN"
                    valueDropdown={["a"]}
                    isInline={false}
                  />
                  <SelectBox
                    title="C.Số ẩn 2"
                    type="DROP_DOWN"
                    valueDropdown={["a"]}
                    isInline={false}
                  />
                  <SelectBox
                    title="C.Số ẩn 3"
                    type="DROP_DOWN"
                    valueDropdown={["a"]}
                    isInline={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
