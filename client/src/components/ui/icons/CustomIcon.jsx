import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const useStyles = makeStyles(theme => ({
  primary: {
    color: theme.palette.primary.main
  },
  secondary: {
    color: theme.palette.secondary.main
  },
  white: {
    color: '#fff'
  },
  success: {
    color: theme.palette.success.main
  },
  error: {
    color: theme.palette.error.main
  },
  assist: {
    color: theme.palette.assist.main
  },
  warning: {
    color: theme.palette.warning.main
  }
}));

const CustomIcon = ({ icon, size, color }) => {
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
