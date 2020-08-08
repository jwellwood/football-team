import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
// Internal
import defaultImage from 'shared/assets/images/default_profile.png';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { theme } from 'lib/theme';

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

const CustomImageAvatar: React.FC<Props> = ({
  imageUrl,
  bordered,
  shadow,
  isList,
}) => {
  let boxShadow = null;
  const { secondary, success, warning, error } = theme.palette;
  switch (shadow) {
    case 'secondary':
      boxShadow = `0px 0px 10px 5px ${secondary.main}`;
      break;
    case 'success':
      boxShadow = `0px 0px 10px 5px ${success.main}`;
      break;
    case 'warning':
      boxShadow = `0px 0px 10px 5px ${warning.main}`;
      break;
    case 'error':
      boxShadow = `0px 0px 10px 5px ${error.main}`;
      break;
    default:
      break;
  }
  const classes = useStyles();
  const imageSrc = imageUrl !== 'default' ? imageUrl : defaultImage;
  const avatar = (
    <Avatar
      src={imageSrc}
      className={bordered ? classes.border : null}
      style={{ boxShadow, margin: 'inherit' }}
    />
  );
  return isList ? <ListItemAvatar>{avatar}</ListItemAvatar> : avatar;
};

export default CustomImageAvatar;
