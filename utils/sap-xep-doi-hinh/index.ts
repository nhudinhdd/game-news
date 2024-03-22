import { FieldCardsType } from "@/types/sap-xep-doi-hinh";

const checkFieldCards = (fomatation: string, newArrPos: any) => {
  let fieldCardsTemp = {
    attacks: [],
    middles: [],
    defends: [],
  } as FieldCardsType;

  switch (fomatation) {
    case "3-1-2-1-3":
      fieldCardsTemp.attacks = [
        { pos: "lw", info: newArrPos[0]["info"] },
        { pos: "st", info: newArrPos[1]["info"] },
        { pos: "rw", info: newArrPos[2]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "cam", info: newArrPos[3]["info"] },
        { pos: "lm", info: newArrPos[4]["info"] },
        { pos: "rm", info: newArrPos[5]["info"] },
        { pos: "cdm", info: newArrPos[6]["info"] },
      ];
      fieldCardsTemp.defends = [
        { pos: "lcb", info: newArrPos[7]["info"] },
        { pos: "cb", info: newArrPos[8]["info"] },
        { pos: "rcb", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "3-2-2-1-2":
      fieldCardsTemp.attacks = [
        { pos: "lw", info: newArrPos[0]["info"] },
        { pos: "rw", info: newArrPos[1]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "cam", info: newArrPos[2]["info"] },
        { pos: "lm", info: newArrPos[3]["info"] },
        { pos: "rm", info: newArrPos[4]["info"] },
        { pos: "ldm", info: newArrPos[5]["info"] },
        { pos: "rdm", info: newArrPos[6]["info"] },
      ];
      fieldCardsTemp.defends = [
        { pos: "lcb", info: newArrPos[7]["info"] },
        { pos: "cb", info: newArrPos[8]["info"] },
        { pos: "rcb", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "3-2-3-2":
      fieldCardsTemp.attacks = [
        { pos: "st", info: newArrPos[0]["info"] },
        { pos: "cf", info: newArrPos[1]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "lm", info: newArrPos[2]["info"] },
        { pos: "cm", info: newArrPos[3]["info"] },
        { pos: "rm", info: newArrPos[4]["info"] },
        { pos: "ldm", info: newArrPos[5]["info"] },
        { pos: "rdm", info: newArrPos[6]["info"] },
      ];
      fieldCardsTemp.defends = [
        { pos: "lcb", info: newArrPos[7]["info"] },
        { pos: "cb", info: newArrPos[8]["info"] },
        { pos: "rcb", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "3-1-4-2":
      fieldCardsTemp.attacks = [
        { pos: "ls", info: newArrPos[0]["info"] },
        { pos: "rs", info: newArrPos[1]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "lm", info: newArrPos[2]["info"] },
        { pos: "lcm", info: newArrPos[3]["info"] },
        { pos: "rcm", info: newArrPos[4]["info"] },
        { pos: "rm", info: newArrPos[5]["info"] },
        { pos: "cdm", info: newArrPos[6]["info"] },
      ];
      fieldCardsTemp.defends = [
        { pos: "lcb", info: newArrPos[7]["info"] },
        { pos: "cb", info: newArrPos[8]["info"] },
        { pos: "rcb", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "3-4-1-2":
      fieldCardsTemp.attacks = [
        { pos: "ls", info: newArrPos[0]["info"] },
        { pos: "rs", info: newArrPos[1]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "cam", info: newArrPos[2]["info"] },
        { pos: "lm", info: newArrPos[3]["info"] },
        { pos: "lcm", info: newArrPos[4]["info"] },
        { pos: "rcm", info: newArrPos[5]["info"] },
        { pos: "rm", info: newArrPos[6]["info"] },
      ];
      fieldCardsTemp.defends = [
        { pos: "lcb", info: newArrPos[7]["info"] },
        { pos: "cb", info: newArrPos[8]["info"] },
        { pos: "rcb", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "3-4-3":
      fieldCardsTemp.attacks = [
        { pos: "lw", info: newArrPos[0]["info"] },
        { pos: "st", info: newArrPos[1]["info"] },
        { pos: "rw", info: newArrPos[2]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "lm", info: newArrPos[3]["info"] },
        { pos: "lcm", info: newArrPos[4]["info"] },
        { pos: "rcm", info: newArrPos[5]["info"] },
        { pos: "rm", info: newArrPos[6]["info"] },
      ];
      fieldCardsTemp.defends = [
        { pos: "lcb", info: newArrPos[7]["info"] },
        { pos: "cb", info: newArrPos[8]["info"] },
        { pos: "rcb", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "3-4-3-F":
      fieldCardsTemp.attacks = [
        { pos: "st", info: newArrPos[0]["info"] },
        { pos: "lf", info: newArrPos[1]["info"] },
        { pos: "rf", info: newArrPos[2]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "lm", info: newArrPos[3]["info"] },
        { pos: "lcm", info: newArrPos[4]["info"] },
        { pos: "rcm", info: newArrPos[5]["info"] },
        { pos: "rm", info: newArrPos[6]["info"] },
      ];
      fieldCardsTemp.defends = [
        { pos: "lcb", info: newArrPos[7]["info"] },
        { pos: "cb", info: newArrPos[8]["info"] },
        { pos: "rcb", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "4-1-2-1-2":
      fieldCardsTemp.attacks = [
        { pos: "ls", info: newArrPos[0]["info"] },
        { pos: "rs", info: newArrPos[1]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "cam", info: newArrPos[2]["info"] },
        { pos: "lm", info: newArrPos[3]["info"] },
        { pos: "rm", info: newArrPos[4]["info"] },
        { pos: "cdm", info: newArrPos[5]["info"] },
      ];
      fieldCardsTemp.defends = [
        { pos: "lb-4", info: newArrPos[6]["info"] },
        { pos: "lcb-4", info: newArrPos[7]["info"] },
        { pos: "rcb-4", info: newArrPos[8]["info"] },
        { pos: "rb-4", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "4-1-2-3-F":
      fieldCardsTemp.attacks = [
        { pos: "lw", info: newArrPos[0]["info"] },
        { pos: "rw", info: newArrPos[1]["info"] },
        { pos: "cf", info: newArrPos[2]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "lcm", info: newArrPos[3]["info"] },
        { pos: "rcm", info: newArrPos[4]["info"] },
        { pos: "cdm", info: newArrPos[5]["info"] },
      ];
      fieldCardsTemp.defends = [
        { pos: "lb-4", info: newArrPos[6]["info"] },
        { pos: "lcb-4", info: newArrPos[7]["info"] },
        { pos: "rcb-4", info: newArrPos[8]["info"] },
        { pos: "rb-4", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "4-2-1-3":
      fieldCardsTemp.attacks = [
        { pos: "lw", info: newArrPos[0]["info"] },
        { pos: "st", info: newArrPos[1]["info"] },
        { pos: "rw", info: newArrPos[2]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "cm", info: newArrPos[3]["info"] },
        { pos: "ldm", info: newArrPos[4]["info"] },
        { pos: "rdm", info: newArrPos[5]["info"] },
      ];
      fieldCardsTemp.defends = [
        { pos: "lb-4", info: newArrPos[6]["info"] },
        { pos: "lcb-4", info: newArrPos[7]["info"] },
        { pos: "rcb-4", info: newArrPos[8]["info"] },
        { pos: "rb-4", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "4-2-2-1-1":
      fieldCardsTemp.attacks = [{ pos: "st", info: newArrPos[0]["info"] }];
      fieldCardsTemp.middles = [
        { pos: "cam", info: newArrPos[1]["info"] },
        { pos: "lm", info: newArrPos[2]["info"] },
        { pos: "rm", info: newArrPos[3]["info"] },
        { pos: "ldm", info: newArrPos[4]["info"] },
        { pos: "rdm", info: newArrPos[5]["info"] },
      ];
      fieldCardsTemp.defends = [
        { pos: "lb-4", info: newArrPos[6]["info"] },
        { pos: "lcb-4", info: newArrPos[7]["info"] },
        { pos: "rcb-4", info: newArrPos[8]["info"] },
        { pos: "rb-4", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "4-2-3-1":
      fieldCardsTemp.attacks = [{ pos: "st", info: newArrPos[0]["info"] }];
      fieldCardsTemp.middles = [
        { pos: "lam", info: newArrPos[1]["info"] },
        { pos: "cam", info: newArrPos[2]["info"] },
        { pos: "ram", info: newArrPos[3]["info"] },
        { pos: "ldm", info: newArrPos[4]["info"] },
        { pos: "rdm", info: newArrPos[5]["info"] },
      ];
      fieldCardsTemp.defends = [
        { pos: "lb-4", info: newArrPos[6]["info"] },
        { pos: "lcb-4", info: newArrPos[7]["info"] },
        { pos: "rcb-4", info: newArrPos[8]["info"] },
        { pos: "rb-4", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "4-3-2-1":
      fieldCardsTemp.attacks = [{ pos: "st", info: newArrPos[0]["info"] }];
      fieldCardsTemp.middles = [
        { pos: "lam", info: newArrPos[1]["info"] },
        { pos: "ram", info: newArrPos[2]["info"] },
        { pos: "lm", info: newArrPos[3]["info"] },
        { pos: "cm", info: newArrPos[4]["info"] },
        { pos: "rm", info: newArrPos[5]["info"] },
      ];
      fieldCardsTemp.defends = [
        { pos: "lb-4", info: newArrPos[6]["info"] },
        { pos: "lcb-4", info: newArrPos[7]["info"] },
        { pos: "rcb-4", info: newArrPos[8]["info"] },
        { pos: "rb-4", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "4-4-1-1":
      fieldCardsTemp.attacks = [{ pos: "st", info: newArrPos[0]["info"] }];
      fieldCardsTemp.middles = [
        { pos: "cam", info: newArrPos[1]["info"] },
        { pos: "lm", info: newArrPos[2]["info"] },
        { pos: "lcm", info: newArrPos[3]["info"] },
        { pos: "rcm", info: newArrPos[4]["info"] },
        { pos: "rm", info: newArrPos[5]["info"] },
      ];
      fieldCardsTemp.defends = [
        { pos: "lb-4", info: newArrPos[6]["info"] },
        { pos: "lcb-4", info: newArrPos[7]["info"] },
        { pos: "rcb-4", info: newArrPos[8]["info"] },
        { pos: "rb-4", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "4-5-1":
      fieldCardsTemp.attacks = [{ pos: "st", info: newArrPos[0]["info"] }];
      fieldCardsTemp.middles = [
        { pos: "lm", info: newArrPos[1]["info"] },
        { pos: "lcm", info: newArrPos[2]["info"] },
        { pos: "cm", info: newArrPos[3]["info"] },
        { pos: "rcm", info: newArrPos[4]["info"] },
        { pos: "rm", info: newArrPos[5]["info"] },
      ];
      fieldCardsTemp.defends = [
        { pos: "lb-4", info: newArrPos[6]["info"] },
        { pos: "lcb-4", info: newArrPos[7]["info"] },
        { pos: "rcb-4", info: newArrPos[8]["info"] },
        { pos: "rb-4", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "4-1-2-1-2-C":
      fieldCardsTemp.attacks = [
        { pos: "ls", info: newArrPos[0]["info"] },
        { pos: "rs", info: newArrPos[1]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "cam", info: newArrPos[2]["info"] },
        { pos: "lcm", info: newArrPos[3]["info"] },
        { pos: "rcm", info: newArrPos[4]["info"] },
        { pos: "cdm", info: newArrPos[5]["info"] },
      ];
      fieldCardsTemp.defends = [
        { pos: "lb-4", info: newArrPos[6]["info"] },
        { pos: "lcb-4", info: newArrPos[7]["info"] },
        { pos: "rcb-4", info: newArrPos[8]["info"] },
        { pos: "rb-4", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "4-1-3-2":
      fieldCardsTemp.attacks = [
        { pos: "ls", info: newArrPos[0]["info"] },
        { pos: "rs", info: newArrPos[1]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "lm", info: newArrPos[2]["info"] },
        { pos: "cm", info: newArrPos[3]["info"] },
        { pos: "rm", info: newArrPos[4]["info"] },
        { pos: "cdm", info: newArrPos[5]["info"] },
      ];
      fieldCardsTemp.defends = [
        { pos: "lb-4", info: newArrPos[6]["info"] },
        { pos: "lcb-4", info: newArrPos[7]["info"] },
        { pos: "rcb-4", info: newArrPos[8]["info"] },
        { pos: "rb-4", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "4-2-1-3-A":
      fieldCardsTemp.attacks = [
        { pos: "lw", info: newArrPos[0]["info"] },
        { pos: "st", info: newArrPos[1]["info"] },
        { pos: "rw", info: newArrPos[2]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "cam", info: newArrPos[3]["info"] },
        { pos: "lcm", info: newArrPos[4]["info"] },
        { pos: "rcm", info: newArrPos[5]["info"] },
      ];
      fieldCardsTemp.defends = [
        { pos: "lb-4", info: newArrPos[6]["info"] },
        { pos: "lcb-4", info: newArrPos[7]["info"] },
        { pos: "rcb-4", info: newArrPos[8]["info"] },
        { pos: "rb-4", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "4-2-2-2":
      fieldCardsTemp.attacks = [
        { pos: "ls", info: newArrPos[0]["info"] },
        { pos: "rs", info: newArrPos[1]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "lm", info: newArrPos[2]["info"] },
        { pos: "rm", info: newArrPos[3]["info"] },
        { pos: "ldm", info: newArrPos[4]["info"] },
        { pos: "rdm", info: newArrPos[5]["info"] },
      ];
      fieldCardsTemp.defends = [
       { pos: "lb-4", info: newArrPos[6]["info"] },
        { pos: "lcb-4", info: newArrPos[7]["info"] },
        { pos: "rcb-4", info: newArrPos[8]["info"] },
        { pos: "rb-4", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "4-2-4":
      fieldCardsTemp.attacks = [
        { pos: "lw", info: newArrPos[0]["info"] },
        { pos: "ls", info: newArrPos[1]["info"] },
        { pos: "rs", info: newArrPos[2]["info"] },
        { pos: "rw", info: newArrPos[3]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "lcm", info: newArrPos[4]["info"] },
        { pos: "rcm", info: newArrPos[5]["info"] },
      ];
      fieldCardsTemp.defends = [
       { pos: "lb-4", info: newArrPos[6]["info"] },
        { pos: "lcb-4", info: newArrPos[7]["info"] },
        { pos: "rcb-4", info: newArrPos[8]["info"] },
        { pos: "rb-4", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "4-3-3":
      fieldCardsTemp.attacks = [
        { pos: "lw", info: newArrPos[0]["info"] },
        { pos: "st", info: newArrPos[1]["info"] },
        { pos: "rw", info: newArrPos[2]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "lcm", info: newArrPos[3]["info"] },
        { pos: "cm", info: newArrPos[4]["info"] },
        { pos: "rcm", info: newArrPos[5]["info"] },
      ];
      fieldCardsTemp.defends = [
       { pos: "lb-4", info: newArrPos[6]["info"] },
        { pos: "lcb-4", info: newArrPos[7]["info"] },
        { pos: "rcb-4", info: newArrPos[8]["info"] },
        { pos: "rb-4", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "4-4-2":
      fieldCardsTemp.attacks = [
        { pos: "ls", info: newArrPos[0]["info"] },
        { pos: "rs", info: newArrPos[1]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "lm", info: newArrPos[2]["info"] },
        { pos: "lcm", info: newArrPos[3]["info"] },
        { pos: "rcm", info: newArrPos[4]["info"] },
        { pos: "rm", info: newArrPos[5]["info"] },
      ];
      fieldCardsTemp.defends = [
       { pos: "lb-4", info: newArrPos[6]["info"] },
        { pos: "lcb-4", info: newArrPos[7]["info"] },
        { pos: "rcb-4", info: newArrPos[8]["info"] },
        { pos: "rb-4", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "4-1-2-3":
      fieldCardsTemp.attacks = [
        { pos: "lw", info: newArrPos[0]["info"] },
        { pos: "st", info: newArrPos[1]["info"] },
        { pos: "rw", info: newArrPos[2]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "lcm", info: newArrPos[3]["info"] },
        { pos: "cdm", info: newArrPos[4]["info"] },
        { pos: "rcm", info: newArrPos[5]["info"] },
      ];
      fieldCardsTemp.defends = [
       { pos: "lb-4", info: newArrPos[6]["info"] },
        { pos: "lcb-4", info: newArrPos[7]["info"] },
        { pos: "rcb-4", info: newArrPos[8]["info"] },
        { pos: "rb-4", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "4-1-4-1":
      fieldCardsTemp.attacks = [{ pos: "st", info: newArrPos[0]["info"] }];
      fieldCardsTemp.middles = [
        { pos: "lm", info: newArrPos[1]["info"] },
        { pos: "lcm", info: newArrPos[2]["info"] },
        { pos: "rcm", info: newArrPos[3]["info"] },
        { pos: "rm", info: newArrPos[4]["info"] },
        { pos: "cdm", info: newArrPos[5]["info"] },
      ];
      fieldCardsTemp.defends = [
       { pos: "lb-4", info: newArrPos[6]["info"] },
        { pos: "lcb-4", info: newArrPos[7]["info"] },
        { pos: "rcb-4", info: newArrPos[8]["info"] },
        { pos: "rb-4", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "4-2-1-3-D":
      fieldCardsTemp.attacks = [
        { pos: "lw", info: newArrPos[0]["info"] },
        { pos: "st", info: newArrPos[1]["info"] },
        { pos: "rw", info: newArrPos[2]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "cam", info: newArrPos[3]["info"] },
        { pos: "ldm", info: newArrPos[4]["info"] },
        { pos: "rdm", info: newArrPos[5]["info"] },
      ];
      fieldCardsTemp.defends = [
       { pos: "lb-4", info: newArrPos[6]["info"] },
        { pos: "lcb-4", info: newArrPos[7]["info"] },
        { pos: "rcb-4", info: newArrPos[8]["info"] },
        { pos: "rb-4", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "4-2-2-2-A":
      fieldCardsTemp.attacks = [
        { pos: "ls", info: newArrPos[0]["info"] },
        { pos: "rs", info: newArrPos[1]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "lam", info: newArrPos[2]["info"] },
        { pos: "ram", info: newArrPos[3]["info"] },
        { pos: "ldm", info: newArrPos[4]["info"] },
        { pos: "rdm", info: newArrPos[5]["info"] },
      ];
      fieldCardsTemp.defends = [
       { pos: "lb-4", info: newArrPos[6]["info"] },
        { pos: "lcb-4", info: newArrPos[7]["info"] },
        { pos: "rcb-4", info: newArrPos[8]["info"] },
        { pos: "rb-4", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "4-3-1-2":
      fieldCardsTemp.attacks = [
        { pos: "ls", info: newArrPos[0]["info"] },
        { pos: "rs", info: newArrPos[1]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "cam", info: newArrPos[2]["info"] },
        { pos: "lcm", info: newArrPos[3]["info"] },
        { pos: "cm", info: newArrPos[4]["info"] },
        { pos: "rcm", info: newArrPos[5]["info"] },
      ];
      fieldCardsTemp.defends = [
       { pos: "lb-4", info: newArrPos[6]["info"] },
        { pos: "lcb-4", info: newArrPos[7]["info"] },
        { pos: "rcb-4", info: newArrPos[8]["info"] },
        { pos: "rb-4", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "4-3-3-F":
      fieldCardsTemp.attacks = [
        { pos: "st", info: newArrPos[0]["info"] },
        { pos: "lf", info: newArrPos[1]["info"] },
        { pos: "rf", info: newArrPos[2]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "lcm", info: newArrPos[3]["info"] },
        { pos: "cm", info: newArrPos[4]["info"] },
        { pos: "rcm", info: newArrPos[5]["info"] },
      ];
      fieldCardsTemp.defends = [
       { pos: "lb-4", info: newArrPos[6]["info"] },
        { pos: "lcb-4", info: newArrPos[7]["info"] },
        { pos: "rcb-4", info: newArrPos[8]["info"] },
        { pos: "rb-4", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "4-4-2-F":
      fieldCardsTemp.attacks = [
        { pos: "st", info: newArrPos[0]["info"] },
        { pos: "cf", info: newArrPos[1]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "lm", info: newArrPos[2]["info"] },
        { pos: "lcm", info: newArrPos[3]["info"] },
        { pos: "rcm", info: newArrPos[4]["info"] },
        { pos: "rm", info: newArrPos[5]["info"] },
      ];
      fieldCardsTemp.defends = [
       { pos: "lb-4", info: newArrPos[6]["info"] },
        { pos: "lcb-4", info: newArrPos[7]["info"] },
        { pos: "rcb-4", info: newArrPos[8]["info"] },
        { pos: "rb-4", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "5-1-2-1-1":
      fieldCardsTemp.attacks = [{ pos: "st", info: newArrPos[0]["info"] }];
      fieldCardsTemp.middles = [
        { pos: "cam", info: newArrPos[1]["info"] },
        { pos: "lm", info: newArrPos[2]["info"] },
        { pos: "rm", info: newArrPos[3]["info"] },
        { pos: "cdm", info: newArrPos[4]["info"] },
      ];
      fieldCardsTemp.defends = [
        { pos: "lwb", info: newArrPos[5]["info"] },
        { pos: "lcb", info: newArrPos[6]["info"] },
        { pos: "cb", info: newArrPos[7]["info"] },
        { pos: "rcb", info: newArrPos[8]["info"] },
        { pos: "rwb", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "5-3-2":
      fieldCardsTemp.attacks = [
        { pos: "ls", info: newArrPos[0]["info"] },
        { pos: "rs", info: newArrPos[1]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "lcm", info: newArrPos[2]["info"] },
        { pos: "cm", info: newArrPos[3]["info"] },
        { pos: "rcm", info: newArrPos[4]["info"] },
      ];
      fieldCardsTemp.defends = [
        { pos: "lwb", info: newArrPos[5]["info"] },
        { pos: "lcb", info: newArrPos[6]["info"] },
        { pos: "cb", info: newArrPos[7]["info"] },
        { pos: "rcb", info: newArrPos[8]["info"] },
        { pos: "rwb", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "5-2-1-2":
      fieldCardsTemp.attacks = [
        { pos: "ls", info: newArrPos[0]["info"] },
        { pos: "rs", info: newArrPos[1]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "cam", info: newArrPos[2]["info"] },
        { pos: "lcm", info: newArrPos[3]["info"] },
        { pos: "rcm", info: newArrPos[4]["info"] },
      ];
      fieldCardsTemp.defends = [
        { pos: "lwb", info: newArrPos[5]["info"] },
        { pos: "lcb", info: newArrPos[6]["info"] },
        { pos: "cb", info: newArrPos[7]["info"] },
        { pos: "rcb", info: newArrPos[8]["info"] },
        { pos: "rwb", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "5-4-1":
      fieldCardsTemp.attacks = [{ pos: "st", info: newArrPos[0]["info"] }];
      fieldCardsTemp.middles = [
        { pos: "lm", info: newArrPos[1]["info"] },
        { pos: "lcm", info: newArrPos[2]["info"] },
        { pos: "rcm", info: newArrPos[3]["info"] },
        { pos: "rm", info: newArrPos[4]["info"] },
      ];
      fieldCardsTemp.defends = [
        { pos: "lwb", info: newArrPos[5]["info"] },
        { pos: "lcb", info: newArrPos[6]["info"] },
        { pos: "cb", info: newArrPos[7]["info"] },
        { pos: "rcb", info: newArrPos[8]["info"] },
        { pos: "rwb", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    case "5-2-3":
      fieldCardsTemp.attacks = [
        { pos: "lw", info: newArrPos[0]["info"] },
        { pos: "st", info: newArrPos[1]["info"] },
        { pos: "rw", info: newArrPos[2]["info"] },
      ];
      fieldCardsTemp.middles = [
        { pos: "lcm", info: newArrPos[3]["info"] },
        { pos: "rcm", info: newArrPos[4]["info"] },
      ];
      fieldCardsTemp.defends = [
        { pos: "lwb", info: newArrPos[5]["info"] },
        { pos: "lcb", info: newArrPos[6]["info"] },
        { pos: "cb", info: newArrPos[7]["info"] },
        { pos: "rcb", info: newArrPos[8]["info"] },
        { pos: "rwb", info: newArrPos[9]["info"] },
        { pos: "gk", info: newArrPos[10]["info"] },
      ];
      break;
    default:
      return fieldCardsTemp;
  }

  return fieldCardsTemp;
};

export { checkFieldCards };
