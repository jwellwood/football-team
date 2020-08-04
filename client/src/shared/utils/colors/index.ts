import { theme } from 'shared/theme';

export const getResultsColors: Function = (points: number): string => {
  const { success, warning, error, secondary } = theme.palette;
  switch (points) {
    case 3:
      return success.main;
    case 1:
      return warning.main;
    case 0:
      return error.main;
    default:
      return secondary.main;
  }
};

export const getBackground = (points: number) => {
  let background = null;
  switch (points) {
    case 3:
      background = 'success';
      break;
    case 1:
      background = 'warning';
      break;
    case 0:
      background = 'error';
      break;

    default:
      break;
  }
  return background;
};
