import { PlayerSeasonDetailRes } from "@/model/player/player";
import { Divider, ScrollShadow } from "@nextui-org/react";
import StatisticHeader from "./PlayerStatisticHeader/StatisticHeader";
import clsx from "clsx";

type PlayerStatistic = {
  data: PlayerSeasonDetailRes | null | undefined;
  upgrade: number;
  level: number;
  teamColor: number;

  data2?: PlayerSeasonDetailRes | null | undefined;
  upgrade2?: number;
  level2?: number;
  teamColor2?: number;
  page?: string;
};

export default function PlayerStatisticHeader(props: PlayerStatistic) {
  const {
    data,
    upgrade,
    level,
    teamColor,
    data2,
    upgrade2,
    level2,
    teamColor2,
    page,
  } = props;
  if (!data) return null;
  return (
    // <ScrollShadow
    //   className={clsx(page == "compare" ? "xss:max-mobile:w-[250px]" : "")}
    //   orientation="horizontal"
    //   isEnabled={false}
    // >
    <div
      className={clsx(
        "statistic__header  flex flex-row justify-center pb-1 xss:max-mobile:justify-between xss:max-mobile:px-3",
        page ? "" : "  "
      )}
    >
      <div className="flex flex-row grow xss:max-mobile:grow-0">
        <StatisticHeader
          data1={data.pac}
          data2={data2?.pac}
          upgrade={upgrade}
          level={level}
          teamColor={teamColor}
          title="Tốc độ"
          page={page}
        ></StatisticHeader>

        <Divider orientation="vertical" className="xss:max-mobile:hidden" />
      </div>

      <div className="flex flex-row grow  xss:max-mobile:grow-0">
        <StatisticHeader
          data1={data.sho}
          data2={data2?.sho}
          upgrade={upgrade}
          level={level}
          teamColor={teamColor}
          title="Sút"
          page={page}
        ></StatisticHeader>
        <Divider orientation="vertical" className="xss:max-mobile:hidden" />
      </div>
      <div className="flex flex-row grow  xss:max-mobile:grow-0">
        <StatisticHeader
          data1={data.pas}
          data2={data2?.pas}
          upgrade={upgrade}
          level={level}
          teamColor={teamColor}
          title="Chuyền"
          page={page}
        ></StatisticHeader>

        <Divider orientation="vertical" className="xss:max-mobile:hidden" />
      </div>
      <div className="flex flex-row  grow xss:max-mobile:grow-0">
        <StatisticHeader
          data1={data.dri}
          data2={data2?.dri}
          upgrade={upgrade}
          level={level}
          teamColor={teamColor}
          title="Rê bóng"
          page={page}
        ></StatisticHeader>
        <Divider orientation="vertical" className="xss:max-mobile:hidden" />
      </div>
      <div className="flex flex-row grow xss:max-mobile:grow-0">
        <StatisticHeader
          data1={data.def}
          data2={data2?.def}
          upgrade={upgrade}
          level={level}
          teamColor={teamColor}
          title="Phòng thủ"
          page={page}
        ></StatisticHeader>

        <Divider orientation="vertical" className="xss:max-mobile:hidden" />
      </div>
      <div className="flex flex-row grow xss:max-mobile:grow-0">
        <StatisticHeader
          data1={data.phy}
          data2={data2?.phy}
          upgrade={upgrade}
          level={level}
          teamColor={teamColor}
          title="Thể lực"
          page={page}
        ></StatisticHeader>
      </div>
    </div>
    // </ScrollShadow>
  );
}
