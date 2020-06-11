export const getResultSymbol = (points) => {
  switch (points) {
    case 3:
      return 'W';
    case 1:
      return 'D';
    case 0:
      return 'L';
    default:
      return '?';
  }
};
