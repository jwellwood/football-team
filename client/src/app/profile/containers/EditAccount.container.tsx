import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserAccount } from 'reduxStore/auth/auth_actions';
import { onInputChange, onFormSubmit } from 'shared/utils/form-controls';
import { IUserData } from 'shared/types';
import { user_routes } from 'router';
import EditAccount from '../components/EditAccount.component';

export interface IEditAccountForm {
  email: string;
}

export default () => {
  const user: IUserData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const history = useHistory();
  // State
  const [input, setInput] = useState<IEditAccountForm>({ email: user.email });
  const [loading, setLoading] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);
  const dataToSubmit: IEditAccountForm = { ...input };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(updateUserAccount(dataToSubmit)),
      dispatch,
      () => history.push(user_routes.PROFILE)
    );

  return (
    <EditAccount
      onChange={onChange}
      onSubmit={onSubmit}
      loading={loading}
      input={input}
      user={user}
    />
  );
};
