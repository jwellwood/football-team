import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { forgotPassword } from 'reduxStore/auth';
import { showAlert } from 'reduxStore/alert';
import { onInputChange } from 'utils/form-controls';
import { reg_routes } from 'router';
import ForgotPassword from '../components/ForgotPassword.component';
import { AppDispatch } from 'reduxStore/rootReducer';

interface IForgotPasswordForm {
  email: string;
}

const ForgotPasswordState = {
  email: '',
};

export default () => {
  const dispatch: AppDispatch = useDispatch();
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
        showAlert(
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
