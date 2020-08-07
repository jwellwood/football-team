import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUsers } from 'reduxStore/user/user_admin_actions';
import { showMessage } from 'reduxStore/app/message_actions';
import AdminUsers from '../components/AdminUsers.component';
import { IUserData } from 'shared/types';

export default () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState<IUserData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getAllUsers()).then((res) => {
      const { success, message, type } = res.payload;
      if (success) {
        setUsers(res.payload.data);
      } else {
        dispatch(showMessage(true, message, type));
      }
      setLoading(false);
    });
  }, [dispatch, loading]);

  return <AdminUsers loading={loading} users={users} />;
};
