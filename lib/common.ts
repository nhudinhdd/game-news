import { PlayerSeasonDetailRes } from "@/model/player/player";
import { SeasonRes } from "@/model/player/season";
import { ReactElement } from "react";

export const getColorClass = (statistic: number | undefined) => {
  if (statistic)
    switch (true) {
      case statistic >= 120:
        return "static120";
        break;
      case statistic >= 110 && 120 > statistic:
        return "static110";
        break;
      case statistic >= 100 && 110 > statistic:
        return "static100";
        break;
      case statistic >= 90 && 100 > statistic:
        return "static90";
        break;
      case statistic >= 80 && 90 > statistic:
        return "static80";
        break;

      case statistic >= 70 && 80 > statistic:
        return "static70";
        break;

      case statistic >= 50 && 70 > statistic:
        return "static5060";
        break;

      case statistic < 50:
        return "static40below";
        break;
      default:
      // code block
    }
};

export const getTabPositionCompare = (
  key1: IterableIterator<String>,
  key2: IterableIterator<String>
) => {
  return new Set(Array.from(key1).concat(Array.from(key2)));
};

export const getOvr = (
  s1: number,
  s2: number,
  s3: number,
  s4: number,
  s5: number,
  s6: number,
  s7: number,
  s8: number,
  s9: number,
  s10: number,
  s11: number,
  s12: number,
  s13: number
) => {
  return Math.round(
    (s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9 + s10 + s11 + s12 + s13) / 13
  );
};

export const getColorPosition = (position: string) => {
  switch (position) {
    case "ST":
    case "CF":
    case "LW":
    case "RW":
      return "fwColor";

    case "CAM":
    case "LM":
    case "RM":
    case "CM":
    case "CDM":
      return "mfColor";
    case "RB":
    case "RWB":
    case "LB":
    case "LWB":
    case "CB":
      return "dfColor";

    case "GK":
      return "gkColor";
  }
};

export const getColorBgPosition = (position: string) => {
  switch (position) {
    case "ST":
    case "CF":
    case "LW":
    case "RW":
      return "bgfwColor";

    case "CAM":
    case "LM":
    case "RM":
    case "CM":
    case "CDM":
      return "bgmfColor";
    case "RB":
    case "RWB":
    case "LB":
    case "LWB":
    case "CB":
      return "bgdfColor";

    case "GK":
      return "bggkColor";
  }
};
export const getUpgradeClass = (upgrade: number) => {
  switch (true) {
    case 1 == upgrade:
      return "upgrade1";
      break;
    case 2 <= upgrade && upgrade <= 4:
      return "upgrade24";
      break;

    case 5 <= upgrade && upgrade <= 7:
      return "upgrade5";
      break;
    case 7 <= upgrade && upgrade <= 10:
      return "upgrade8";
      break;
    default:
    // code block
  }
};

export const getStatistic = (
  base: number | undefined,
  upgrade: number | undefined,
  level: number | undefined,
  teamColor: number | undefined
) => {
  if (base && upgrade && level && teamColor) {
    return base + (upgrade - 1) + (level - 1) + (teamColor - 1);
  }
  return undefined;
};

export const saveLocalStorage = (key: string, value: Array<string>) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorege = (key: string) => {
  if (typeof window !== "undefined") {
    let retString = localStorage.getItem(key) || "[]";
    return JSON.parse(retString);
  }
};

export const FAVORITE = "FAVORITE";

export function getValueFromPositonKey(
  key1: string,
  positionAll2: Map<String, string>
) {
  let a = Object.entries(positionAll2).map(([key, value]) => {
    if (key == key1) {
      return value;
    }
  });
  return a.find((x) => x != undefined);
}

export function getTotalPoint(value: Array<number | undefined>) {
  let sum = 0;

  value.forEach((item) => {
    if (item) {
      sum += item;
    }
  });

  return sum;
}

const arrayRange = (start: number, stop: number, step: number) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

export const POSITION = ["Vị trí", "FW", "MF", "DF", "GK"];
export const POSITIO_DETAIL = new Map<string, Array<string>>([
  ["FW", ["Chi tiết vị trí", "LW", "ST", "RW", "CF"]],
  ["MF", ["Chi tiết vị trí", "CAM", "LM", "CM", "RM", "CDM"]],
  ["DF", ["Chi tiết vị trí", "LWB", "LB", "CB", "RB", "RWB"]],
]);

export const OVR = [
  "- -",
  ...Array.from({ length: 200 }, (value, index) => index),
].map(String);
export const SALARY = [
  "- -",
  ...Array.from({ length: 100 }, (value, index) => index),
].map(String);
export const HEIGHT = [
  "- -",
  ...Array.from({ length: 300 }, (value, index) => index),
].map(String);
export const WEIGHT = [
  "- -",
  ...Array.from({ length: 300 }, (value, index) => index),
].map(String);
export const YEAR = arrayRange(1900, 2100, 1).map(String);
export const FOOT = arrayRange(1, 5, 1).map(String);
export const FITNESS = [];
export const getSeasonNameByID = (
  seasons: Array<SeasonRes>,
  ids: Set<string>
) => {
  if (ids.size > 1) return "Chọn nhiều";
  if (ids.size == 0) return "Mùa";

  const first = ids.values().next().value;
  let s = seasons.find((season) => {
    season.seasonID = first;
  });
  if (s) {
    return s.fullName;
  } else {
    return "Mùa";
  }
};
