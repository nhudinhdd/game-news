import { Postion } from "@/model/player/filter/filter";

function usePosition() {
  const dataPostion: Map<string, string> = new Map([
    ["Vị trí", "Vị trí"],
    ["FW", "FW"],
    ["MF", "MF"],
    ["DF", "DF"],
    ["GK", "GK"],
  ]);
  const dataPostionDetailList: Map<string, Map<string, string>> = new Map([
    ["Vị trí", new Map()],
    [
      "FW",
      new Map([
        ["LW", "LW"],
        ["RW", "RW"],
        ["CF", "CF"],
        ["ST", "ST"],
      ]),
    ],
    [
      "MF",
      new Map([
        ["CAM", "CAM"],
        ["CM", "CM"],
        ["LM", "LM"],
        ["RM", "RM"],
        ["CDM", "CDM"],
      ]),
    ],
    [
      "DF",
      new Map([
        ["RB", "RB"],
        ["RWB", "RWB"],
        ["LB", "LB"],
        ["LWB", "LWB"],
        ["CB", "CB"],
        ["SW", "SW"],
      ]),
    ],
    ["GK", new Map()],
  ]);
  return {
    dataPostion: dataPostion,
    dataPostionDetailList: dataPostionDetailList,
  };
}
export default usePosition;
