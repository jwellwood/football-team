// Nav links, open state of drawer, logout function
// ------------------------------------------------------
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showMessage } from 'reduxStore/app/message_actions';
import { getAuth, signOut } from 'reduxStore/auth/auth_actions';
import { HOME } from 'router/route_names';
import NavDrawer from './NavDrawer';

const NavDrawerLogic = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  // State
  const authState = useSelector((state) => state.auth);
  const auth = authState.isAuth;
  const admin = authState.isAdmin;
  const user = authState.userData;
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(!open);
  };

  const onLogout = () => {
    dispatch(signOut()).then((res) => {
      const { success, message, type } = res.payload;
      if (success) {
        dispatch(showMessage(true, message, type));
        setOpen(false);
        dispatch(getAuth()); // To reset the auth status
        history.push(HOME);
      } else {
        dispatch(showMessage(true, message, type));
      }
    });
  };

  return (
    <NavDrawer
      user={user}
      auth={auth}
      admin={admin}
      toggleDrawer={toggleDrawer}
      open={open}
      onLogout={onLogout}
    />
  );
};

export default NavDrawerLogic;
