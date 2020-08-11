import { theme } from 'lib/theme';

export const getThemeColorByNumber: Function = (number: number): string => {
  const { success, warning, error, secondary } = theme.palette;
  switch (number) {
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
