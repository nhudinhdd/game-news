import { FieldCardsType } from "@/types/sap-xep-doi-hinh";

const checkFieldCards = (fomatation: string) => {
  let fieldCardsTemp = {
    top: [],
    middle: [],
    bottom: [],
  } as FieldCardsType;

  switch (fomatation) {
    case "3-1-2-1-3":
      fieldCardsTemp.top = ["Thẻ cầu thủ", "Thẻ cầu thủ", "Thẻ cầu thủ"];
      fieldCardsTemp.middle = ["Thẻ cầu thủ", "Thẻ cầu thủ"];
      fieldCardsTemp.bottom = ["Thẻ cầu thủ"];
      break;
    default:
      return fieldCardsTemp;
  }
  console.log(fieldCardsTemp);
  return fieldCardsTemp;
};

export { checkFieldCards };
