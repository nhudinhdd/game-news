import { PlayerSeasonDetailRes } from "@/model/player/player";
import { Divider, ScrollShadow } from "@nextui-org/react";
import StaticRow from "./StaticRow";
import TotalPoint from "./TotalPoint";
import { getTotalPoint } from "@/lib/common";

type PlayerStatistic = {
  data: PlayerSeasonDetailRes | null;
  data2?: PlayerSeasonDetailRes | null;
  upgrade: number;
  level: number;
  teamColor: number;

  upgrade2: number;
  level2: number;
  teamColor2: number;
};

export function PlayerStatisticBodyCompare(props: PlayerStatistic) {
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
  if (!data) return null;
  const totalPoint1 = [
    data.speedSprint,
    data.speedUp,
    data.finishing,
    data.shotPower,
    data.longShot,
    data.positioning,
    data.volleys,
    data.penalties,
    data.shortPassing,
    data.vision,
    data.crossing,
    data.longPassing,
    data.freeKick,
    data.curve,
    data.dribbling,
    data.ballControl,
    data.agility,
    data.balance,
    data.reactions,
    data.marking,
    data.tackleStand,
    data.intercep,
    data.heading,
    data.tackleSliding,
    data.strength,
    data.stamina,
    data.aggression,
    data.jumping,
    data.composure,
    data.gkDiv,
    data.gkHanding,
    data.gkKicking,
    data.gkReactions,
    data.gkPositioning,
  ];

  const totalPoint2 =
    [
      data2?.speedSprint,
      data2?.speedUp,
      data2?.finishing,
      data2?.shotPower,
      data2?.longShot,
      data2?.positioning,
      data2?.volleys,
      data2?.penalties,
      data2?.shortPassing,
      data2?.vision,
      data2?.crossing,
      data2?.longPassing,
      data2?.freeKick,
      data2?.curve,
      data2?.dribbling,
      data2?.ballControl,
      data2?.agility,
      data2?.balance,
      data2?.reactions,
      data2?.marking,
      data2?.tackleStand,
      data2?.intercep,
      data2?.heading,
      data2?.tackleSliding,
      data2?.strength,
      data2?.stamina,
      data2?.aggression,
      data2?.jumping,
      data2?.composure,
      data2?.gkDiv,
      data2?.gkHanding,
      data2?.gkKicking,
      data2?.gkReactions,
      data2?.gkPositioning,
    ] || [];
  return (
    <div className="w-full py-4 xss:max-mobile:py-1 ">
      <div className="flex flex-row justify-center">
        <div
          className="statistic1 flex flex-col xss:max-mobile:px-0 px-7 gap-[7px] xss:max-mobile:grow-0 grow h-[248px] flex-wrap	xss:max-mobile:h-[890px]
        laptop:max-desktop:h-[240px] mobile:max-laptop:h-[320px] xssMiddle:max-mobile:h-[480px] desktop:gap-[7px]"
        >
          <StaticRow
            value1={data.speedSprint}
            value2={data2?.speedSprint}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title={"Tốc độ"}
          ></StaticRow>
          <StaticRow
            value1={data.speedUp}
            value2={data2?.speedUp}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Tăng tốc"
          ></StaticRow>

          <StaticRow
            value1={data.finishing}
            value2={data2?.finishing}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Dứt điểm"
          ></StaticRow>

          <StaticRow
            value1={data.shotPower}
            value2={data2?.shotPower}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Lực sút"
          ></StaticRow>

          <StaticRow
            value1={data.longShot}
            value2={data2?.longShot}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Sút xa"
          ></StaticRow>

          <StaticRow
            value1={data.positioning}
            value2={data2?.positioning}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Chọn vị trí"
          ></StaticRow>

          <StaticRow
            value1={data.volleys}
            value2={data2?.volleys}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Volley"
          ></StaticRow>
          <StaticRow
            value1={data.penalties}
            value2={data2?.penalties}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Penalty"
          ></StaticRow>

          <StaticRow
            value1={data.shortPassing}
            value2={data2?.shortPassing}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Chuyền ngắn"
          ></StaticRow>
          <Divider
            orientation="vertical"
            className="mobile:max-laptop:hidden  xss:max-mobile:hidden"
          />
          <StaticRow
            value1={data.vision}
            value2={data2?.vision}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Tầm nhìn"
          ></StaticRow>

          <StaticRow
            value1={data.crossing}
            value2={data2?.crossing}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Tạt bóng"
          ></StaticRow>

          <StaticRow
            value1={data.longPassing}
            value2={data2?.longPassing}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Chuyền dài"
          ></StaticRow>

          <Divider
            orientation="vertical"
            className="laptop:hidden xss:max-mobile:hidden"
          />

          <StaticRow
            value1={data.freeKick}
            value2={data2?.freeKick}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="Đá phạt"
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
          ></StaticRow>

          <StaticRow
            value1={data.curve}
            value2={data2?.curve}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Sút xoáy"
          ></StaticRow>

          <StaticRow
            value1={data.dribbling}
            value2={data2?.dribbling}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Rê bóng"
          ></StaticRow>

          <StaticRow
            value1={data.ballControl}
            value2={data2?.ballControl}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Giữ bóng"
          ></StaticRow>

          <StaticRow
            value1={data.agility}
            value2={data2?.agility}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Khéo léo"
          ></StaticRow>

          <StaticRow
            value1={data.balance}
            value2={data2?.balance}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Thăng bằng"
          ></StaticRow>
          <Divider
            orientation="vertical"
            className="mobile:max-laptop:hidden  xss:max-xssMiddle:hidden"
          />
          <StaticRow
            value1={data.reactions}
            value2={data2?.reactions}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Phản ứng"
          ></StaticRow>

          <Divider
            orientation="vertical"
            className="mobile:hidden xss:max-mobile:hidden"
          />
          <StaticRow
            value1={data.marking}
            value2={data2?.marking}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Kèm người"
          ></StaticRow>

          <StaticRow
            value1={data.tackleStand}
            value2={data2?.tackleStand}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Lấy bóng"
          ></StaticRow>

          <StaticRow
            value1={data.intercep}
            value2={data2?.intercep}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Cắt bóng"
          ></StaticRow>

          <StaticRow
            value1={data.heading}
            value2={data2?.heading}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Đánh đầu"
          ></StaticRow>

          <StaticRow
            value1={data.tackleSliding}
            value2={data2?.tackleSliding}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Xoạc bóng"
          ></StaticRow>
          <Divider
            orientation="vertical"
            className="laptop:hidden xss:max-mobile:hidden"
          />

          <StaticRow
            value1={data.strength}
            value2={data2?.strength}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Sức mạnh"
          ></StaticRow>

          <StaticRow
            value1={data.stamina}
            value2={data2?.stamina}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Thể lực"
          ></StaticRow>

          <StaticRow
            value1={data.aggression}
            value2={data2?.aggression}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Quyết đoán"
          ></StaticRow>
          <Divider
            orientation="vertical"
            className="mobile:max-laptop:hidden  xss:max-mobile:hidden"
          />
          <StaticRow
            value1={data.jumping}
            value2={data2?.jumping}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Nhảy"
          ></StaticRow>
          <StaticRow
            value1={data.composure}
            value2={data2?.composure}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="Bình tĩnh"
          ></StaticRow>

          <StaticRow
            value1={data.gkDiv}
            value2={data2?.gkDiv}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="TM đổ người"
          ></StaticRow>

          <StaticRow
            value1={data.gkHanding}
            value2={data2?.gkHanding}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="TM bắt bóng"
          ></StaticRow>

          <StaticRow
            value1={data.gkKicking}
            value2={data2?.gkKicking}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="TM phát bóng"
          ></StaticRow>

          <StaticRow
            value1={data.gkReactions}
            value2={data2?.gkReactions}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="TM phản xạ"
          ></StaticRow>

          <StaticRow
            value1={data.gkPositioning}
            value2={data2?.gkPositioning}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            upgrade2={upgrade2}
            level2={level2}
            teamColor2={teamColor2}
            title="TM chọn vị trí"
          ></StaticRow>
          <TotalPoint
            totalPoint1={getTotalPoint(totalPoint1)}
            totalPoint2={getTotalPoint(totalPoint2)}
          ></TotalPoint>
        </div>
      </div>
    </div>
  );
}
