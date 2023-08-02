import { PlayerSeasonDetailRes } from "@/model/player/player";
import { Divider } from "@nextui-org/react";
import styles from "../../styles/playerStatistic.module.css";
import { getColorClass } from "@/lib/common";
import clsx from "clsx";

type PlayerStatistic = {
  data: PlayerSeasonDetailRes;
};

export function PlayerStatisticBody(props: PlayerStatistic) {
  const { data } = props;
  return (
    <div className="grid grid-cols-5 w-full py-4">
      <div className="flex flex-row">
        <div className="statistic1 flex flex-col px-7 gap-[7px] grow">
          <div className="flex flex-row  justify-between">
            <span>Tốc độ</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.speedSprint)
              )}
            >
              {data.speedSprint}
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
              {data.speedUp}
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
              {data.finishing}
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
              {data.shotPower}
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
              {data.longShot}
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
              {data.positioning}
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
              {data.volleys}
            </span>
          </div>
        </div>
        <Divider orientation="vertical" />
      </div>
      <div className="flex flex-row">
        <div className="statistic2 flex flex-col px-7 gap-[7px]  grow">
          <div className="flex flex-row  justify-between">
            <span>Penalty</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.penalties)
              )}
            >
              {data.penalties}
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
              {data.shortPassing}
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
              {data.vision}
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
              {data.crossing}
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
              {data.longPassing}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Đá phạt</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.freeKick)
              )}
            >
              {data.freeKick}
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
              {data.curve}
            </span>
          </div>
        </div>
        <Divider orientation="vertical" />
      </div>
      <div className="flex flex-row">
        <div className="statistic3 flex flex-col px-7 gap-[7px] grow">
          <div className="flex flex-row  justify-between">
            <span>Rê bóng</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.dribbling)
              )}
            >
              {data.dribbling}
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
              {data.ballControl}
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
              {data.agility}
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
              {data.balance}
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
              {data.reactions}
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
              {data.marking}
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
              {data.tackleStand}
            </span>
          </div>
        </div>
        <Divider orientation="vertical" />
      </div>

      <div className="flex flex-row">
        <div className="statistic4 flex flex-col px-7 gap-[7px] grow">
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
              {data.heading}
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
              {data.tackleSliding}
            </span>
          </div>
          <div className="flex flex-row  justify-between">
            <span>Sức mạnh</span>
            <span
              className={clsx(
                styles.statistic_detail,
                getColorClass(data.strength)
              )}
            >
              {data.strength}
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
              {data.stamina}
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
              {data.aggression}
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
              {data.jumping}
            </span>
          </div>
        </div>
        <Divider orientation="vertical" />
      </div>

      <div className="statistic5 flex flex-col px-7 gap-[7px]">
        <div className="flex flex-row  justify-between">
          <span>Bình tĩnh</span>
          <span
            className={clsx(
              styles.statistic_detail,
              getColorClass(data.composure)
            )}
          >
            {data.composure}
          </span>
        </div>
        <div className="flex flex-row  justify-between">
          <span>TM đổ người</span>
          <span
            className={clsx(styles.statistic_detail, getColorClass(data.gkDiv))}
          >
            {data.gkDiv}
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
            {data.gkHanding}
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
            {data.gkKicking}
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
            {data.gkReactions}
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
            {data.gkPositioning}
          </span>
        </div>
      </div>
    </div>
  );
}
