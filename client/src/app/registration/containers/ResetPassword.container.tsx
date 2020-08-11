import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetPassword } from 'reduxStore/auth/auth_actions';
import { reg_routes } from 'router';
import { onInputChange, onFormSubmit } from 'utils/form-controls';
import ResetPassword from '../components/ResetPassword.component';
import { AppDispatch } from 'reduxStore/rootReducer';

interface IResetPasswordForm {
  password: string;
  token: string;
}

const ResetPasswordState = {
  password: '',
};

export default () => {
  const { token } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const history = useHistory();

  const [loading, setLoading] = useState<boolean>(false);
  const [input, setInput] = useState<IResetPasswordForm>({
    ...ResetPasswordState,
    token,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);
  const dataToSubmit: IResetPasswordForm = { ...input, token: token };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(resetPassword(dataToSubmit)),
      dispatch,
      () => history.push(reg_routes.SIGN_IN)
    );

  return (
    <ResetPassword loading={loading} onChange={onChange} onSubmit={onSubmit} />
  );
};
