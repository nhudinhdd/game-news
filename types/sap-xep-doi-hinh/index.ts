type TotalType = {
  title: string;
  detail: number;
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
  info: InfoType;
};

type FieldCardsType = {
  attacks: FieldCardType[];
  middles: FieldCardType[];
  defends: FieldCardType[];
};

export type { TotalType, FomatationType, LevelType, FieldCardsType };
