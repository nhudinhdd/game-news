export const getColorClass = (statistic: number) => {
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
