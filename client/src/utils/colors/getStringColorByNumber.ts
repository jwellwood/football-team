export const getStringColorByNumber: Function = (number: number) => {
  let color = 'secondary';
  switch (number) {
    case 3:
      color = 'success';
      break;
    case 1:
      color = 'warning';
      break;
    case 0:
      color = 'error';
      break;
    default:
      color = 'secondary';
  }
  return color;
};
