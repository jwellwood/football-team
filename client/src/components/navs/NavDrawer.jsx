// The trigger to open/ close drawer, and size of drawer
// ------------------------------------------------------
import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// Internal
import NavDrawerList from './NawDrawerList';
import CustomAvatar from 'components/ui/avatars/CustomAvatar';
import CustomIcon from 'components/ui/icons/CustomIcon';

export const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  drawer: {
    width: '66vw',
    maxWidth: 270,
    background: theme.palette.dark.main,
  },
}));

const NavDrawer = ({ user, auth, toggleDrawer, open, onLogout, admin }) => {
  const classes = useStyles();
  const button = (
    <CustomAvatar onClick={toggleDrawer} background='error'>
      {auth ? (
        user.name.charAt(0)
      ) : (
        <CustomIcon
          onClick={toggleDrawer}
          icon='bars'
          color='white'
          size='xs'
        />
      )}
    </CustomAvatar>
  );

  return (
    <>
      {button}
      <Drawer
        anchor='right'
        open={open}
        onClose={toggleDrawer}
        classes={{ paper: classes.drawer }}
      >
        <NavDrawerList
          onSelect={toggleDrawer}
          onLogout={onLogout}
          auth={auth}
          admin={admin}
          user={user}
        />
      </Drawer>
    </>
  );
};

export default NavDrawer;
