import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUsers } from 'reduxStore/user';
import { showAlert } from 'reduxStore/alert';
import AdminUsers from '../components/AdminUsers.component';
import { IUserData } from 'shared/types';
import { AppDispatch } from 'reduxStore/rootReducer';

export default () => {
  const dispatch: AppDispatch = useDispatch();
  const [users, setUsers] = useState<IUserData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getAllUsers()).then((res: any) => {
      const { success, message, type } = res.payload;
      if (success) {
        setUsers(res.payload.data);
      } else {
        dispatch(showAlert(true, message, type));
      }
      setLoading(false);
    });
  }, [dispatch, loading]);

  return <AdminUsers loading={loading} users={users} />;
};
