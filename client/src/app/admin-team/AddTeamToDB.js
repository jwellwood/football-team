import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Functions
import { getTeam, addTeam } from 'reduxStore/team/team_actions';
import { onInputChange, onFormSubmit } from 'shared/utils/form-controls';
// Routes
import { admin_routes } from 'router';
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

export default AddTeamToDB;
