import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { verifyEmail } from 'reduxStore/auth/auth_actions';
import { onFormSubmit } from 'utils/form-controls';
import { reg_routes } from 'router';
import ValidatedEmail from '../components/ValidatedEmail.component';

interface IValidatedEmail {
  token: string;
}

export default () => {
  const { token } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const dataToSubmit: IValidatedEmail = { token: token };
  const onClick = () =>
    onFormSubmit(
      setLoading,
      dispatch(verifyEmail(dataToSubmit)),
      dispatch,
      () => history.push(reg_routes.SIGN_IN)
    );

  return <ValidatedEmail onClick={onClick} loading={loading} />;
};
