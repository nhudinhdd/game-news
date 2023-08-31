import { PlayerSeasonDetailRes } from "@/model/player/player";
import { Divider } from "@nextui-org/react";
import styles from "../../styles/playerStatistic.module.css";
import { getColorClass, getStatistic } from "@/lib/common";
import clsx from "clsx";

type PlayerStatistic = {
  data: PlayerSeasonDetailRes;
  upgrade: number;
  level: number;
  teamColor: number;
};

export function PlayerStatisticBody(props: PlayerStatistic) {
  const { data, upgrade, level, teamColor } = props;
  return (
    <div className="w-full py-4 xss:max-mobile:py-1">
      <div className="flex flex-row">
        <div className="statistic1 flex flex-col px-7 gap-[7px] grow h-[162px] flex-wrap	xss:max-mobile:h-[281px] xss:max-mobile:px-4">
          <div className="flex flex-row  justify-between">
            <span>Tốc độ</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.speedSprint)
              )}
            >
              {getStatistic(data.speedSprint, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Tăng tốc</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.speedUp)
              )}
            >
              {getStatistic(data.speedUp, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Dứt điểm</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.finishing)
              )}
            >
              {getStatistic(data.finishing, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Lực sút</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.shotPower)
              )}
            >
              {getStatistic(data.shotPower, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Sút xa</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.longShot)
              )}
            >
              {getStatistic(data.longShot, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Chọn vị trí</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.positioning)
              )}
            >
              {getStatistic(data.positioning, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Volley</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.volleys)
              )}
            >
              {getStatistic(data.volleys, upgrade, level, teamColor)}
            </span>
          </div>

          <Divider
            orientation="vertical"
            className="ml-4 xss:max-mobile:hidden"
          />

          <div className="flex flex-row  justify-between">
            <span>Penalty</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.penalties)
              )}
            >
              {getStatistic(data.penalties, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Chuyền ngắn</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.shortPassing)
              )}
            >
              {getStatistic(data.shortPassing, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Tầm nhìn</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.vision)
              )}
            >
              {getStatistic(data.vision, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Tạt bóng</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.crossing)
              )}
            >
              {getStatistic(data.crossing, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Chuyền dài</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.longPassing)
              )}
            >
              {getStatistic(data.longPassing, upgrade, level, teamColor)}
            </span>
          </div>

          <Divider orientation="vertical" className="ml-1 mobile:hidden" />

          <div className="flex flex-row  justify-between">
            <span>Đá phạt</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.freeKick)
              )}
            >
              {getStatistic(data.freeKick, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Sút xoáy</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.curve)
              )}
            >
              {getStatistic(data.curve, upgrade, level, teamColor)}
            </span>
          </div>
          <Divider
            orientation="vertical"
            className="ml-4  xss:max-mobile:hidden"
          />

          <div className="flex flex-row  justify-between">
            <span>Rê bóng</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.dribbling)
              )}
            >
              {getStatistic(data.dribbling, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Giữ bóng</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.ballControl)
              )}
            >
              {getStatistic(data.ballControl, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Khéo léo</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.agility)
              )}
            >
              {getStatistic(data.agility, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Thăng bằng</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.balance)
              )}
            >
              {getStatistic(data.balance, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Phản ứng</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.reactions)
              )}
            >
              {getStatistic(data.reactions, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Kèm người</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.marking)
              )}
            >
              {getStatistic(data.marking, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Lấy bóng</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.tackleStand)
              )}
            >
              {getStatistic(data.tackleStand, upgrade, level, teamColor)}
            </span>
          </div>

          <Divider
            orientation="vertical"
            className="ml-4  xss:max-mobile:hidden"
          />

          <div className="flex flex-row  justify-between">
            <span>Cắt bóng</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.intercep)
              )}
            >
              {data.intercep}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Đánh đầu</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.heading)
              )}
            >
              {getStatistic(data.heading, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Xoạc bóng</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.tackleSliding)
              )}
            >
              {getStatistic(data.tackleSliding, upgrade, level, teamColor)}
            </span>
          </div>

          <Divider orientation="vertical" className="ml-1 mobile:hidden" />

          <div className="flex flex-row  justify-between">
            <span>Sức mạnh</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.strength)
              )}
            >
              {getStatistic(data.strength, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Thể lực</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.stamina)
              )}
            >
              {getStatistic(data.stamina, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Quyết đoán</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.aggression)
              )}
            >
              {getStatistic(data.aggression, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Nhảy</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.jumping)
              )}
            >
              {getStatistic(data.jumping, upgrade, level, teamColor)}
            </span>
          </div>

          <Divider
            orientation="vertical"
            className="ml-4  xss:max-mobile:hidden"
          />

          <div className="flex flex-row  justify-between">
            <span>Bình tĩnh</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.composure)
              )}
            >
              {getStatistic(data.composure, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>TM đổ người</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.gkDiv)
              )}
            >
              {getStatistic(data.gkDiv, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>TM bắt bóng</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.gkHanding)
              )}
            >
              {getStatistic(data.gkHanding, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>TM phát bóng</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.gkKicking)
              )}
            >
              {getStatistic(data.gkKicking, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>TM phản xạ</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.gkReactions)
              )}
            >
              {getStatistic(data.gkReactions, upgrade, level, teamColor)}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>TM chọn vị trí</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.gkPositioning)
              )}
            >
              {getStatistic(data.gkPositioning, upgrade, level, teamColor)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
