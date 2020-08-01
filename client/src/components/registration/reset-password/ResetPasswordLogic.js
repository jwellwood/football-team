import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Functions
import { resetPassword } from 'reduxStore/auth/auth_actions';
// Routes
import { reg_routes } from 'router';
// Components
import ResetPasswordForm from './ResetPasswordForm';
import { onInputChange, onFormSubmit } from 'components/utils/form-controls';

const ResetPasswordLogic = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({});

  const onChange = (e) => onInputChange(e, input, setInput);
  const dataToSubmit = { ...input, token: token };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(resetPassword(dataToSubmit)),
      dispatch,
      () => history.push(reg_routes.SIGN_IN)
    );

  return (
    <ResetPasswordForm
      loading={loading}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default ResetPasswordLogic;
