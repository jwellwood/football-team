import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// Functions
import { useDispatch, useSelector } from 'react-redux';
import { updateHallOfFamer, getTeam } from 'reduxStore/team/team_actions';
import { onInputChange, onFormSubmit } from 'components/utils/form-controls';
// Routes
import { ADMIN_HOF } from 'router/route_names';
// Internal
import HOFForm from './HOFForm';

const EditHOFLogic = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const team = useSelector((state) => state.team.teamData);
  const [hallOfFamer] = team.hallOfFame.filter((hof) => hof._id === id);
  const { name, yearInducted, yearJoined, yearLeft, description } = hallOfFamer;
  const [input, setInput] = useState({
    name,
    yearInducted,
    yearJoined,
    yearLeft,
    description,
  });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => onInputChange(e, input, setInput);
  const dataToSubmit = { ...input, team_id: team._id };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(updateHallOfFamer(dataToSubmit, id)),
      dispatch,
      () => {
        dispatch(getTeam());
        history.push(ADMIN_HOF);
      }
    );

  const disabled =
    name === input.name &&
    +yearInducted === +input.yearInducted &&
    +yearJoined === +input.yearJoined &&
    +yearLeft === +input.yearLeft &&
    description === input.description;

  return (
    <HOFForm
      loading={loading}
      input={input}
      onSubmit={onSubmit}
      onChange={onChange}
      hof={hallOfFamer}
      disabled={disabled}
    />
  );
};

export default EditHOFLogic;
