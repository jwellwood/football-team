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
  const {
    typography: { secondaryFont, fontFamily },
    palette: { primary, secondary, success, warning, error },
  } = theme;
  let textColor = main ? '#fff' : secondary.main;
  let fontSize = '';
  const textFont = font === 'secondary' ? secondaryFont : fontFamily;
  const textWeight = bold ? 'bold' : 'normal';
  const componentType = div ? 'div' : 'span';

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
    case 'primary':
      textColor = primary.main;
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
        fontFamily: textFont,
        fontSize: fontSize,
        fontWeight: textWeight,
      }}
      component={componentType}
    >
      {children}
    </Typography>
  );
};

export default CustomTypography;
