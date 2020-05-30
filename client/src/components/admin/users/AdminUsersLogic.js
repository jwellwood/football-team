import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Functions
import { getAllUsers } from 'reduxStore/user/user_admin_actions';
import { showMessage } from 'reduxStore/app/message_actions';
// Components
import AdminUsersTable from './AdminUsersTable';

const AdminUsersLogic = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.userData);
  // State
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <AdminUsersTable
      loading={loading}
      users={users}
      currentUser={currentUser}
    />
  );
};

export default AdminUsersLogic;
