import React from 'react';
import { Typography } from '@material-ui/core';
import { theme } from 'lib/theme';

interface Props {
  children: React.ReactNode;
  color?: string;
  size?: string;
  font?: string;
  bold?: boolean;
  div?: boolean;
  main?: boolean;
}

const CustomTypography: React.FC<Props> = ({
  children,
  color,
  size,
  font,
  bold,
  div,
  main,
}) => {
  let textColor = main ? '#fff' : theme.palette.secondary.main;
  let fontFamily =
    font === 'secondary'
      ? theme.typography.secondaryFont
      : theme.typography.fontFamily;
  let fontSize = '';

  switch (color) {
    case 'success' || 'green':
      textColor = theme.palette.success.main;
      break;
    case 'warning' || 'yellow':
      textColor = theme.palette.warning.main;
      break;
    case 'error':
      textColor = theme.palette.error.main;
      break;
    case 'primary':
      textColor = theme.palette.primary.main;
      break;

    default:
      break;
  }

  switch (size) {
    case 'xs':
      fontSize = '12px';
      break;
    case 'sm':
      fontSize = '14px';
      break;
    case 'md':
      fontSize = '18px';
      break;
    case 'lg':
      fontSize = '24px';
      break;
    default:
      break;
  }

  return (
    <Typography
      style={{
        color: textColor,
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: bold ? 'bold' : 'normal',
      }}
      component={div ? 'div' : 'span'}
    >
      {children}
    </Typography>
  );
};

export default CustomTypography;
