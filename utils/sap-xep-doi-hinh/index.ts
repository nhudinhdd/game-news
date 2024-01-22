import { FieldCardsType } from "@/types/sap-xep-doi-hinh";

const checkFieldCards = (fomatation: string) => {
  let fieldCardsTemp = {
    attacks: [],
    middles: [],
    defends: [],
  } as FieldCardsType;

  switch (fomatation) {
    case "3-1-2-1-3":
      fieldCardsTemp.attacks = [
        { pos: "rw", info: {} },
        { pos: "st", info: {} },
        { pos: "lw", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "cdm", info: {} },
        { pos: "rm", info: {} },
        { pos: "lm", info: {} },
        { pos: "cam", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rcb", info: {} },
        { pos: "cb", info: {} },
        { pos: "lcb", info: {} },
      ];
      break;
    case "3-1-4-2":
      fieldCardsTemp.attacks = [
        { pos: "rw", info: {} },
        { pos: "ls", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "cdm", info: {} },
        { pos: "rm", info: {} },
        { pos: "rcm", info: {} },
        { pos: "lcm", info: {} },
        { pos: "cm", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rcb", info: {} },
        { pos: "cb", info: {} },
        { pos: "lcb", info: {} },
      ];
      break;
    case "4-1-2-1-2":
      fieldCardsTemp.attacks = [
        { pos: "rs", info: {} },
        { pos: "ls", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "cdm", info: {} },
        { pos: "rm", info: {} },
        { pos: "lm", info: {} },
        { pos: "cam", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rb-4", info: {} },
        { pos: "rcb-4", info: {} },
        { pos: "lcb-4", info: {} },
        { pos: "lb-4", info: {} },
      ];
      break;
    case "5-1-2-1-1":
      fieldCardsTemp.attacks = [{ pos: "st", info: {} }];
      fieldCardsTemp.middles = [
        { pos: "cdm", info: {} },
        { pos: "rm", info: {} },
        { pos: "lm", info: {} },
        { pos: "cam", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rwb", info: {} },
        { pos: "lwb", info: {} },
        { pos: "rcb", info: {} },
        { pos: "cb", info: {} },
        { pos: "lcb", info: {} },
      ];
      break;
    default:
      return fieldCardsTemp;
  }
  console.log(fieldCardsTemp);
  return fieldCardsTemp;
};

export { checkFieldCards };
