export const generateOrdinals = (num) => {
  if (num < 50) {
    switch (num) {
      case 1:
      case 21:
      case 31:
      case 41:
        return 'st';
      case 2:
      case 22:
      case 32:
      case 42:
        return 'nd';
      case 3:
      case 23:
      case 33:
      case 43:
        return 'rd';
      default:
        return 'th';
    }
  } else {
    return;
  }
};
