import { FieldCardsType } from "@/types/sap-xep-doi-hinh";

const checkFieldCards = (fomatation: string, newArrPos: any) => {
  let fieldCardsTemp = {
    attacks: [],
    middles: [],
    defends: [],
    substitute: [],
  } as FieldCardsType;

  switch (fomatation) {
    case "3-1-2-1-3":
      fieldCardsTemp.attacks = [
        {
          pos: "lw",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[0]["moreAttribuite"],
        },
        {
          pos: "st",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[1]["moreAttribuite"],
        },
        {
          pos: "rw",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[2]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "cam",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[3]["moreAttribuite"],
        },
        {
          pos: "lm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[4]["moreAttribuite"],
        },
        {
          pos: "rm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[5]["moreAttribuite"],
        },
        {
          pos: "cdm",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lcb",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[7]["moreAttribuite"],
        },
        {
          pos: "cb",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[7]["moreAttribuite"],
        },
        {
          pos: "rcb",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[9]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[10]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "3-2-2-1-2":
      fieldCardsTemp.attacks = [
        {
          pos: "lw",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rw",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "cam",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "ldm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rdm",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lcb",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cb",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "3-2-3-2":
      fieldCardsTemp.attacks = [
        {
          pos: "st",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cf",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "lm",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "ldm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rdm",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lcb",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cb",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "3-1-4-2":
      fieldCardsTemp.attacks = [
        {
          pos: "ls",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rs",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "lm",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cdm",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lcb",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cb",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "3-4-1-2":
      fieldCardsTemp.attacks = [
        {
          pos: "ls",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rs",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "cam",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rm",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lcb",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cb",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "3-4-3":
      fieldCardsTemp.attacks = [
        {
          pos: "lw",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "st",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rw",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "lm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rm",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lcb",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cb",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "3-4-3-F":
      fieldCardsTemp.attacks = [
        {
          pos: "st",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lf",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rf",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "lm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rm",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lcb",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cb",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "4-1-2-1-2":
      fieldCardsTemp.attacks = [
        {
          pos: "ls",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rs",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "cam",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cdm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lb-4",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb-4",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb-4",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rb-4",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "4-1-2-3-F":
      fieldCardsTemp.attacks = [
        {
          pos: "lw",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rw",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cf",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "lcm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cdm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lb-4",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb-4",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb-4",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rb-4",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "4-2-1-3":
      fieldCardsTemp.attacks = [
        {
          pos: "lw",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "st",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rw",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "cm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "ldm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rdm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lb-4",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb-4",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb-4",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rb-4",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "4-2-2-1-1":
      fieldCardsTemp.attacks = [
        {
          pos: "st",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "cam",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lm",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "ldm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rdm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lb-4",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb-4",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb-4",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rb-4",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "4-2-3-1":
      fieldCardsTemp.attacks = [
        {
          pos: "st",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "lam",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cam",
          info: newArrPos[2]["info"],
          moreAttribuite: null,
        },
        {
          pos: "ram",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "ldm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rdm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lb-4",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb-4",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb-4",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rb-4",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: null,
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "4-3-2-1":
      fieldCardsTemp.attacks = [
        {
          pos: "st",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "lam",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "ram",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cm",
          info: newArrPos[4]["info"],
          moreAttribuite: null,
        },
        {
          pos: "rm",
          info: newArrPos[5]["info"],
          moreAttribuite: null,
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lb-4",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb-4",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb-4",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rb-4",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "4-4-1-1":
      fieldCardsTemp.attacks = [
        {
          pos: "st",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "cam",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lm",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lb-4",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb-4",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb-4",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rb-4",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "4-5-1":
      fieldCardsTemp.attacks = [
        {
          pos: "st",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "lm",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcm",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lb-4",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb-4",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb-4",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rb-4",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "4-1-2-1-2-C":
      fieldCardsTemp.attacks = [
        {
          pos: "ls",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rs",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "cam",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cdm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lb-4",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb-4",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb-4",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rb-4",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "4-1-3-2":
      fieldCardsTemp.attacks = [
        {
          pos: "ls",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rs",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "lm",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cdm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lb-4",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb-4",
          info: newArrPos[7]["info"],
          moreAttribuite: null,
        },
        {
          pos: "rcb-4",
          info: newArrPos[8]["info"],
          moreAttribuite: null,
        },
        {
          pos: "rb-4",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "4-2-1-3-A":
      fieldCardsTemp.attacks = [
        {
          pos: "lw",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "st",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rw",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "cam",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lb-4",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb-4",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb-4",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rb-4",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "4-2-2-2":
      fieldCardsTemp.attacks = [
        {
          pos: "ls",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rs",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "lm",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "ldm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rdm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lb-4",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb-4",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb-4",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rb-4",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "4-2-4":
      fieldCardsTemp.attacks = [
        {
          pos: "lw",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "ls",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rs",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rw",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "lcm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lb-4",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb-4",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb-4",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rb-4",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "4-3-3":
      fieldCardsTemp.attacks = [
        {
          pos: "lw",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "st",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rw",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "lcm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lb-4",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb-4",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb-4",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rb-4",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "4-4-2":
      fieldCardsTemp.attacks = [
        {
          pos: "ls",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rs",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "lm",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lb-4",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb-4",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb-4",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rb-4",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "4-1-2-3":
      fieldCardsTemp.attacks = [
        {
          pos: "lw",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "st",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rw",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "lcm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cdm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lb-4",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb-4",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb-4",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rb-4",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "4-1-4-1":
      fieldCardsTemp.attacks = [
        {
          pos: "st",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "lm",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcm",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cdm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lb-4",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb-4",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb-4",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rb-4",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "4-2-1-3-D":
      fieldCardsTemp.attacks = [
        {
          pos: "lw",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "st",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rw",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "cam",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "ldm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rdm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lb-4",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb-4",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb-4",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rb-4",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "4-2-2-2-A":
      fieldCardsTemp.attacks = [
        {
          pos: "ls",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rs",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "lam",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "ram",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "ldm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rdm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lb-4",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb-4",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb-4",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rb-4",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "4-3-1-2":
      fieldCardsTemp.attacks = [
        {
          pos: "ls",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rs",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "cam",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lb-4",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb-4",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb-4",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rb-4",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "4-3-3-F":
      fieldCardsTemp.attacks = [
        {
          pos: "st",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lf",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rf",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "lcm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lb-4",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb-4",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb-4",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rb-4",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "4-4-2-F":
      fieldCardsTemp.attacks = [
        {
          pos: "st",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cf",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "lm",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rm",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lb-4",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb-4",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb-4",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rb-4",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "5-1-2-1-1":
      fieldCardsTemp.attacks = [
        {
          pos: "st",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "cam",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lm",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cdm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lwb",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cb",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rwb",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "5-3-2":
      fieldCardsTemp.attacks = [
        {
          pos: "ls",
          info: newArrPos[0]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rs",
          info: newArrPos[1]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "lcm",
          info: newArrPos[2]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cm",
          info: newArrPos[3]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcm",
          info: newArrPos[4]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lwb",
          info: newArrPos[5]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "lcb",
          info: newArrPos[6]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "cb",
          info: newArrPos[7]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rcb",
          info: newArrPos[8]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "rwb",
          info: newArrPos[9]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: newArrPos[6]["moreAttribuite"],
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "5-2-1-2":
      fieldCardsTemp.attacks = [
        {
          pos: "ls",
          info: newArrPos[0]["info"],
          moreAttribuite: null,
        },
        {
          pos: "rs",
          info: newArrPos[1]["info"],
          moreAttribuite: null,
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "cam",
          info: newArrPos[2]["info"],
          moreAttribuite: null,
        },
        {
          pos: "lcm",
          info: newArrPos[3]["info"],
          moreAttribuite: null,
        },
        {
          pos: "rcm",
          info: newArrPos[4]["info"],
          moreAttribuite: null,
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lwb",
          info: newArrPos[5]["info"],
          moreAttribuite: null,
        },
        {
          pos: "lcb",
          info: newArrPos[6]["info"],
          moreAttribuite: null,
        },
        {
          pos: "cb",
          info: newArrPos[7]["info"],
          moreAttribuite: null,
        },
        {
          pos: "rcb",
          info: newArrPos[8]["info"],
          moreAttribuite: null,
        },
        {
          pos: "rwb",
          info: newArrPos[9]["info"],
          moreAttribuite: null,
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: null,
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "5-4-1":
      fieldCardsTemp.attacks = [
        {
          pos: "st",
          info: newArrPos[0]["info"],
          moreAttribuite: null,
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "lm",
          info: newArrPos[1]["info"],
          moreAttribuite: null,
        },
        {
          pos: "lcm",
          info: newArrPos[2]["info"],
          moreAttribuite: null,
        },
        {
          pos: "rcm",
          info: newArrPos[3]["info"],
          moreAttribuite: null,
        },
        {
          pos: "rm",
          info: newArrPos[4]["info"],
          moreAttribuite: null,
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lwb",
          info: newArrPos[5]["info"],
          moreAttribuite: null,
        },
        {
          pos: "lcb",
          info: newArrPos[6]["info"],
          moreAttribuite: null,
        },
        {
          pos: "cb",
          info: newArrPos[7]["info"],
          moreAttribuite: null,
        },
        {
          pos: "rcb",
          info: newArrPos[8]["info"],
          moreAttribuite: null,
        },
        {
          pos: "rwb",
          info: newArrPos[9]["info"],
          moreAttribuite: null,
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: null,
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    case "5-2-3":
      fieldCardsTemp.attacks = [
        {
          pos: "lw",
          info: newArrPos[0]["info"],
          moreAttribuite: null,
        },
        {
          pos: "st",
          info: newArrPos[1]["info"],
          moreAttribuite: null,
        },
        {
          pos: "rw",
          info: newArrPos[2]["info"],
          moreAttribuite: null,
        },
      ];
      fieldCardsTemp.middles = [
        {
          pos: "lcm",
          info: newArrPos[3]["info"],
          moreAttribuite: null,
        },
        {
          pos: "rcm",
          info: newArrPos[4]["info"],
          moreAttribuite: null,
        },
      ];
      fieldCardsTemp.defends = [
        {
          pos: "lwb",
          info: newArrPos[5]["info"],
          moreAttribuite: null,
        },
        {
          pos: "lcb",
          info: newArrPos[6]["info"],
          moreAttribuite: null,
        },
        {
          pos: "cb",
          info: newArrPos[7]["info"],
          moreAttribuite: null,
        },
        {
          pos: "rcb",
          info: newArrPos[8]["info"],
          moreAttribuite: null,
        },
        {
          pos: "rwb",
          info: newArrPos[9]["info"],
          moreAttribuite: null,
        },
        {
          pos: "gk",
          info: newArrPos[10]["info"],
          moreAttribuite: null,
        },
      ];
      fieldCardsTemp.substitute = [
        {
          pos: "empty-1",
          info: newArrPos[11]["info"],
        },
        {
          pos: "empty-2",
          info: newArrPos[12]["info"],
        },
        {
          pos: "empty-3",
          info: newArrPos[13]["info"],
        },
        {
          pos: "empty-4",
          info: newArrPos[14]["info"],
        },
        {
          pos: "empty-5",
          info: newArrPos[15]["info"],
        },
        {
          pos: "empty-6",
          info: newArrPos[16]["info"],
        },
        {
          pos: "empty-7",
          info: newArrPos[17]["info"],
        },
        {
          pos: "empty-8",
          info: newArrPos[18]["info"],
        },
        {
          pos: "empty-9",
          info: newArrPos[19]["info"],
        },
        {
          pos: "empty-10",
          info: newArrPos[20]["info"],
        },
      ];
      break;
    default:
      return fieldCardsTemp;
  }

  return fieldCardsTemp;
};

const checkPosition = (pos: string) => {
  switch (!!pos) {
    case ["lf", "ls"].includes(pos):
      return "LW";
    case ["rf", "rs"].includes(pos):
      return "RW";
    case ["lam", "ram"].includes(pos):
      return "CAM";
    case ["ldm", "rdm"].includes(pos):
      return "CDM";
    case ["lcm", "rcm"].includes(pos):
      return "CM";
    case ["lb-4"].includes(pos):
      return "LB";
    case ["rb-4"].includes(pos):
      return "RB";
    case ["lcb-4", "lcb", "rcb-4", "rcb"].includes(pos):
      return "CB";
    case ["empty-1", "empty-2", "empty-3", "empty-4", "empty-5"].includes(pos):
      return "EMPTY";
    default:
      return pos.toUpperCase();
  }
};

const formatPosition = (pos: string) => {
  switch (!!pos) {
    case ["lb-4"].includes(pos):
      return "LB";
    case ["rb-4"].includes(pos):
      return "RB";
    case ["lcb-4", "rcb-4"].includes(pos):
      return "CB";
    case ["empty-1", "empty-2", "empty-3", "empty-4", "empty-5"].includes(pos):
      return "EMPTY";
    default:
      return pos.toUpperCase();
  }
};

export { checkFieldCards, checkPosition, formatPosition };
