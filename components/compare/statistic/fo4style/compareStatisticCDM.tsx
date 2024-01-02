import { PlayerSeasonDetailRes } from "@/model/player/player";
import CompareRow from "../../row/compareRow";
import PositionOvr from "../positionOvr";

type CompareStatisticTwoRow = {
  playerData1: PlayerSeasonDetailRes;
  playerData2: PlayerSeasonDetailRes;
};

export default function CompareStatisticCM(props: CompareStatisticTwoRow) {
  const { playerData1, playerData2 } = props;
  return (
    <div className="flex flex-row px-10 xss:max-mobileMiddle:px-2">
      <PositionOvr
        positionAll1={playerData1.positionAll}
        positionAll2={playerData2.positionAll}
        position="CDM"
      ></PositionOvr>
      <div className="w-[400px] m-auto flex flex-col gap-3 mt-5 xss:max-mobile:w-[150px] mobile:max-laptop:w-[250px]">
        <CompareRow
          value1={playerData1.strength}
          value2={playerData2.strength}
          isStatistic={true}
          title="Sức mạnh"
        />
        <CompareRow
          value1={playerData1.stamina}
          value2={playerData2.stamina}
          isStatistic={true}
          title="Thể lực"
        />
        <CompareRow
          value1={playerData1.tackleSliding}
          value2={playerData2.tackleSliding}
          isStatistic={true}
          title="Xoạc bóng"
        />
        <CompareRow
          value1={playerData1.ballControl}
          value2={playerData2.ballControl}
          isStatistic={true}
          title="Giữ bóng"
        />
        <CompareRow
          value1={playerData1.marking}
          value2={playerData2.marking}
          isStatistic={true}
          title="Kèm người"
        />
        <CompareRow
          value1={playerData1.tackleSliding}
          value2={playerData2.tackleSliding}
          isStatistic={true}
          title="Lấy bóng"
        />
        <CompareRow
          value1={playerData1.shortPassing}
          value2={playerData2.shortPassing}
          isStatistic={true}
          title="Chuyền ngắn"
        />
        <CompareRow
          value1={playerData1.longPassing}
          value2={playerData2.longPassing}
          isStatistic={true}
          title="Chuyền dài"
        />
        <CompareRow
          value1={playerData1.intercep}
          value2={playerData2.intercep}
          isStatistic={true}
          title="Cắt bóng"
        />

        <CompareRow
          value1={playerData1.vision}
          value2={playerData2.vision}
          isStatistic={true}
          title="Tầm nhìn"
          isEnd={true}
        />

        <CompareRow
          value1={playerData1.reactions}
          value2={playerData2.reactions}
          isStatistic={true}
          title="Phản ứng"
          isEnd={true}
        />

        <CompareRow
          value1={playerData1.aggression}
          value2={playerData2.aggression}
          isStatistic={true}
          title="Quyết đoán"
        />
      </div>

      <PositionOvr
        positionAll1={playerData2.positionAll}
        positionAll2={playerData1.positionAll}
        position="CDM"
      ></PositionOvr>
    </div>
  );
}
