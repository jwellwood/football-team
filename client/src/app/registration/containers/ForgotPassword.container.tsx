import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { forgotPassword } from 'reduxStore/auth/auth_actions';
import { showMessage } from 'reduxStore/app/message_actions';
import { onInputChange } from 'shared/utils/form-controls';
import { reg_routes } from 'router';
import ForgotPassword from '../components/ForgotPassword.component';

interface IForgotPasswordForm {
  email: string;
}

const ForgotPasswordState = {
  email: '',
};

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);
  const [input, setInput] = useState<IForgotPasswordForm>({
    ...ForgotPasswordState,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);

  const onSubmit = () => {
    setLoading(true);
    const dataToSubmit: IForgotPasswordForm = { ...input };
    dispatch(forgotPassword(dataToSubmit)).then(() => {
      dispatch(
        showMessage(
          true,
          'Password reset email sent. Check your email and follow the instructions',
          'success'
        )
      );
      history.push(reg_routes.SIGN_IN);
    });
    setLoading(false);
  };

  return (
    <ForgotPassword loading={loading} onChange={onChange} onSubmit={onSubmit} />
  );
};
