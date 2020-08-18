import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updatePlayerDetails } from 'reduxStore/user';
import { user_routes } from 'router';
import { onInputChange, onFormSubmit } from 'utils/form-controls';
import { IUserData } from 'shared/types';
import { AppDispatch } from 'reduxStore/rootReducer';
import EditPlayer from '../forms/EditPlayer.component';

export interface IEditPlayerForm {
  name: string;
  squadNumber: number;
  position: string;
  yearJoined: string;
  description: string;
}

export interface IAuthState {
  auth: any;
}

export default () => {
  const user: IUserData = useSelector((state: IAuthState) => state.auth.user);
  const { name, position, squadNumber, yearJoined, description } = user;
  const dispatch: AppDispatch = useDispatch();
  const history = useHistory();
  const [input, setInput] = useState<IEditPlayerForm>({
    name,
    squadNumber,
    position,
    yearJoined,
    description,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);
  const dataToSubmit: IEditPlayerForm = { ...input };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(updatePlayerDetails(dataToSubmit)),
      dispatch,
      () => history.push(user_routes.PROFILE)
    );

  const disabled: boolean =
    input.name === name &&
    +input.squadNumber === +squadNumber &&
    input.position === position &&
    input.description === description;

  return (
    <EditPlayer
      loading={loading}
      disabled={disabled}
      input={input}
      user={user}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};
