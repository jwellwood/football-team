import { theme } from 'assets/theme';

export const getResultsColors = (points) => {
  switch (points) {
    case 3:
      return theme.palette.success.main;
    case 1:
      return theme.palette.warning.main;
    case 0:
      return theme.palette.error.main;
    default:
      return theme.palette.secondary.main;
  }
};
