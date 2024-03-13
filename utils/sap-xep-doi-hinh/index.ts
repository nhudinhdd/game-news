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
    case "3-2-2-1-2":
      fieldCardsTemp.attacks = [
        { pos: "rw", info: {} },
        { pos: "lw", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "cam", info: {} },
        { pos: "rm", info: {} },
        { pos: "rdm", info: {} },
        { pos: "ldm", info: {} },
        { pos: "lm", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rcb", info: {} },
        { pos: "cb", info: {} },
        { pos: "lcb", info: {} },
      ];
      break;
    case "3-2-3-2":
      fieldCardsTemp.attacks = [
        { pos: "st", info: {} },
        { pos: "cf", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "lm", info: {} },
        { pos: "ldm", info: {} },
        { pos: "cm", info: {} },
        { pos: "rdm", info: {} },
        { pos: "rm", info: {} },
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
        { pos: "rs", info: {} },
        { pos: "ls", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "rcm", info: {} },
        { pos: "rm", info: {} },
        { pos: "cdm", info: {} },
        { pos: "lm", info: {} },
        { pos: "lcm", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rcb", info: {} },
        { pos: "cb", info: {} },
        { pos: "lcb", info: {} },
      ];
      break;
    case "3-4-1-2":
      fieldCardsTemp.attacks = [
        { pos: "rs", info: {} },
        { pos: "ls", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "cam", info: {} },
        { pos: "rcm", info: {} },
        { pos: "rm", info: {} },
        { pos: "lm", info: {} },
        { pos: "lcm", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rcb", info: {} },
        { pos: "cb", info: {} },
        { pos: "lcb", info: {} },
      ];
      break;
    case "3-4-3":
      fieldCardsTemp.attacks = [
        { pos: "rw", info: {} },
        { pos: "st", info: {} },
        { pos: "lw", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "rm", info: {} },
        { pos: "rcm", info: {} },
        { pos: "lcm", info: {} },
        { pos: "lm", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rcb", info: {} },
        { pos: "cb", info: {} },
        { pos: "lcb", info: {} },
      ];
      break;
    case "3-4-3-F":
      fieldCardsTemp.attacks = [
        { pos: "rf", info: {} },
        { pos: "st", info: {} },
        { pos: "lf", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "rm", info: {} },
        { pos: "rcm", info: {} },
        { pos: "lcm", info: {} },
        { pos: "lm", info: {} },
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
    case "4-1-2-3-F":
      fieldCardsTemp.attacks = [
        { pos: "rw", info: {} },
        { pos: "st", info: {} },
        { pos: "lw", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "rcm", info: {} },
        { pos: "cdm", info: {} },
        { pos: "lcm", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rb-4", info: {} },
        { pos: "rcb-4", info: {} },
        { pos: "lcb-4", info: {} },
        { pos: "lb-4", info: {} },
      ];
      break;
    case "4-2-1-3":
      fieldCardsTemp.attacks = [
        { pos: "rw", info: {} },
        { pos: "st", info: {} },
        { pos: "lw", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "rdm", info: {} },
        { pos: "cm", info: {} },
        { pos: "ldm", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rb-4", info: {} },
        { pos: "rcb-4", info: {} },
        { pos: "lcb-4", info: {} },
        { pos: "lb-4", info: {} },
      ];
      break;
    case "4-2-2-1-1":
      fieldCardsTemp.attacks = [{ pos: "st", info: {} }];
      fieldCardsTemp.middles = [
        { pos: "cam", info: {} },
        { pos: "rm", info: {} },
        { pos: "rdm", info: {} },
        { pos: "ldm", info: {} },
        { pos: "lm", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rb-4", info: {} },
        { pos: "rcb-4", info: {} },
        { pos: "lcb-4", info: {} },
        { pos: "lb-4", info: {} },
      ];
      break;
    case "4-2-3-1":
      fieldCardsTemp.attacks = [{ pos: "st", info: {} }];
      fieldCardsTemp.middles = [
        { pos: "cam", info: {} },
        { pos: "ram", info: {} },
        { pos: "rdm", info: {} },
        { pos: "ldm", info: {} },
        { pos: "lam", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rb-4", info: {} },
        { pos: "rcb-4", info: {} },
        { pos: "lcb-4", info: {} },
        { pos: "lb-4", info: {} },
      ];
      break;
    case "4-3-2-1":
      fieldCardsTemp.attacks = [{ pos: "st", info: {} }];
      fieldCardsTemp.middles = [
        { pos: "rm", info: {} },
        { pos: "ram", info: {} },
        { pos: "cm", info: {} },
        { pos: "lam", info: {} },
        { pos: "lm", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rb-4", info: {} },
        { pos: "rcb-4", info: {} },
        { pos: "lcb-4", info: {} },
        { pos: "lb-4", info: {} },
      ];
      break;
    case "4-4-1-1":
      fieldCardsTemp.attacks = [{ pos: "st", info: {} }];
      fieldCardsTemp.middles = [
        { pos: "rm", info: {} },
        { pos: "rcm", info: {} },
        { pos: "cam", info: {} },
        { pos: "lcm", info: {} },
        { pos: "lm", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rb-4", info: {} },
        { pos: "rcb-4", info: {} },
        { pos: "lcb-4", info: {} },
        { pos: "lb-4", info: {} },
      ];
      break;
    case "4-5-1":
      fieldCardsTemp.attacks = [{ pos: "st", info: {} }];
      fieldCardsTemp.middles = [
        { pos: "rm", info: {} },
        { pos: "rcm", info: {} },
        { pos: "cm", info: {} },
        { pos: "lcm", info: {} },
        { pos: "lm", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rb-4", info: {} },
        { pos: "rcb-4", info: {} },
        { pos: "lcb-4", info: {} },
        { pos: "lb-4", info: {} },
      ];
      break;
    case "4-1-2-1-2-C":
      fieldCardsTemp.attacks = [
        { pos: "rs", info: {} },
        { pos: "ls", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "cam", info: {} },
        { pos: "rcm", info: {} },
        { pos: "cdm", info: {} },
        { pos: "lcm", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rb-4", info: {} },
        { pos: "rcb-4", info: {} },
        { pos: "lcb-4", info: {} },
        { pos: "lb-4", info: {} },
      ];
      break;
    case "4-1-3-2":
      fieldCardsTemp.attacks = [
        { pos: "rs", info: {} },
        { pos: "ls", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "rm", info: {} },
        { pos: "cam", info: {} },
        { pos: "cdm", info: {} },
        { pos: "lm", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rb-4", info: {} },
        { pos: "rcb-4", info: {} },
        { pos: "lcb-4", info: {} },
        { pos: "lb-4", info: {} },
      ];
      break;
    case "4-2-1-3-A":
      fieldCardsTemp.attacks = [
        { pos: "rw", info: {} },
        { pos: "st", info: {} },
        { pos: "lw", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "rcm", info: {} },
        { pos: "cam", info: {} },
        { pos: "lcm", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rb-4", info: {} },
        { pos: "rcb-4", info: {} },
        { pos: "lcb-4", info: {} },
        { pos: "lb-4", info: {} },
      ];
      break;
    case "4-2-2-2":
      fieldCardsTemp.attacks = [
        { pos: "ls", info: {} },
        { pos: "rs", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "rm", info: {} },
        { pos: "rdm", info: {} },
        { pos: "ldm", info: {} },
        { pos: "lm", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rb-4", info: {} },
        { pos: "rcb-4", info: {} },
        { pos: "lcb-4", info: {} },
        { pos: "lb-4", info: {} },
      ];
      break;
    case "4-2-4":
      fieldCardsTemp.attacks = [
        { pos: "rw", info: {} },
        { pos: "rs", info: {} },
        { pos: "ls", info: {} },
        { pos: "lw", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "rcm", info: {} },
        { pos: "lcm", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rb-4", info: {} },
        { pos: "rcb-4", info: {} },
        { pos: "lcb-4", info: {} },
        { pos: "lb-4", info: {} },
      ];
      break;
    case "4-3-3":
      fieldCardsTemp.attacks = [
        { pos: "rw", info: {} },
        { pos: "st", info: {} },
        { pos: "lw", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "rcm", info: {} },
        { pos: "cm", info: {} },
        { pos: "lcm", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rb-4", info: {} },
        { pos: "rcb-4", info: {} },
        { pos: "lcb-4", info: {} },
        { pos: "lb-4", info: {} },
      ];
      break;
    case "4-4-2":
      fieldCardsTemp.attacks = [
        { pos: "rs", info: {} },
        { pos: "ls", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "rm", info: {} },
        { pos: "rcm", info: {} },
        { pos: "lcm", info: {} },
        { pos: "lm", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rb-4", info: {} },
        { pos: "rcb-4", info: {} },
        { pos: "lcb-4", info: {} },
        { pos: "lb-4", info: {} },
      ];
      break;
    case "4-1-2-3":
      fieldCardsTemp.attacks = [
        { pos: "rw", info: {} },
        { pos: "st", info: {} },
        { pos: "lw", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "rcm", info: {} },
        { pos: "cdm", info: {} },
        { pos: "lcm", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rb-4", info: {} },
        { pos: "rcb-4", info: {} },
        { pos: "lcb-4", info: {} },
        { pos: "lb-4", info: {} },
      ];
      break;
    case "4-1-4-1":
      fieldCardsTemp.attacks = [{ pos: "st", info: {} }];
      fieldCardsTemp.middles = [
        { pos: "rm", info: {} },
        { pos: "rcm", info: {} },
        { pos: "cdm", info: {} },
        { pos: "lcm", info: {} },
        { pos: "lm", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rb-4", info: {} },
        { pos: "rcb-4", info: {} },
        { pos: "lcb-4", info: {} },
        { pos: "lb-4", info: {} },
      ];
      break;
    case "4-2-1-3-D":
      fieldCardsTemp.attacks = [
        { pos: "rw", info: {} },
        { pos: "st", info: {} },
        { pos: "lw", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "rdm", info: {} },
        { pos: "cam", info: {} },
        { pos: "ldm", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rb-4", info: {} },
        { pos: "rcb-4", info: {} },
        { pos: "lcb-4", info: {} },
        { pos: "lb-4", info: {} },
      ];
      break;
    case "4-2-2-2-A":
      fieldCardsTemp.attacks = [
        { pos: "rs", info: {} },
        { pos: "ls", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "ram", info: {} },
        { pos: "rdm", info: {} },
        { pos: "ldm", info: {} },
        { pos: "lam", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rb-4", info: {} },
        { pos: "rcb-4", info: {} },
        { pos: "lcb-4", info: {} },
        { pos: "lb-4", info: {} },
      ];
      break;
    case "4-3-1-2":
      fieldCardsTemp.attacks = [
        { pos: "rs", info: {} },
        { pos: "ls", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "cam", info: {} },
        { pos: "rcm", info: {} },
        { pos: "cm", info: {} },
        { pos: "lcm", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rb-4", info: {} },
        { pos: "rcb-4", info: {} },
        { pos: "lcb-4", info: {} },
        { pos: "lb-4", info: {} },
      ];
      break;
    case "4-3-3-F":
      fieldCardsTemp.attacks = [
        { pos: "rf", info: {} },
        { pos: "st", info: {} },
        { pos: "lf", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "rcm", info: {} },
        { pos: "cm", info: {} },
        { pos: "lcm", info: {} },
      ];
      fieldCardsTemp.defends = [
        { pos: "gk", info: {} },
        { pos: "rb-4", info: {} },
        { pos: "rcb-4", info: {} },
        { pos: "lcb-4", info: {} },
        { pos: "lb-4", info: {} },
      ];
      break;
    case "4-4-2-F":
      fieldCardsTemp.attacks = [
        { pos: "st", info: {} },
        { pos: "cf", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "rm", info: {} },
        { pos: "rcm", info: {} },
        { pos: "lcm", info: {} },
        { pos: "lm", info: {} },
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
    case "5-3-2":
      fieldCardsTemp.attacks = [
        { pos: "rs", info: {} },
        { pos: "ls", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "rcm", info: {} },
        { pos: "cm", info: {} },
        { pos: "lcm", info: {} },
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
    case "5-2-1-2":
      fieldCardsTemp.attacks = [
        { pos: "rs", info: {} },
        { pos: "ls", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "rcm", info: {} },
        { pos: "cam", info: {} },
        { pos: "lcm", info: {} },
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
    case "5-4-1":
      fieldCardsTemp.attacks = [{ pos: "st", info: {} }];
      fieldCardsTemp.middles = [
        { pos: "rm", info: {} },
        { pos: "rcm", info: {} },
        { pos: "lcm", info: {} },
        { pos: "lm", info: {} },
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
    case "5-2-3":
      fieldCardsTemp.attacks = [
        { pos: "rw", info: {} },
        { pos: "st", info: {} },
        { pos: "lw", info: {} },
      ];
      fieldCardsTemp.middles = [
        { pos: "rcm", info: {} },
        { pos: "lcm", info: {} },
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

  return fieldCardsTemp;
};

export { checkFieldCards };
