import { PlayerSeasonDetailRes } from "@/model/player/player";
import { Divider } from "@nextui-org/react";
import styles from "../../styles/playerStatistic.module.css";
import clsx from "clsx";
import { getColorClass } from "@/lib/common";

type PlayerStatistic = {
  data: PlayerSeasonDetailRes;
};

export default function PlayerStatisticHeader(props: PlayerStatistic) {
  const { data } = props;
  return (
    <div className="statistic__header w-full h-20 flex flex-row justify-center rounded-lg mb-2 py-3">
      <div className="flex flex-row">
        <div className="flex flex-col self-center mt-2 gap-2 w-[135px] text-center px-5 grow">
          <span className=" text-[16px] text-foreground-500 mb-[10]">
            Tốc độ
          </span>
          <span
            className={clsx(
              "text-[24px] ",
              styles.statistic,
              getColorClass(data.pac)
            )}
          >
            {data.pac}
          </span>
        </div>
        <Divider orientation="vertical" />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col self-center gap-2 mt-2 w-[135px] text-center px-5 grow">
          <span className="  text-[16px] text-foreground-500 mb-[10]">Sút</span>
          <span
            className={clsx(
              "text-[24px]",
              styles.statistic,
              getColorClass(data.sho)
            )}
          >
            {data.sho}
          </span>
        </div>
        <Divider orientation="vertical" />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col self-center gap-2 mt-2 w-[135px] text-center px-5 grow">
          <span className="text-[16px] text-foreground-500  mb-[10]">
            Chuyền
          </span>
          <span
            className={clsx(
              "text-[24px] ",
              styles.statistic,
              getColorClass(data.pas)
            )}
          >
            {data.pas}
          </span>
        </div>
        <Divider orientation="vertical" />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col self-center gap-2 mt-2 w-[135px] text-center px-5 grow">
          <span className="text-[16px] text-foreground-500 mb-[10]">
            Rê bóng
          </span>
          <span
            className={clsx(
              "text-[24px]",
              styles.statistic,
              getColorClass(data.dri)
            )}
          >
            {data.dri}
          </span>
        </div>
        <Divider orientation="vertical" />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col self-center gap-2 mt-2 w-[135px] text-center px-5 grow">
          <span className="text-[16px] text-foreground-500  mb-[10]">
            Phòng thủ
          </span>
          <span
            className={clsx(
              "text-[24px]",
              styles.statistic,
              getColorClass(data.def)
            )}
          >
            {data.def}
          </span>
        </div>
        <Divider orientation="vertical" />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col self-center gap-2 mt-2 w-[135px] text-center px-5 grow">
          <span className="text-[16px] text-foreground-500  mb-[10]">
            Thể lực
          </span>
          <span
            className={clsx(
              "text-[24px]",
              styles.statistic,
              getColorClass(data.phy)
            )}
          >
            {data.phy}
          </span>
        </div>
      </div>
    </div>
  );
}
