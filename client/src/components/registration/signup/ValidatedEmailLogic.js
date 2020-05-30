import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Functions
import { verifyEmail } from 'reduxStore/auth/auth_actions';
import { onFormSubmit } from 'components/utils/form-controls';
// Routes
import { SIGN_IN } from 'router/route_names';
// Components
import ValidatedEmail from './ValidatedEmail';

const ValidatedEmailLogic = () => {
  const { token } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const dataToSubmit = { token: token };
  const onClick = () =>
    onFormSubmit(
      setLoading,
      dispatch(verifyEmail(dataToSubmit)),
      dispatch,
      () => history.push(SIGN_IN)
    );

  return <ValidatedEmail onClick={onClick} loading={loading} />;
};

export default ValidatedEmailLogic;
