import { PlayerSeasonDetailRes } from "@/model/player/player";
import { Divider } from "@nextui-org/react";
import styles from "../../styles/playerStatistic.module.css";
import clsx from "clsx";
import { getColorClass, getStatistic } from "@/lib/common";

type PlayerStatistic = {
  data: PlayerSeasonDetailRes;
  upgrade: number;
  level: number;
  teamColor: number;
};

export default function PlayerStatisticHeader(props: PlayerStatistic) {
  const { data, upgrade, level, teamColor } = props;
  return (
    <div className="statistic__header h-20 flex flex-row justify-center  mb-2 py-3  xss:max-mobile:justify-between xss:max-mobile:px-3">
      <div className="flex flex-row grow xss:max-mobile:grow-0">
        <div className="flex flex-col self-center mt-2 gap-2 w-[135px]  xss:max-mobile:w-auto mobile:max-laptop:w-[120px] text-center px-5 xss:max-mobile:px-0 grow ">
          <span className=" text-[16px] text-foreground-500 mb-[10]">
            Tốc độ
          </span>
          <span
            className={clsx(
              styles.statistic,
              "text-[28px] xss:max-mobile:text-[24px]",

              getColorClass(data.pac)
            )}
          >
            {getStatistic(data.pac, upgrade, level, teamColor)}
          </span>
        </div>
        <Divider orientation="vertical" className="xss:max-mobile:hidden" />
      </div>
      <div className="flex flex-row grow  xss:max-mobile:grow-0">
        <div className="flex flex-col self-center gap-2 mt-2 w-[135px]    xss:max-mobile:w-auto mobile:max-laptop:w-[120px] text-center px-5 xss:max-mobile:px-0 grow">
          <span className="text-[16px] text-foreground-500 mb-[10]">Sút</span>
          <span
            className={clsx(
              "text-[28px] xss:max-mobile:text-[24px]",
              styles.statistic,
              getColorClass(data.sho)
            )}
          >
            {getStatistic(data.sho, upgrade, level, teamColor)}
          </span>
        </div>
        <Divider orientation="vertical" className="xss:max-mobile:hidden" />
      </div>
      <div className="flex flex-row grow  xss:max-mobile:grow-0">
        <div className="flex flex-col self-center gap-2 mt-2 w-[135px]  xss:max-mobile:w-auto mobile:max-laptop:w-[120px] text-center px-5 xss:max-mobile:px-0 grow">
          <span className="text-[16px] text-foreground-500  mb-[10]">
            Chuyền
          </span>
          <span
            className={clsx(
              "text-[28px] xss:max-mobile:text-[24px] ",
              styles.statistic,
              getColorClass(data.pas)
            )}
          >
            {getStatistic(data.pas, upgrade, level, teamColor)}
          </span>
        </div>
        <Divider orientation="vertical" className="xss:max-mobile:hidden" />
      </div>
      <div className="flex flex-row  grow xss:max-mobile:grow-0">
        <div className="flex flex-col self-center gap-2 mt-2 w-[135px]    xss:max-mobile:w-auto mobile:max-laptop:w-[120px] text-center px-5  xss:max-mobile:px-0 ">
          <span className="text-[16px] text-foreground-500 mb-[10]">
            Rê bóng
          </span>
          <span
            className={clsx(
              "text-[28px] xss:max-mobile:text-[24px]",
              styles.statistic,
              getColorClass(data.dri)
            )}
          >
            {getStatistic(data.dri, upgrade, level, teamColor)}
          </span>
        </div>
        <Divider orientation="vertical" className="xss:max-mobile:hidden" />
      </div>
      <div className="flex flex-row grow xss:max-mobile:grow-0">
        <div className="flex flex-col self-center gap-2 mt-2 w-[135px]   xss:max-mobile:w-auto mobile:max-laptop:w-[120px] text-center px-5 xss:max-mobile:px-0 grow ">
          <span className="text-[16px] text-foreground-500  mb-[10]">
            Phòng thủ
          </span>
          <span
            className={clsx(
              "text-[28px] xss:max-mobile:text-[24px]",
              styles.statistic,
              getColorClass(data.def)
            )}
          >
            {getStatistic(data.def, upgrade, level, teamColor)}
          </span>
        </div>
        <Divider orientation="vertical" className="xss:max-mobile:hidden" />
      </div>
      <div className="flex flex-row grow xss:max-mobile:grow-0">
        <div className="flex flex-col self-center gap-2 mt-2 w-[135px]   xss:max-mobile:w-auto mobile:max-laptop:w-[119px] text-center px-5  xss:max-mobile:px-0 grow  ">
          <span className="text-[16px] text-foreground-500  mb-[10]">
            Thể lực
          </span>
          <span
            className={clsx(
              "text-[28px] xss:max-mobile:text-[24px]",
              styles.statistic,
              getColorClass(getStatistic(data.phy, upgrade, level, teamColor))
            )}
          >
            {getStatistic(data.phy, upgrade, level, teamColor)}
          </span>
        </div>
      </div>
    </div>
  );
}
