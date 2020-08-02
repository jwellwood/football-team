// This action is currently unavailable.

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Functions
import { getAuth, deleteUser } from 'reduxStore/auth/auth_actions';
import { onInputChange, onFormSubmit } from 'shared/utils/form-controls';
// Routes
import { visitor_routes } from 'router';
// Components
import DeleteAccountForm from './DeleteAccountForm';

const DeleteAccountLogic = () => {
  const user = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const history = useHistory();
  // State
  const [input, setInput] = useState({});
  const [loading, setLoading] = useState(false);

  const onChange = (e) => onInputChange(e, input, setInput);

  const onSubmit = () =>
    onFormSubmit(setLoading, dispatch(deleteUser(user.id)), dispatch, () => {
      dispatch(getAuth());
      history.push(visitor_routes.HOME);
    });

  return (
    <DeleteAccountForm
      loading={loading}
      user={user}
      input={input}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default DeleteAccountLogic;
