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
import { Fab } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'flex-end',
    background: 'rgba(0,0,0,0.8)',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 1000,
    fontFamily: theme.typography.secondaryFont,
    fontWeight: 'bold',
  },
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
    <Fab
      size='small'
      color='primary'
      className={classes.fab}
      onClick={toggleDrawer}
    >
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
    </Fab>
  );
  // const button = (
  //   <CustomAvatar onClick={toggleDrawer} background='error'>
  //     {auth ? (
  //       user.name.charAt(0)
  //     ) : (
  //       <CustomIcon
  //         onClick={toggleDrawer}
  //         icon='bars'
  //         color='white'
  //         size='xs'
  //       />
  //     )}
  //   </CustomAvatar>
  // );

  return (
    <div className={classes.root}>
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
    </div>
  );
};

export default NavDrawer;
