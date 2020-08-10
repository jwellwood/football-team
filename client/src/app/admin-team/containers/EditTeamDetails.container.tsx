import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTeam, updateTeamDetails } from 'reduxStore/team/team_actions';
import { onInputChange, onFormSubmit } from 'utils/form-controls';
import { admin_routes } from 'router';
import EditTeamDetailsForm from '../components/EditTeamDetailsForm';
import { ITeam } from 'shared/types';
import { RootState } from 'reduxStore/rootReducer';

export default () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const team: ITeam = useSelector((state: RootState) => state.team.teamData);
  const { name, location, position, league } = team;
  const [input, setInput] = useState({
    name,
    location,
    position,
    league,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);
  const dataToSubmit: ITeam = { ...input, id: team._id };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(updateTeamDetails(dataToSubmit)),
      dispatch,
      () => {
        dispatch(getTeam());
        history.push(admin_routes.ADMIN);
      }
    );

  return (
    <EditTeamDetailsForm
      loading={loading}
      input={input}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};
