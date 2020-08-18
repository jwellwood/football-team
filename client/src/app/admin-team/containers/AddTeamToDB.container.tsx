import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getTeam, addTeam } from 'reduxStore/team';
import { onInputChange, onFormSubmit } from 'utils/form-controls';
import { admin_routes } from 'router';
import { ITeam } from 'shared/types';
import { $initAddTeamFormState } from '../shared/state';
import { AppDispatch } from 'reduxStore/rootReducer';
import EditTeamDetailsForm from '../forms/EditTeamDetailsForm';

export default () => {
  let history = useHistory();
  const dispatch: AppDispatch = useDispatch();
  const [input, setInput] = useState<ITeam>({ ...$initAddTeamFormState });
  const [loading, setLoading] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);
  const dataToSubmit: ITeam = { ...input };
  const onSubmit = () =>
    onFormSubmit(setLoading, dispatch(addTeam(dataToSubmit)), dispatch, () => {
      dispatch(getTeam());
      history.push(admin_routes.ADMIN);
    });

  return (
    <EditTeamDetailsForm
      loading={loading}
      input={input}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};
