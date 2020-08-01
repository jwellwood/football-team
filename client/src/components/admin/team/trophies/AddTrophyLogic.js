import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Functions
import { addNewTrophy, getTeam } from 'reduxStore/team/team_actions';
import {
  onInputChange,
  onInputCheck,
  onFormSubmit,
} from 'components/utils/form-controls';
// Routes
import { admin_routes } from 'router';
// Internal
import AddTrophyForm from './AddTrophyForm';

const AddTrophyLogic = () => {
  const team = useSelector((state) => state.team.teamData);
  let history = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState({});
  const [loading, setLoading] = useState(false);

  const onChange = (e) => onInputChange(e, input, setInput);
  const onCheck = (e) => onInputCheck(e, input, setInput);
  const dataToSubmit = { ...input, id: team._id };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(addNewTrophy(dataToSubmit)),
      dispatch,
      () => {
        dispatch(getTeam());
        history.push(admin_routes.ADMIN_TROPHIES);
      }
    );

  return (
    <AddTrophyForm
      loading={loading}
      input={input}
      onSubmit={onSubmit}
      onChange={onChange}
      onCheck={onCheck}
      team={team}
    />
  );
};

export default AddTrophyLogic;
