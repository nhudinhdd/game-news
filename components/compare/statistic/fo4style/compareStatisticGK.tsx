import { PlayerSeasonDetailRes } from "@/model/player/player";
import CompareRow from "../../row/compareRow";
import PositionOvr from "../positionOvr";

type CompareStatisticTwoRow = {
  playerData1: PlayerSeasonDetailRes;
  playerData2: PlayerSeasonDetailRes;
};

export default function CompareStatisticGK(props: CompareStatisticTwoRow) {
  const { playerData1, playerData2 } = props;

  return (
    <div className="flex flex-row px-10 xss:max-mobileMiddle:px-2">
      <PositionOvr
        positionAll1={playerData1.positionAll}
        positionAll2={playerData2.positionAll}
        position="GK"
      ></PositionOvr>
      <div className="w-[400px] m-auto flex flex-col gap-3 mt-5 xss:max-mobile:w-[150px] mobile:max-laptop:w-[250px]">
        <CompareRow
          value1={playerData1.gkDiv}
          value2={playerData2.gkDiv}
          isStatistic={true}
          title="TM đổ người"
        />

        <CompareRow
          value1={playerData1.gkHanding}
          value2={playerData2.gkHanding}
          isStatistic={true}
          title="TM bắt bóng"
        />

        <CompareRow
          value1={playerData1.gkKicking}
          value2={playerData2.gkKicking}
          isStatistic={true}
          title="TM phát bóng"
        />

        <CompareRow
          value1={playerData1.gkPositioning}
          value2={playerData2.gkPositioning}
          isStatistic={true}
          title="TM chọn vị trí"
        />

        <CompareRow
          value1={playerData1.gkReactions}
          value2={playerData2.gkReactions}
          isStatistic={true}
          title="TM phản xạ"
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
        position="GK"
      ></PositionOvr>
    </div>
  );
}
