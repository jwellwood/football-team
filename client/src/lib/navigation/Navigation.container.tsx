import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showMessage } from 'reduxStore/app/message_actions';
import { getAuth, signOut } from 'reduxStore/auth/auth_actions';
import { visitor_routes } from 'router';
import NavDrawer from './NavDrawer';
import { IUserData } from 'shared/types';

interface IAuthState {
  isAuth: boolean;
  isAdmin: boolean;
  userData: IUserData;
}

export default (): React.ReactElement => {
  const dispatch = useDispatch();
  let history = useHistory();
  // State
  const authState: IAuthState = useSelector((state) => state.auth);
  const auth: boolean = authState.isAuth;
  const admin: boolean = authState.isAdmin;
  const user: IUserData = authState.userData;
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
      user={user}
      auth={auth}
      admin={admin}
      toggleDrawer={toggleDrawer}
      open={open}
      onLogout={onLogout}
    />
  );
};
