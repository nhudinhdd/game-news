import { PlayerSeasonDetailRes } from "@/model/player/player";
import { Divider } from "@nextui-org/react";
import StaticRow from "./StaticRow";
import TotalPoint from "./TotalPoint";
import { getTotalPoint } from "@/lib/common";

type PlayerStatistic = {
  data: PlayerSeasonDetailRes | null;
  data2?: PlayerSeasonDetailRes | null;
  upgrade: number;
  level: number;
  teamColor: number;
};

export function PlayerStatisticBody(props: PlayerStatistic) {
  const { data, upgrade, level, teamColor, data2 } = props;

  const totalPoint1 = [
    data?.speedSprint,
    data?.speedUp,
    data?.finishing,
    data?.shotPower,
    data?.longShot,
    data?.positioning,
    data?.volleys,
    data?.penalties,
    data?.shortPassing,
    data?.vision,
    data?.crossing,
    data?.longPassing,
    data?.freeKick,
    data?.curve,
    data?.dribbling,
    data?.ballControl,
    data?.agility,
    data?.balance,
    data?.reactions,
    data?.marking,
    data?.tackleStand,
    data?.intercep,
    data?.heading,
    data?.tackleSliding,
    data?.strength,
    data?.stamina,
    data?.aggression,
    data?.jumping,
    data?.composure,
    data?.gkDiv,
    data?.gkHanding,
    data?.gkKicking,
    data?.gkReactions,
    data?.gkPositioning,
  ];
  if (!data) return null;
  return (
    <div className="w-full py-4 xss:max-mobile:py-1">
      <div className="flex flex-row">
        <div
          className="statistic1 flex flex-col px-7 gap-[7px] grow h-[240px] flex-wrap	xss:max-mobileMiddle:h-[480px] 
          xss:max-mobile:px-4 
        laptop:max-desktop:h-[240px] mobile:max-laptop:h-[320px] mobileMiddle:max-mobile:h-[320px] desktop:gap-[7px]"
        >
          <StaticRow
            value1={data.speedSprint}
            value2={data2?.speedSprint}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title={"Tốc độ"}
          ></StaticRow>
          <StaticRow
            value1={data.speedUp}
            value2={data2?.speedUp}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="Tăng tốc"
          ></StaticRow>

          <StaticRow
            value1={data.finishing}
            value2={data2?.finishing}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="Dứt điểm"
          ></StaticRow>

          <StaticRow
            value1={data.shotPower}
            value2={data2?.shotPower}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="Lực sút"
          ></StaticRow>

          <StaticRow
            value1={data.longShot}
            value2={data2?.longShot}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="Sút xa"
          ></StaticRow>

          <StaticRow
            value1={data.positioning}
            value2={data2?.positioning}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="Chọn vị trí"
          ></StaticRow>

          <StaticRow
            value1={data.volleys}
            value2={data2?.volleys}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="Volley"
          ></StaticRow>
          <StaticRow
            value1={data.penalties}
            value2={data2?.penalties}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="Penalty"
          ></StaticRow>

          <StaticRow
            value1={data.shortPassing}
            value2={data2?.shortPassing}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
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
            title="Tầm nhìn"
          ></StaticRow>

          <StaticRow
            value1={data.crossing}
            value2={data2?.crossing}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="Tạt bóng"
          ></StaticRow>

          <StaticRow
            value1={data.longPassing}
            value2={data2?.longPassing}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="Chuyền dài"
          ></StaticRow>

          <Divider
            orientation="vertical"
            className="laptop:hidden xss:max-mobileMiddle:hidden"
          />

          <StaticRow
            value1={data.freeKick}
            value2={data2?.freeKick}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="Đá phạt"
          ></StaticRow>

          <StaticRow
            value1={data.curve}
            value2={data2?.curve}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="Sút xoáy"
          ></StaticRow>

          <StaticRow
            value1={data.dribbling}
            value2={data2?.dribbling}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="Rê bóng"
          ></StaticRow>

          <StaticRow
            value1={data.ballControl}
            value2={data2?.ballControl}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="Giữ bóng"
          ></StaticRow>

          <StaticRow
            value1={data.agility}
            value2={data2?.agility}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="Khéo léo"
          ></StaticRow>

          <StaticRow
            value1={data.balance}
            value2={data2?.balance}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="Thăng bằng"
          ></StaticRow>
          <Divider
            orientation="vertical"
            className="mobile:max-laptop:hidden  mobileMiddle:max-mobile:hidden"
          />
          <StaticRow
            value1={data.reactions}
            value2={data2?.reactions}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
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
            title="Kèm người"
          ></StaticRow>

          <StaticRow
            value1={data.tackleStand}
            value2={data2?.tackleStand}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="Lấy bóng"
          ></StaticRow>

          <StaticRow
            value1={data.intercep}
            value2={data2?.intercep}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="Cắt bóng"
          ></StaticRow>

          <StaticRow
            value1={data.heading}
            value2={data2?.heading}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="Đánh đầu"
          ></StaticRow>

          <StaticRow
            value1={data.tackleSliding}
            value2={data2?.tackleSliding}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="Xoạc bóng"
          ></StaticRow>
          <Divider
            orientation="vertical"
            className="laptop:hidden xss:max-mobileMiddle:hidden"
          />

          <StaticRow
            value1={data.strength}
            value2={data2?.strength}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="Sức mạnh"
          ></StaticRow>

          <StaticRow
            value1={data.stamina}
            value2={data2?.stamina}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="Thể lực"
          ></StaticRow>

          <StaticRow
            value1={data.aggression}
            value2={data2?.aggression}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
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
            title="Nhảy"
          ></StaticRow>
          <StaticRow
            value1={data.composure}
            value2={data2?.composure}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="Bình tĩnh"
          ></StaticRow>

          <StaticRow
            value1={data.gkDiv}
            value2={data2?.gkDiv}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="TM đổ người"
          ></StaticRow>

          <StaticRow
            value1={data.gkHanding}
            value2={data2?.gkHanding}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="TM bắt bóng"
          ></StaticRow>

          <StaticRow
            value1={data.gkKicking}
            value2={data2?.gkKicking}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="TM phát bóng"
          ></StaticRow>

          <StaticRow
            value1={data.gkReactions}
            value2={data2?.gkReactions}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="TM phản xạ"
          ></StaticRow>

          <StaticRow
            value1={data.gkPositioning}
            value2={data2?.gkPositioning}
            upgrade={upgrade}
            level={level}
            teamColor={teamColor}
            title="TM chọn vị trí"
          ></StaticRow>
          <TotalPoint totalPoint1={getTotalPoint(totalPoint1)}></TotalPoint>
        </div>
      </div>
    </div>
  );
}
