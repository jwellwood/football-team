import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Functions
import { updateUserAccount } from 'reduxStore/auth/auth_actions';
import { onInputChange, onFormSubmit } from 'components/utils/form-controls';
// Routes
import { user_routes } from 'router';
// Components
import EditAccountForm from './EditAccountForm';

const EditAccountLogic = () => {
  const user = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const history = useHistory();
  // State
  const [input, setInput] = useState({ email: user.email });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => onInputChange(e, input, setInput);
  const dataToSubmit = { ...input };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(updateUserAccount(dataToSubmit)),
      dispatch,
      () => history.push(user_routes.PROFILE)
    );

  return (
    <EditAccountForm
      onChange={onChange}
      onSubmit={onSubmit}
      loading={loading}
      input={input}
      user={user}
    />
  );
};

export default EditAccountLogic;
