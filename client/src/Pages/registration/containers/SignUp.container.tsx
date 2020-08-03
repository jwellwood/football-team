import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from 'reduxStore/auth/auth_actions';
import { user_routes } from 'router';
import { onInputChange, onFormSubmit } from 'shared/utils/form-controls';
import SignUpForm from '../components/SignUp.component';

export interface ISignUpForm {
  name: string;
  email: string;
  password: string;
}

export const SignUpState = {
  name: '',
  email: '',
  password: '',
};

export default () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState<ISignUpForm>({ ...SignUpState });
  const [loading, setLoading] = useState<boolean>(false);
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);
  const onAcceptTermsToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTerms(!acceptTerms);
  };
  const dataToSubmit: ISignUpForm = { ...input };
  const onSubmit = () =>
    onFormSubmit(setLoading, dispatch(signUp(dataToSubmit)), dispatch, () =>
      history.push(user_routes.PROFILE)
    );

  const disabled: boolean = !acceptTerms;

  return (
    <SignUpForm
      onChange={onChange}
      onSubmit={onSubmit}
      loading={loading}
      disabled={disabled}
      onAcceptTermsToggle={onAcceptTermsToggle}
      acceptTerms={acceptTerms}
    />
  );
};
