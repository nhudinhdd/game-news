import { PlayerSeasonDetailRes } from "@/model/player/player";
import CompareRow from "../../row/compareRow";
import PositionOvr from "../positionOvr";

type CompareStatisticTwoRow = {
  playerData1: PlayerSeasonDetailRes;
  playerData2: PlayerSeasonDetailRes;
};

export default function CompareStatisticCF(props: CompareStatisticTwoRow) {
  const { playerData1, playerData2 } = props;
  return (
    <div className="flex flex-row px-10 xss:max-mobileMiddle:px-2">
      <PositionOvr
        positionAll1={playerData1.positionAll}
        positionAll2={playerData2.positionAll}
        position="CF"
      ></PositionOvr>
      <div className="w-[400px] m-auto flex flex-col gap-3 mt-5 xss:max-mobile:w-[150px] mobile:max-laptop:w-[250px]">
        <CompareRow
          value1={playerData1.speedUp}
          value2={playerData2.speedUp}
          isStatistic={true}
          title="Tăng tốc"
        />

        <CompareRow
          value1={playerData1.speedSprint}
          value2={playerData2.speedSprint}
          isStatistic={true}
          title="Tốc độ"
        />

        <CompareRow
          value1={playerData1.dribbling}
          value2={playerData2.dribbling}
          isStatistic={true}
          title="Rê bóng"
        />

        <CompareRow
          value1={playerData1.ballControl}
          value2={playerData2.ballControl}
          isStatistic={true}
          title="Giữ bóng"
        />

        <CompareRow
          value1={playerData1.shortPassing}
          value2={playerData2.shortPassing}
          isStatistic={true}
          title="Chuyền ngắn"
        />

        <CompareRow
          value1={playerData1.finishing}
          value2={playerData2.finishing}
          isStatistic={true}
          title="Dứt điểm"
        />

        <CompareRow
          value1={playerData1.shotPower}
          value2={playerData2.shotPower}
          isStatistic={true}
          title="Lực sút"
        />

        <CompareRow
          value1={playerData1.heading}
          value2={playerData2.heading}
          isStatistic={true}
          title="Đánh đầu"
        />

        <CompareRow
          value1={playerData1.longShot}
          value2={playerData2.longShot}
          isStatistic={true}
          title="Sút xa"
        />

        <CompareRow
          value1={playerData1.positioning}
          value2={playerData2.positioning}
          isStatistic={true}
          title="Chọn vị trí"
        />

        <CompareRow
          value1={playerData1.reactions}
          value2={playerData2.reactions}
          isStatistic={true}
          title="Phản ứng"
          isEnd={true}
        />
      </div>

      <PositionOvr
        positionAll1={playerData2.positionAll}
        positionAll2={playerData1.positionAll}
        position="CF"
      ></PositionOvr>
    </div>
  );
}
