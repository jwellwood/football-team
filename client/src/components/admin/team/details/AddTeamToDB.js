import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Functions
import { getTeam, addTeam } from 'reduxStore/team/team_actions';
import { onInputChange, onFormSubmit } from 'components/utils/form-controls';
// Routes
import { ADMIN } from 'router/route_names';
import EditTeamDetailsForm from './EditTeamDetailsForm';

const AddTeamToDB = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState({});
  const [loading, setLoading] = useState(false);

  const onChange = (e) => onInputChange(e, input, setInput);
  const dataToSubmit = { ...input };
  const onSubmit = () =>
    onFormSubmit(setLoading, dispatch(addTeam(dataToSubmit)), dispatch, () => {
      dispatch(getTeam());
      history.push(ADMIN);
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

export default AddTeamToDB;
