import React, { ReactElement } from 'react';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from 'lib/theme';
import { getBoxShadow } from './common';
import { getThemeColorByType } from 'utils';

const {
  palette: { secondary },
  typography: { secondaryFont },
} = theme;

export const useStyles = makeStyles((theme) => ({
  avatar: {
    fontWeight: 'bold',
    fontFamily: secondaryFont,
  },

  border: {
    boxShadow: `0px 0px 0px 3px ${secondary.dark}`,
  },
}));

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  bordered?: boolean;
  isList?: boolean;
  shadow?: string;
  background?: string;
  centered?: boolean;
}

export default ({
  children,
  onClick,
  bordered,
  isList,
  shadow,
  background,
  centered,
}: Props): ReactElement => {
  const classes = useStyles();

  const boxShadow = getBoxShadow(shadow);
  const backgroundColor = getThemeColorByType(background);

  const avatar = (
    <Avatar
      onClick={onClick}
      className={bordered ? classes.border : null}
      style={{
        fontWeight: 'bold',
        fontFamily: secondaryFont,
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
