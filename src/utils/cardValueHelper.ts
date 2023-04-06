export const cardValueHelper = (value: string): number => {
  switch (value) {
    case "ACE":
      return 14;
    case "KING":
      return 13;
    case "QUEEN":
      return 12;
    case "JACK":
      return 11;
    default:
      return parseInt(value);
  }
};
