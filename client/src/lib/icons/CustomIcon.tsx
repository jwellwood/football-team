import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp, IconName } from '@fortawesome/fontawesome-svg-core';
import { theme } from 'lib/theme';

interface Props {
  icon: IconName;
  size?: SizeProp;
  color?: string;
  onClick?: () => void;
}

const CustomIcon: React.FC<Props> = ({ icon, size, color, onClick }) => {
  const { primary, secondary, success, error, assist, warning } = theme.palette;
  const iconSize = size || 'lg';
  let iconColor = '';

  switch (color) {
    case 'primary':
      iconColor = primary.main;
      break;
    case 'secondary':
      iconColor = secondary.main;
      break;
    case 'success':
      iconColor = success.main;
      break;
    case 'error':
      iconColor = error.main;
      break;
    case 'assist':
      iconColor = assist.main;
      break;
    case 'warning':
      iconColor = warning.main;
      break;
    case 'white':
      iconColor = '#fff';
      break;
    default:
      break;
  }

  return (
    <FontAwesomeIcon
      icon={icon}
      color={iconColor}
      size={iconSize}
      onClick={onClick}
    />
  );
};

export default CustomIcon;
