import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, deleteUser } from 'reduxStore/auth/auth_actions';
import { onInputChange, onFormSubmit } from 'shared/utils/form-controls';
import { IUserData } from 'shared/types';
import { visitor_routes } from 'router';
import DeleteAccount from '../components/DeleteAccount.component';

export interface IDeleteForm {
  name: string;
}

const DeleteFormState = {
  name: '',
};

export default () => {
  const user: IUserData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
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
