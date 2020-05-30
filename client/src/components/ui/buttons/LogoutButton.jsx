import React from 'react';
// MUI
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CustomIcon from '../icons/CustomIcon';

const LogoutButton = ({ onClick }) => {
  return (
    <ListItem button onClick={onClick}>
      <ListItemIcon>
        <CustomIcon color='primary' icon='sign-out-alt' />
      </ListItemIcon>
      <ListItemText primary='Sign out' />
    </ListItem>
  );
};

export default LogoutButton;
