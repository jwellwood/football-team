import React from 'react';
import Typography from '@material-ui/core/Typography';
import { theme } from 'assets/theme';

const CustomText = ({ children, type, text, div, color }) => {
  const { warning, success, error, secondary } = theme.palette;
  const { secondaryFont } = theme.typography;

  let style = {};
  let variant = '';

  let textColor = '';
  if (color) {
    switch (color) {
      case 'success':
        textColor = success.main;
        break;
      case 'warning':
        textColor = warning.main;
        break;
      case 'error':
        textColor = error.main;
        break;
      default:
        break;
    }
  }
  switch (type) {
    case 'highlight':
      style = {
        color: color ? textColor : warning.main,
        fontFamily: secondaryFont,
      };
      break;
    case 'placeholder':
      style = {
        color: color ? textColor : secondary.main,
      };
      break;
    case 'muted':
      style = {
        color: color ? textColor : secondary.main,
      };
      break;

    case 'caption':
      style = {
        color: color ? textColor : secondary.main,
      };
      variant = 'caption';
      break;
    case 'red':
      style = {
        color: color ? textColor : error.main,
        fontFamily: secondaryFont,
      };
      break;
    case 'large':
      variant = 'h5';
      style = {
        color: color ? textColor : secondary.main,
      };
      break;
    default:
      break;
  }

  return (
    <Typography
      component={div ? 'div' : 'span'}
      variant={variant || 'body2'}
      style={{ ...style }}
    >
      {text || children}
    </Typography>
  );
};

export default CustomText;
