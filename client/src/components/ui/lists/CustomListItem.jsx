import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const CustomListItem = ({ avatar, primary, secondary, icon, action }) => {
  const listAvatar = avatar ? <ListItemAvatar>{avatar}</ListItemAvatar> : null;
  const listText =
    primary || secondary ? (
      <ListItemText primary={primary} secondary={secondary} />
    ) : null;
  const listIcon = icon ? <ListItemIcon>{icon}</ListItemIcon> : null;
  const listAction = action ? (
    <ListItemSecondaryAction>{action}</ListItemSecondaryAction>
  ) : null;
  return (
    <ListItem>
      {listAvatar}
      {listIcon}
      {listText}
      {listAction}
    </ListItem>
  );
};

export default CustomListItem;
