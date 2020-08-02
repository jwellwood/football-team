import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
// Internal
import defaultImage from 'shared/assets/images/default_profile.png';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { theme } from 'shared/theme';

export const useStyles = makeStyles((theme) => ({
  border: {
    boxShadow: `0px 0px 0px 3px ${theme.palette.secondary.dark}`,
  },
}));

const CustomImageAvatar = ({ image, bordered, shadow, isList }) => {
  let boxShadow = null;
  switch (shadow) {
    case 'secondary':
      boxShadow = `0px 0px 10px 5px ${theme.palette.secondary.main}`;
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
  const classes = useStyles();
  const imageSrc = image !== 'default' ? image : defaultImage;
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
