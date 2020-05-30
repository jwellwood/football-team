import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Functions
import { getTeam, updateTeamDetails } from 'reduxStore/team/team_actions';
import { onInputChange, onFormSubmit } from 'components/utils/form-controls';
// Routes
import { ADMIN } from 'router/route_names';
// Internal
import EditTeamDetailsForm from './EditTeamDetailsForm';

const EditTeamDetailsLogic = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const team = useSelector((state) => state.team.teamData);
  const { name, location, position, league } = team;
  const [input, setInput] = useState({ name, location, position, league });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => onInputChange(e, input, setInput);
  const dataToSubmit = { ...input, id: team._id };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(updateTeamDetails(dataToSubmit)),
      dispatch,
      () => {
        dispatch(getTeam());
        history.push(ADMIN);
      }
    );

  return (
    <EditTeamDetailsForm
      loading={loading}
      input={input}
      onSubmit={onSubmit}
      onChange={onChange}
      team={team}
    />
  );
};

export default EditTeamDetailsLogic;
