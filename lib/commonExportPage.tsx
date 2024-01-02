import CompareStatisticCAM from "@/components/compare/statistic/fo4style/compareStatiscCAM";
import CompareStatisticCB from "@/components/compare/statistic/fo4style/compareStatisticCB";
import CompareStatisticRWB from "@/components/compare/statistic/fo4style/compareStatisticCB";
import CompareStatisticCDM from "@/components/compare/statistic/fo4style/compareStatisticCDM";
import CompareStatisticCF from "@/components/compare/statistic/fo4style/compareStatisticCF";
import CompareStatisticCM from "@/components/compare/statistic/fo4style/compareStatisticCM";
import CompareStatisticGK from "@/components/compare/statistic/fo4style/compareStatisticGK";
import CompareStatisticLB from "@/components/compare/statistic/fo4style/compareStatisticLB";
import CompareStatisticLM from "@/components/compare/statistic/fo4style/compareStatisticLM";
import CompareStatisticLRW from "@/components/compare/statistic/fo4style/compareStatisticLRW";
import CompareStatisticLWB from "@/components/compare/statistic/fo4style/compareStatisticLWB";
import CompareStatisticRB from "@/components/compare/statistic/fo4style/compareStatisticRB";
import CompareStatisticRM from "@/components/compare/statistic/fo4style/compareStatisticRM";
import CompareStatisticTwoRow from "@/components/compare/statistic/fo4style/compareStatisticTwoRow";
import { PlayerSeasonDetailRes } from "@/model/player/player";

export const getComparePageByPosition = (
  tabKey: string,
  playerData1: PlayerSeasonDetailRes,
  playerData2: PlayerSeasonDetailRes
) => {
  switch (tabKey) {
    case "LW":
      return (
        <CompareStatisticLRW
          playerData1={playerData1}
          playerData2={playerData2}
          position="LW"
        ></CompareStatisticLRW>
      );

    case "LW":
      return (
        <CompareStatisticLRW
          playerData1={playerData1}
          playerData2={playerData2}
          position="RW"
        ></CompareStatisticLRW>
      );
    case "ST":
      return (
        <CompareStatisticTwoRow
          playerData1={playerData1}
          playerData2={playerData2}
        ></CompareStatisticTwoRow>
      );

    case "CF":
      return (
        <CompareStatisticCF
          playerData1={playerData1}
          playerData2={playerData2}
        ></CompareStatisticCF>
      );

    case "CAM":
      return (
        <CompareStatisticCAM
          playerData1={playerData1}
          playerData2={playerData2}
        ></CompareStatisticCAM>
      );

    case "LM":
      return (
        <CompareStatisticLM
          playerData1={playerData1}
          playerData2={playerData2}
        ></CompareStatisticLM>
      );
    case "RM":
      return (
        <CompareStatisticRM
          playerData1={playerData1}
          playerData2={playerData2}
        ></CompareStatisticRM>
      );

    case "CM":
      return (
        <CompareStatisticCM
          playerData1={playerData1}
          playerData2={playerData2}
        ></CompareStatisticCM>
      );

    case "CDM":
      return (
        <CompareStatisticCDM
          playerData1={playerData1}
          playerData2={playerData2}
        ></CompareStatisticCDM>
      );

    case "LWB":
      return (
        <CompareStatisticLWB
          playerData1={playerData1}
          playerData2={playerData2}
        ></CompareStatisticLWB>
      );

    case "RWB":
      return (
        <CompareStatisticRWB
          playerData1={playerData1}
          playerData2={playerData2}
        ></CompareStatisticRWB>
      );
    case "LB":
      return (
        <CompareStatisticLB
          playerData1={playerData1}
          playerData2={playerData2}
        ></CompareStatisticLB>
      );

    case "RB":
      return (
        <CompareStatisticRB
          playerData1={playerData1}
          playerData2={playerData2}
        ></CompareStatisticRB>
      );
    case "CB":
      return (
        <CompareStatisticCB
          playerData1={playerData1}
          playerData2={playerData2}
        ></CompareStatisticCB>
      );

    case "GK":
      return (
        <CompareStatisticGK
          playerData1={playerData1}
          playerData2={playerData2}
        ></CompareStatisticGK>
      );
    default:
      return <h1>asdsadsa</h1>;
  }
};
