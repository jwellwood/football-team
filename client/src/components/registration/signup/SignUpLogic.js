import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Functions
import { signUp } from 'reduxStore/auth/auth_actions';
import { onInputChange, onFormSubmit } from 'components/utils/form-controls';
// Routes
import { PROFILE } from 'router/route_names';
// Components
import SignUpForm from './SignUpForm';

const SignUpLogic = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState({});
  const [loading, setLoading] = useState(false);

  const onChange = (e) => onInputChange(e, input, setInput);
  const dataToSubmit = { ...input };
  const onSubmit = () =>
    onFormSubmit(setLoading, dispatch(signUp(dataToSubmit)), dispatch, () =>
      history.push(PROFILE)
    );

  const disabled = !input.name || !input.email || !input.password;

  return (
    <SignUpForm
      onChange={onChange}
      onSubmit={onSubmit}
      loading={loading}
      disabled={disabled}
    />
  );
};

export default SignUpLogic;
