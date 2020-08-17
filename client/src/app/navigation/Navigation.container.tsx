import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showAlert } from 'reduxStore/alert';
import { getAuth, signOut } from 'reduxStore/auth';
import { visitor_routes } from 'router';
import NavDrawer from './NavDrawer';
import { RootState, AppDispatch } from 'reduxStore/rootReducer';

export default (): React.ReactElement => {
  const dispatch: AppDispatch = useDispatch();
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
    dispatch(signOut()).then((res: any) => {
      const { success, message, type } = res.payload;
      if (success) {
        dispatch(showAlert(true, message, type));
        setOpen(false);
        dispatch(getAuth()); // To reset the auth status
        history.push(visitor_routes.HOME);
      } else {
        dispatch(showAlert(true, message, type));
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
