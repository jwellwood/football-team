import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp, IconName } from '@fortawesome/fontawesome-svg-core';

export const useStyles = makeStyles((theme) => {
  const { primary, secondary, success, error, assist, warning } = theme.palette;
  return {
    primary: {
      color: primary.main,
    },
    secondary: {
      color: secondary.main,
    },
    white: {
      color: '#fff',
    },
    success: {
      color: success.main,
    },
    error: {
      color: error.main,
    },
    assist: {
      color: assist.main,
    },
    warning: {
      color: warning.main,
    },
  };
});

interface Props {
  icon: IconName;
  size?: SizeProp;
  color?: string;
  onClick?: () => void;
}

const CustomIcon: React.FC<Props> = ({ icon, size, color, onClick }) => {
  const classes = useStyles();
  const iconSize = size || 'lg';

  switch (color) {
    case 'primary':
      return (
        <FontAwesomeIcon
          icon={icon}
          size={iconSize}
          className={classes.primary}
        />
      );
    case 'secondary':
      return (
        <FontAwesomeIcon
          icon={icon}
          size={iconSize}
          className={classes.secondary}
        />
      );
    case 'white':
      return (
        <FontAwesomeIcon
          icon={icon}
          size={iconSize}
          className={classes.white}
          onClick={onClick}
        />
      );
    case 'success':
      return (
        <FontAwesomeIcon
          icon={icon}
          size={iconSize}
          className={classes.success}
        />
      );
    case 'error':
      return (
        <FontAwesomeIcon
          icon={icon}
          size={iconSize}
          className={classes.error}
        />
      );
    case 'assist':
      return (
        <FontAwesomeIcon
          icon={icon}
          size={iconSize}
          className={classes.assist}
        />
      );
    case 'warning':
      return (
        <FontAwesomeIcon
          icon={icon}
          size={iconSize}
          className={classes.warning}
        />
      );
    default:
      return <FontAwesomeIcon icon={icon} size={iconSize} />;
  }
};

export default CustomIcon;
