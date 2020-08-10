import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showMessage } from 'reduxStore/app/message_actions';
import { getAuth, signOut } from 'reduxStore/auth/auth_actions';
import { visitor_routes } from 'router';
import NavDrawer from './NavDrawer';
import { RootState } from 'reduxStore/rootReducer';

export default (): React.ReactElement => {
  const dispatch = useDispatch();
  let history = useHistory();
  // State
  const { isAuth, isAdmin, userData } = useSelector(
    (state: RootState) => state.auth
  );
  const [open, setOpen] = React.useState<boolean>(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const onLogout = () => {
    dispatch(signOut()).then((res) => {
      const { success, message, type } = res.payload;
      if (success) {
        dispatch(showMessage(true, message, type));
        setOpen(false);
        dispatch(getAuth()); // To reset the auth status
        history.push(visitor_routes.HOME);
      } else {
        dispatch(showMessage(true, message, type));
      }
    });
  };

  return (
    <NavDrawer
      user={userData}
      auth={isAuth}
      admin={isAdmin}
      toggleDrawer={toggleDrawer}
      open={open}
      onLogout={onLogout}
    />
  );
};
