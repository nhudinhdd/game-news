import { PlayerSeasonDetailRes, PlayerSeasonRes } from "@/model/player/player";
import { Divider } from "@nextui-org/react";
import clsx from "clsx";
import StatisticHeader from "./PlayerStatisticHeader/StatisticHeader";

type PlayerStatistic = {
  data?: PlayerSeasonDetailRes | null | undefined;
  upgrade: number;
  level: number;
  teamColor: number;

  data2?: PlayerSeasonDetailRes | null | undefined;
  upgrade2?: number;
  level2?: number;
  teamColor2?: number;
  page?: string;
  className?: string;
  dataElementList?: PlayerSeasonRes | undefined;
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
    className,
    dataElementList,
  } = props;
  return (
    <div
      className={clsx(
        "statistic__header  flex flex-row justify-center pb-1 xss:max-mobile:justify-between xss:max-mobile:px-3",
        page ? "" : "  ",
        className
      )}
    >
      <div className="flex flex-row grow xss:max-mobile:grow-0">
        <StatisticHeader
          data1={dataElementList ? dataElementList.pac : data ? data.pac : 0}
          data2={data2?.pac}
          upgrade={upgrade}
          level={level}
          teamColor={teamColor}
          title="Tốc độ"
          page={page}
        ></StatisticHeader>

        <Divider
          orientation="vertical"
          className={clsx(
            "xss:max-mobile:hidden",
            className ? "bg-[#6d6c6c]" : ""
          )}
        />
      </div>

      <div className="flex flex-row grow  xss:max-mobile:grow-0">
        <StatisticHeader
          data1={dataElementList ? dataElementList.sho : data ? data.sho : 0}
          data2={data2?.sho}
          upgrade={upgrade}
          level={level}
          teamColor={teamColor}
          title="Sút"
          page={page}
        ></StatisticHeader>
        <Divider
          orientation="vertical"
          className={clsx(
            "xss:max-mobile:hidden",
            className ? "bg-[#6d6c6c]" : ""
          )}
        />
      </div>
      <div className="flex flex-row grow  xss:max-mobile:grow-0">
        <StatisticHeader
          data1={dataElementList ? dataElementList.pas : data ? data.pas : 0}
          data2={data2?.pas}
          upgrade={upgrade}
          level={level}
          teamColor={teamColor}
          title="Chuyền"
          page={page}
        ></StatisticHeader>
        <Divider
          orientation="vertical"
          className={clsx(
            "xss:max-mobile:hidden",
            className ? "bg-[#6d6c6c]" : ""
          )}
        />{" "}
      </div>
      <div className="flex flex-row  grow xss:max-mobile:grow-0">
        <StatisticHeader
          data1={dataElementList ? dataElementList.dri : data ? data.dri : 0}
          data2={data2?.dri}
          upgrade={upgrade}
          level={level}
          teamColor={teamColor}
          title="Rê bóng"
          page={page}
        ></StatisticHeader>
        <Divider
          orientation="vertical"
          className={clsx(
            "xss:max-mobile:hidden",
            className ? "bg-[#6d6c6c]" : ""
          )}
        />{" "}
      </div>
      <div className="flex flex-row grow xss:max-mobile:grow-0">
        <StatisticHeader
          data1={dataElementList ? dataElementList.def : data ? data.def : 0}
          data2={data2?.def}
          upgrade={upgrade}
          level={level}
          teamColor={teamColor}
          title="Phòng thủ"
          page={page}
        ></StatisticHeader>

        <Divider
          orientation="vertical"
          className={clsx(
            "xss:max-mobile:hidden",
            className ? "bg-[#6d6c6c]" : ""
          )}
        />
      </div>
      <div className="flex flex-row grow xss:max-mobile:grow-0">
        <StatisticHeader
          data1={dataElementList ? dataElementList.phy : data ? data.phy : 0}
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
