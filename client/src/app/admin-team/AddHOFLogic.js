import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Functions
import { addHallOfFamer, getTeam } from 'reduxStore/team/team_actions';
import { onInputChange, onFormSubmit } from 'shared/utils/form-controls';
// Routes
import { admin_routes } from 'router';
// Internal
import HOFForm from './HOFForm';

const AddHOFLogic = () => {
  const team = useSelector((state) => state.team.teamData);
  let history = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState({});
  const [loading, setLoading] = useState(false);

  const onChange = (e) => onInputChange(e, input, setInput);
  const dataToSubmit = { ...input, id: team._id };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(addHallOfFamer(dataToSubmit)),
      dispatch,
      () => {
        dispatch(getTeam());
        history.push(admin_routes.ADMIN_HOF);
      }
    );

  return (
    <HOFForm
      loading={loading}
      input={input}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};

export default AddHOFLogic;
