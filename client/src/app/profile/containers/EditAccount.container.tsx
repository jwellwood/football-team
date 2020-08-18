import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserAccount } from 'reduxStore/auth';
import { onInputChange, onFormSubmit } from 'utils/form-controls';
import { IUserData } from 'shared/types';
import { user_routes } from 'router';
import { AppDispatch } from 'reduxStore/rootReducer';
import EditAccount from '../forms/EditAccount.component';

export interface IEditAccountForm {
  email: string;
}

export interface IAuthState {
  auth: any;
}
export default () => {
  const user: IUserData = useSelector((state: IAuthState) => state.auth.user);
  const dispatch: AppDispatch = useDispatch();
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
