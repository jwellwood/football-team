import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from 'reduxStore/auth';
import { onInputChange, onFormSubmit } from 'utils/form-controls';
import { user_routes } from 'router';
import SignInForm from '../components/SignIn.component';
import { AppDispatch } from 'reduxStore/rootReducer';

interface ISignInForm {
  email: string;
  password: string;
}

export const SignInState = {
  email: '',
  password: '',
};

export default () => {
  let history = useHistory();
  const dispatch: AppDispatch = useDispatch();
  const [input, setInput] = useState<ISignInForm>({ ...SignInState });
  const [loading, setLoading] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);
  const dataToSubmit: ISignInForm = { ...input };
  const onSubmit = () =>
    onFormSubmit(setLoading, dispatch(signIn(dataToSubmit)), dispatch, () =>
      history.push(user_routes.PROFILE)
    );

  return (
    <SignInForm loading={loading} onChange={onChange} onSubmit={onSubmit} />
  );
};
