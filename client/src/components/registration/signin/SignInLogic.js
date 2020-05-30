import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// functions
import { signIn } from 'reduxStore/auth/auth_actions';
import { onInputChange, onFormSubmit } from 'components/utils/form-controls';
// Routes
import { PROFILE } from 'router/route_names';
// Internal
import SignInForm from './SignInForm';

const SignInLogic = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState({});
  const [loading, setLoading] = useState(false);

  const onChange = (e) => onInputChange(e, input, setInput);
  const dataToSubmit = { ...input };
  const onSubmit = () =>
    onFormSubmit(setLoading, dispatch(signIn(dataToSubmit)), dispatch, () =>
      history.push(PROFILE)
    );

  const disabled = !input.email || !input.password;

  return (
    <SignInForm
      loading={loading}
      onChange={onChange}
      onSubmit={onSubmit}
      disabled={disabled}
    />
  );
};

export default SignInLogic;
