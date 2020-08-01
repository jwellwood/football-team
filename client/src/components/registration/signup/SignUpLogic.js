import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Functions
import { signUp } from 'reduxStore/auth/auth_actions';
import { onInputChange, onFormSubmit } from 'components/utils/form-controls';
// Routes
import { user_routes } from 'router';
// Components
import SignUpForm from './SignUpForm';

const SignUpLogic = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState({});
  const [loading, setLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const onChange = (e) => onInputChange(e, input, setInput);
  const onAcceptTermsToggle = (e) => {
    setAcceptTerms(!acceptTerms);
  };
  const dataToSubmit = { ...input };
  const onSubmit = () =>
    onFormSubmit(setLoading, dispatch(signUp(dataToSubmit)), dispatch, () =>
      history.push(user_routes.PROFILE)
    );

  const disabled = !acceptTerms;

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

export default SignUpLogic;
