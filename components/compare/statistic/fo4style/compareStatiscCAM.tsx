import { getColorPosition, getValueFromPositonKey, getOvr } from "@/lib/common";
import { PlayerSeasonDetailRes } from "@/model/player/player";
import clsx from "clsx";
import CompareRow from "../../row/compareRow";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../../styles/playerStatistic.module.css";
import PositionOvr from "../positionOvr";

type CompareStatisticTwoRow = {
  playerData1: PlayerSeasonDetailRes;
  playerData2: PlayerSeasonDetailRes;
};

export default function CompareStatisticCAM(props: CompareStatisticTwoRow) {
  const { playerData1, playerData2 } = props;
  const positionAll1 = playerData1.positionAll;
  const positionAll2 = playerData2.positionAll;
  return (
    <div className="flex flex-row px-10 xss:max-mobileMiddle:px-2">
      <PositionOvr
        positionAll1={positionAll1}
        positionAll2={positionAll2}
        position="CAM"
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
          value1={playerData1.agility}
          value2={playerData2.agility}
          isStatistic={true}
          title="Khéo léo"
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
          value1={playerData1.longPassing}
          value2={playerData2.longPassing}
          isStatistic={true}
          title="Chuyền dài"
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
      </div>

      <div className="flex flex-col">
        <span
          className={clsx(
            getColorPosition("CAM"),
            "text-[20px] text-center mt-[150px]  gap-2"
          )}
        >
          CAM
        </span>
        <span className="font-bold text-[68px] font-[sans-serif]">
          {getValueFromPositonKey("CAM", positionAll2)}
        </span>
      </div>
    </div>
  );
}
