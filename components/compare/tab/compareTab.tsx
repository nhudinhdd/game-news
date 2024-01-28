import PlayerTraits from "@/components/commonInfo/subInfo/playerTraits";
import StarSkill from "@/components/starSkill/StarSkill";
import { getComparePageByPosition } from "@/lib/commonExportPage";
import { PlayerSeasonDetailRes } from "@/model/player/player";
import { ScrollShadow, Tab, Tabs } from "@nextui-org/react";
import { clsx } from "clsx";
import CompareRow from "../row/compareRow";
import CommonStatistic from "../statistic/commonStatistic";
import AllPosition from "../statistic/fo4style/allPosition";
import style from "../../../styles/compare.module.css";
import PlayerClubs from "@/components/commonInfo/subInfo/playerClubs";

type CompareTab = {
  playerData1?: PlayerSeasonDetailRes | null;
  playerData2?: PlayerSeasonDetailRes | null;

  upgrade: number;
  level: number;
  teamColor: number;

  upgrade2: number;
  level2: number;
  teamColor2: number;
};
export default function CompareTab(props: CompareTab) {
  const {
    playerData1,
    playerData2,
    upgrade,
    level,
    teamColor,
    upgrade2,
    level2,
    teamColor2,
  } = props;

  if (!playerData1 || !playerData2) return null;
  let keys1 = Object.keys(playerData1.positionOvr).map(function (key) {
    return key;
  });

  let keys2 = Object.keys(playerData2.positionOvr).map(function (key) {
    return key;
  });
  let keys = Array.from(new Set(keys1.concat(keys2)));

  return (
    <div className="">
      <Tabs
        aria-label="Danh sach chức năng so sánh chỉ số"
        variant="underlined"
        className="font-semibold first:first:first:!w-full "
        classNames={{
          tabList:
            "gap-6   w-full  xss:max-mobile:gap-0 xss:max-mobile:w-[300px] laptop:w-[650px] mobile:max-laptop:w-[550px]",
          tab: "w-full",
          cursor: "w-full",
        }}
      >
        <Tab title="Thuộc tính ">
          <div>
            <Tabs
              aria-label="So sánh thuộc tính vị trí"
              variant="solid"
              radius="sm"
              // color="warning"
              className="pl-6  xss:max-mobile:w-[300px] overflow-x-auto"
              classNames={{
                tabList: "  w-full  ",
              }}
            >
              <Tab
                title="C.Số Chung"
                className="text-textStatic font-sans font-medium "
              >
                <CommonStatistic
                  playerData1={playerData1}
                  playerData2={playerData2}
                  upgrade={upgrade}
                  level={level}
                  teamColor={teamColor}
                  upgrade2={upgrade2}
                  level2={level2}
                  teamColor2={teamColor2}
                ></CommonStatistic>
              </Tab>
              {keys.map((value) => (
                <Tab
                  title={value}
                  key={value}
                  className="text-textStatic font-sans font-medium"
                >
                  {getComparePageByPosition(value, playerData1, playerData2)}
                </Tab>
              ))}

              <Tab title="Tất cả vị trí">
                <AllPosition
                  positionAll1={playerData1.positionAll}
                  mainPosition1={playerData1.playerMainPosition}
                  ovrMainPostion1={playerData1.ovr}
                  positionAll2={playerData2.positionAll}
                  mainPosition2={playerData2.playerMainPosition}
                  ovrMainPostion2={playerData2.ovr}
                ></AllPosition>
              </Tab>
            </Tabs>
          </div>
        </Tab>
        <Tab title="Thông tin chung" className="flex justify-center">
          <div className="thongTinChung flex flex-col gap-3   xss:max-mobileMiddle:w-[350px]  w-[370px] px-20 grow xss:max-laptop:px-8">
            <CompareRow
              value1={playerData1.height}
              value2={playerData2.height}
              title="Chiều cao"
            ></CompareRow>
            <CompareRow
              value1={playerData1.weight}
              value2={playerData2.weight}
              title="Cân nặng"
            ></CompareRow>

            <CompareRow
              value1={
                <StarSkill numberSkill={Number(playerData1.skill)}></StarSkill>
              }
              value2={
                <StarSkill numberSkill={Number(playerData2.skill)}></StarSkill>
              }
              title="Cân nặng"
            ></CompareRow>

            <CompareRow
              value1={playerData1.fitness}
              value2={playerData2.fitness}
              title="Thể hình"
            ></CompareRow>

            <CompareRow
              value1={
                <div>
                  <span
                    className={clsx(
                      playerData1.favoriteFoot == 2
                        ? "font-black"
                        : "font-normal text-[#717070]",
                      "mr-1"
                    )}
                  >
                    L{playerData1.leftFoot}
                  </span>
                  <span>-</span>
                  <span
                    className={clsx(
                      playerData1.favoriteFoot == 1
                        ? "font-black"
                        : "font-normal text-[#717070]",
                      "ml-1"
                    )}
                  >
                    R{playerData1.rightFoot}
                  </span>
                </div>
              }
              value2={
                <div>
                  <span
                    className={clsx(
                      playerData2.favoriteFoot == 2
                        ? "font-black"
                        : "font-normal text-[#717070]",
                      "mr-1"
                    )}
                  >
                    L{playerData2.leftFoot}
                  </span>
                  <span>-</span>
                  <span
                    className={clsx(
                      playerData2.favoriteFoot == 1
                        ? "font-black"
                        : "font-normal text-[#717070]",
                      "ml-1"
                    )}
                  >
                    R{playerData2.rightFoot}
                  </span>
                </div>
              }
              title="Chân thuận"
            ></CompareRow>

            <CompareRow
              value1={playerData1.reputation}
              value2={playerData2.reputation}
              title="Danh tiếng"
              isEnd={true}
            ></CompareRow>
          </div>
        </Tab>
        <Tab title="Chỉ số ẩn">
          <div className="flex flex-row">
            <ScrollShadow hideScrollBar className="h-[300px] basis-1/2 mr-7">
              <PlayerTraits
                data={playerData1.playerSeasonTrait}
                pageNumber={1}
              ></PlayerTraits>
            </ScrollShadow>

            <ScrollShadow hideScrollBar className="h-[300px] basis-1/2 mr-7">
              <PlayerTraits data={playerData2.playerSeasonTrait}></PlayerTraits>
            </ScrollShadow>
          </div>
        </Tab>
        <Tab title="Sự nghiệp câu lạc bộ">
          <div className="flex flex-row">
            <ScrollShadow hideScrollBar className="h-[300px] basis-1/2 mr-7">
              <PlayerClubs
                data={playerData1.playerInfo.playerTeams}
                fullName={playerData1.playerInfo.fullName}
                pageNumber={1}
              ></PlayerClubs>
            </ScrollShadow>

            <ScrollShadow hideScrollBar className="h-[300px] basis-1/2 mr-7">
              <PlayerClubs
                data={playerData2.playerInfo.playerTeams}
                fullName={playerData1.playerInfo.fullName}
              ></PlayerClubs>
            </ScrollShadow>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
