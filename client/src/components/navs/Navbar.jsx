// Controls the hide on scroll functionality of navbar
// ------------------------------------------------------
import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
// Internal
import NavDrawerLogic from './NavDrawerLogic';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    alignItems: 'flex-end',
    background: 'rgba(0,0,0,0.5)',
  },
}));

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='up' in={!trigger}>
      {children}
    </Slide>
  );
}

const NavBar = (props) => {
  const classes = useStyles();
  return (
    <HideOnScroll {...props}>
      <AppBar position='fixed' color='transparent' className={classes.appBar}>
        <Toolbar>
          <NavDrawerLogic />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default NavBar;
