import { theme } from 'lib/theme';

export const getThemeColorByNumber: Function = (number: number): string => {
  const { success, warning, error, secondary } = theme.palette;
  if (typeof number !== 'number' && number) number = +number;
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
