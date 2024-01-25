import { FomatationType, LevelType, TotalType } from "@/types/sap-xep-doi-hinh";

const TOTALS: TotalType[] = [
  {
    title: "Tốc độ",
    detail: 0,
  },
  {
    title: "Sút",
    detail: 0,
  },
  {
    title: "Chuyền",
    detail: 0,
  },
  {
    title: "Rê bóng",
    detail: 0,
  },
  {
    title: "Phòng thủ",
    detail: 0,
  },
  {
    title: "Thể lực",
    detail: 0,
  },
];

const FOMATATIONS: FomatationType[] = [
  {
    title: "3 Hậu Vệ",
    list: [
      "3-1-2-1-3",
      "3-2-3-2",
      "3-4-3-F",
      "3-1-4-2",
      "3-4-1-2",
      "3-2-2-1-2",
      "3-4-3",
    ],
  },
  {
    title: "4 Hậu Vệ",
    list: [
      "4-1-2-1-2",
      "4-1-2-3-F",
      "4-2-1-3",
      "4-2-2-1-1",
      "4-2-3-1",
      "4-3-2-1",
      "4-4-1-1",
      "4-5-1",
      "4-1-2-1-2-C",
      "4-1-3-2",
      "4-2-1-3-A",
      "4-2-2-2",
      "4-2-4",
      "4-3-3",
      "4-4-2",
      "4-1-2-3",
      "4-1-4-1",
      "4-2-1-3-D",
      "4-2-2-2-A",
      "4-3-1-2",
      "4-3-3-F",
      "4-4-2-F",
    ],
  },
  {
    title: "5 Hậu Vệ",
    list: ["5-1-2-1-1", "5-3-2", "5-2-1-2", "5-4-1", "5-2-3"],
  },
];

const LEVELS: LevelType[] = [
  { title: "level 1", value: 1 },
  { title: "level 2", value: 2 },
  { title: "level 3", value: 3 },
  { title: "level 4", value: 4 },
  { title: "level 5", value: 5 },
];

export { TOTALS, FOMATATIONS, LEVELS };
