import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { verifyEmail } from 'reduxStore/auth';
import { onFormSubmit } from 'utils/form-controls';
import { reg_routes } from 'router';
import ValidatedEmail from '../components/ValidatedEmail.component';
import { AppDispatch } from 'reduxStore/rootReducer';

export default () => {
  const { token } = useParams();
  const history = useHistory();
  const dispatch: AppDispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const dataToSubmit: string = token;
  const onClick = () =>
    onFormSubmit(
      setLoading,
      dispatch(verifyEmail(dataToSubmit)),
      dispatch,
      () => history.push(reg_routes.SIGN_IN)
    );

  return <ValidatedEmail onClick={onClick} loading={loading} />;
};
