import { PlayerSeasonRes } from "@/model/player/player";

type MoreAttribuite = {
  upgrade: number;
  level: number;
  teamColor: number;
};

type TotalType = {
  title: string;
  detail: number;
  properties: string;
};

type FomatationType = {
  title: string;
  list: string[];
};

type LevelType = {
  title: string;
  value: number;
};

type InfoType = {};

type FieldCardType = {
  pos: string;
  info?: PlayerSeasonRes | null;
  moreAttribuite?: MoreAttribuite | null;
};

type FieldCardsType = {
  attacks: FieldCardType[];
  middles: FieldCardType[];
  defends: FieldCardType[];
  substitute: FieldCardType[];
};

export type {
  TotalType,
  FomatationType,
  LevelType,
  FieldCardsType,
  FieldCardType,
};
