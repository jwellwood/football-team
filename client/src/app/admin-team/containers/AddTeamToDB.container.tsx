import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getTeam, addTeam } from 'reduxStore/team/team_actions';
import { onInputChange, onFormSubmit } from 'shared/utils/form-controls';
import { admin_routes } from 'router';
import EditTeamDetailsForm from '../components/EditTeamDetailsForm';
import { ITeam } from 'shared/types';

export default () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState<ITeam>();
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
