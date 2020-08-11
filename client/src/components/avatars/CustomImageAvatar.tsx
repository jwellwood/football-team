import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import defaultImage from 'shared/assets/images/default_profile.png';
import { getBoxShadow } from './common';

export const useStyles = makeStyles((theme) => ({
  border: {
    boxShadow: `0px 0px 0px 3px ${theme.palette.secondary.dark}`,
  },
}));

interface Props {
  imageUrl: string;
  bordered?: boolean;
  shadow?: string;
  isList?: boolean;
  alt?: string;
}

export default ({ imageUrl, bordered, shadow, isList }: Props) => {
  let boxShadow = getBoxShadow(shadow);
  const classes = useStyles();
  const imageSrc: string = imageUrl !== 'default' ? imageUrl : defaultImage;
  const avatar = (
    <Avatar
      src={imageSrc}
      className={bordered ? classes.border : null}
      style={{ boxShadow, margin: 'inherit' }}
    />
  );
  return isList ? <ListItemAvatar>{avatar}</ListItemAvatar> : avatar;
};
