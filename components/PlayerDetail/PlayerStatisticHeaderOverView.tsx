import { Divider } from "@nextui-org/react";
import { data } from "autoprefixer";
import level from "../commonInfo/dropdown/level";
import teamColor from "../commonInfo/dropdown/teamColor";
import upgrade from "../commonInfo/dropdown/upgrade";
import StatisticHeader from "./PlayerStatisticHeader/StatisticHeader";
import { PlayerSeasonDetailRes } from "@/model/player/player";
import { useState } from "react";

type PlayerStatisticHeaderOverView = {
  data: PlayerSeasonDetailRes | null | undefined;
  upgrade: number;
  level: number;
  teamColor: number;

  data2?: PlayerSeasonDetailRes | null | undefined;
  upgrade2?: number;
  level2?: number;
  teamColor2?: number;
};
export default function PlayerStatisticHeaderOverView(
  props: PlayerStatisticHeaderOverView
) {
  const {
    data,
    upgrade,
    level,
    teamColor,
    data2,
    upgrade2,
    level2,
    teamColor2,
  } = props;
  const [activePosition, setActivePostion] = useState("OVR");
  if (!data) return null;
  return (
    <div className="flex flex-col">
      <div className="statistic__header flex flex-row justify-center  mt-8 xss:max-mobile:justify-between xss:max-mobile:px-3 grow">
        <div className="flex flex-row grow xss:max-mobile:grow-0">
          <StatisticHeader
            data1={data.pac}
            data2={data2?.pac}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="OVR"
            color="bg-[#424e77]"
            activePosition={activePosition}
            setActivePostion={setActivePostion}
          ></StatisticHeader>
        </div>

        <div className="flex flex-row grow  xss:max-mobile:grow-0">
          <StatisticHeader
            data1={data.sho}
            data2={data2?.sho}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="ST"
            color="bg-[#af1616]"
            activePosition={activePosition}
            setActivePostion={setActivePostion}
          ></StatisticHeader>
        </div>
        <div className="flex flex-row grow  xss:max-mobile:grow-0">
          <StatisticHeader
            data1={data.pas}
            data2={data2?.pas}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="L/RW"
            color="bg-[#af1616]"
            activePosition={activePosition}
            setActivePostion={setActivePostion}
          ></StatisticHeader>
        </div>
        <div className="flex flex-row  grow xss:max-mobile:grow-0">
          <StatisticHeader
            data1={data.dri}
            data2={data2?.dri}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="CF"
            color="bg-[#af1616]"
            activePosition={activePosition}
            setActivePostion={setActivePostion}
          ></StatisticHeader>
        </div>
        <div className="flex flex-row grow xss:max-mobile:grow-0">
          <StatisticHeader
            data1={data.def}
            data2={data2?.def}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            color="bg-[#41a01c]"
            title="CAM"
            activePosition={activePosition}
            setActivePostion={setActivePostion}
          ></StatisticHeader>
        </div>
        <div className="flex flex-row grow xss:max-mobile:grow-0">
          <StatisticHeader
            data1={data.phy}
            data2={data2?.phy}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            color="bg-[#41a01c]"
            title="L/RM"
            activePosition={activePosition}
            setActivePostion={setActivePostion}
          ></StatisticHeader>
        </div>
      </div>

      <div className="statistic__header flex flex-row justify-center  xss:max-mobile:justify-between xss:max-mobile:px-3 grow">
        <div className="flex flex-row grow xss:max-mobile:grow-0">
          <StatisticHeader
            data1={data.pac}
            data2={data2?.pac}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="CM"
            color="bg-[#41a01c]"
            activePosition={activePosition}
            setActivePostion={setActivePostion}
          ></StatisticHeader>
        </div>

        <div className="flex flex-row grow  xss:max-mobile:grow-0">
          <StatisticHeader
            data1={data.sho}
            data2={data2?.sho}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="CDM"
            color="bg-[#41a01c]"
            activePosition={activePosition}
            setActivePostion={setActivePostion}
          ></StatisticHeader>
        </div>
        <div className="flex flex-row  grow xss:max-mobile:grow-0">
          <StatisticHeader
            data1={data.dri}
            data2={data2?.dri}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="L/RWB"
            color="bg-[#1e4ca8]"
            activePosition={activePosition}
            setActivePostion={setActivePostion}
          ></StatisticHeader>
        </div>
        <div className="flex flex-row grow xss:max-mobile:grow-0">
          <StatisticHeader
            data1={data.def}
            data2={data2?.def}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            color="bg-[#1e4ca8]"
            title="L/RB"
            activePosition={activePosition}
            setActivePostion={setActivePostion}
          ></StatisticHeader>
        </div>
        <div className="flex flex-row grow xss:max-mobile:grow-0">
          <StatisticHeader
            data1={data.phy}
            data2={data2?.phy}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            color="bg-[#1e4ca8]"
            title="CB"
            activePosition={activePosition}
            setActivePostion={setActivePostion}
          ></StatisticHeader>
        </div>
        <div className="flex flex-row grow  xss:max-mobile:grow-0">
          <StatisticHeader
            data1={data.pas}
            data2={data2?.pas}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="GK"
            color="bg-[#cda20b]"
            activePosition={activePosition}
            setActivePostion={setActivePostion}
          ></StatisticHeader>
        </div>
      </div>
    </div>
  );
}
