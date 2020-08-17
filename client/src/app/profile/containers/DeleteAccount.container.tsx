import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, deleteUser } from 'reduxStore/auth';
import { onInputChange, onFormSubmit } from 'utils/form-controls';
import { IUserData } from 'shared/types';
import { visitor_routes } from 'router';
import DeleteAccount from '../components/DeleteAccount.component';
import { AppDispatch } from 'reduxStore/rootReducer';

export interface IDeleteForm {
  name: string;
}

const DeleteFormState = {
  name: '',
};

export interface IAuthState {
  auth: any;
}

export default () => {
  const user: IUserData = useSelector(
    (state: IAuthState) => state.auth.userData
  );
  const dispatch: AppDispatch = useDispatch();
  const history = useHistory();
  // State
  const [input, setInput] = useState<IDeleteForm>({ ...DeleteFormState });
  const [loading, setLoading] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);

  const onSubmit = () =>
    onFormSubmit(setLoading, dispatch(deleteUser(user.id)), dispatch, () => {
      dispatch(getAuth());
      history.push(visitor_routes.HOME);
    });

  return (
    <DeleteAccount
      loading={loading}
      user={user}
      input={input}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};
