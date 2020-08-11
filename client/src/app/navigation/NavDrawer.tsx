import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import NavDrawerList from './NawDrawerList';
import CustomIcon from 'lib/icons/CustomIcon';
import { IUserData } from 'shared/types';

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

interface Props {
  user: IUserData;
  auth: boolean;
  toggleDrawer: () => void;
  open: boolean;
  onLogout: () => void;
  admin: boolean;
}

const NavDrawer: React.FC<Props> = ({
  user,
  auth,
  toggleDrawer,
  open,
  onLogout,
  admin,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
