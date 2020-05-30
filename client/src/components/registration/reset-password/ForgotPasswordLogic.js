import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Functions
import { forgotPassword } from 'reduxStore/auth/auth_actions';
import { showMessage } from 'reduxStore/app/message_actions';
import { onInputChange } from 'components/utils/form-controls';
// Routes
import { SIGN_IN } from 'router/route_names';
// Components
import ForgotPasswordForm from './ForgotPasswordForm';

const ForgotPasswordLogic = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({});

  const onChange = (e) => onInputChange(e, input, setInput);

  const onSubmit = () => {
    setLoading(true);
    const dataToSubmit = { ...input };
    dispatch(forgotPassword(dataToSubmit)).then(() => {
      dispatch(
        showMessage(
          true,
          'Password reset email sent. Check your email and follow the instructions',
          'success'
        )
      );
      history.push(SIGN_IN);
    });
    setLoading(false);
  };

  return (
    <ForgotPasswordForm
      loading={loading}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default ForgotPasswordLogic;
