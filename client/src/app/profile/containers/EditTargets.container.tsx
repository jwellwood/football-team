import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updatePlayerTargets } from 'reduxStore/user';
import { user_routes } from 'router';
import { onInputChange, onFormSubmit } from 'utils/form-controls';
import { IUserData } from 'shared/types';
import EditTargets from '../components/EditTargets.component';
import { AppDispatch } from 'reduxStore/rootReducer';

export interface IEditTargetForm {
  appsTarget: number;
  goalsTarget: number;
  assistsTarget: number;
}

export interface IAuthState {
  auth: any;
}

export default () => {
  const user: IUserData = useSelector(
    (state: IAuthState) => state.auth.userData
  );
  const { appsTarget, goalsTarget, assistsTarget } = user;
  const dispatch: AppDispatch = useDispatch();
  const history = useHistory();
  // State
  const initState: IEditTargetForm = { appsTarget, goalsTarget, assistsTarget };
  const [input, setInput] = useState<IEditTargetForm>({ ...initState });
  const [loading, setLoading] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);
  const dataToSubmit: IEditTargetForm = { ...input };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(updatePlayerTargets(dataToSubmit)),
      dispatch,
      () => history.push(user_routes.PROFILE)
    );

  return (
    <EditTargets
      onChange={onChange}
      onSubmit={onSubmit}
      loading={loading}
      input={input}
      user={user}
    />
  );
};
