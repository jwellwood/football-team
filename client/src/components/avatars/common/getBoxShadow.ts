import { theme } from 'lib/theme';

export const getBoxShadow: Function = (shadow: string): string => {
  let boxShadow = '';

  const getShadowColor: Function = (color: string): string =>
    `0px 0px 10px 5px ${color}`;

  const { secondary, success, warning, error } = theme.palette;
  switch (shadow) {
    case 'secondary':
      boxShadow = getShadowColor(secondary.light);
      break;
    case 'success':
      boxShadow = getShadowColor(success.main);
      break;
    case 'warning':
      boxShadow = getShadowColor(warning.main);
      break;
    case 'error':
      boxShadow = getShadowColor(error.main);
      break;
    default:
      break;
  }
  return boxShadow;
};
