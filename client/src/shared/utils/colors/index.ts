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
