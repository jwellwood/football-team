import React, { useState, Dispatch } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updatePlayerTargets } from 'reduxStore/user/user_actions';
import { user_routes } from 'router';
import { onInputChange, onFormSubmit } from 'utils/form-controls';
import { IUserData } from 'shared/types';
import EditTargets from '../components/EditTargets.component';

export interface IEditTargetForm {
  appsTarget: number;
  goalsTarget: number;
  assistsTarget: number;
}

export default () => {
  const user: IUserData = useSelector((state) => state.auth.userData);
  const { appsTarget, goalsTarget, assistsTarget } = user;
  const dispatch: Dispatch<any> = useDispatch();
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
