import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from 'shared/theme';

export const useStyles = makeStyles((theme) => ({
  avatar: {
    fontWeight: 'bold',
    fontFamily: theme.typography.secondaryFont,
  },

  border: {
    boxShadow: `0px 0px 0px 3px ${theme.palette.secondary.dark}`,
  },
}));

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  bordered?: boolean;
  isList?: boolean;
  shadow?: string;
  background?: string;
  centered?: boolean;
}

const CustomAvatar: React.FC<Props> = ({
  children,
  onClick,
  bordered,
  isList,
  shadow,
  background,
  centered,
}) => {
  let boxShadow = null;
  let backgroundColor = 'transparent';

  switch (shadow) {
    case 'secondary':
      boxShadow = `0px 0px 10px 5px ${theme.palette.secondary.light}`;
      break;
    case 'success':
      boxShadow = `0px 0px 10px 5px ${theme.palette.success.main}`;
      break;
    case 'warning':
      boxShadow = `0px 0px 10px 5px ${theme.palette.warning.main}`;
      break;
    case 'error':
      boxShadow = `0px 0px 10px 5px ${theme.palette.error.main}`;
      break;
    default:
      break;
  }

  switch (background) {
    case 'first':
      backgroundColor = theme.palette.warning.main;
      break;
    case 'second':
      backgroundColor = theme.palette.secondary.light;
      break;
    case 'third':
      backgroundColor = theme.palette.warning.dark;
      break;
    case 'secondary':
      backgroundColor = theme.palette.secondary.light;
      break;
    case 'success':
      backgroundColor = theme.palette.success.main;
      break;
    case 'warning':
      backgroundColor = theme.palette.warning.main;
      break;
    case 'error':
      backgroundColor = theme.palette.error.main;
      break;
    default:
      break;
  }

  const classes = useStyles();
  const avatar = (
    <Avatar
      onClick={onClick}
      className={bordered ? classes.border : null}
      style={{
        fontWeight: 'bold',
        fontFamily: theme.typography.secondaryFont,
        boxShadow,
        backgroundColor,
        margin: centered ? 'auto' : 'inherit',
      }}
    >
      {children}
    </Avatar>
  );
  return isList ? <ListItemAvatar>{avatar}</ListItemAvatar> : avatar;
};

export default CustomAvatar;
