import { theme } from 'lib/theme';

const {
  palette: { secondary, success, warning, error, goal, conceded, assist },
} = theme;

export const getThemeColorByType: Function = (background: string): string => {
  let backgroundColor = 'transparent';
  switch (background) {
    case 'first':
      backgroundColor = warning.main;
      break;
    case 'second':
      backgroundColor = secondary.light;
      break;
    case 'third':
      backgroundColor = warning.dark;
      break;
    case 'secondary':
      backgroundColor = secondary.light;
      break;
    case 'success':
      backgroundColor = success.main;
      break;
    case 'warning':
      backgroundColor = warning.main;
      break;
    case 'error':
      backgroundColor = error.main;
      break;
    case 'goal':
      backgroundColor = goal.main;
      break;
    case 'assist':
      backgroundColor = assist.main;
      break;
    case 'conceded':
      backgroundColor = conceded.main;
      break;
    default:
      break;
  }
  return backgroundColor;
};
