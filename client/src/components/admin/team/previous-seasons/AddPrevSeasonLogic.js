import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Functions
import { addPreviousSeason } from 'reduxStore/team/team_actions';
import {
  onInputChange,
  onInputCheck,
  onFormSubmit,
} from 'components/utils/form-controls';
// Routes
import { ADMIN_PREVIOUS_SEASON } from 'router/route_names';
// Components
import PrevSeasonForm from './PrevSeasonForm';

const AddPrevSeasonLogic = () => {
  const team = useSelector((state) => state.team.teamData);
  const teamId = team._id;
  const dispatch = useDispatch();
  let history = useHistory();
  const [input, setInput] = useState({});
  const [loading, setLoading] = useState(false);

  const onChange = (e) => onInputChange(e, input, setInput);
  const onCheck = (e) => onInputCheck(e, input, setInput);
  const dataToSubmit = { team: teamId, ...input };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(addPreviousSeason(dataToSubmit)),
      dispatch,
      () => history.push(ADMIN_PREVIOUS_SEASON)
    );

  return (
    <PrevSeasonForm
      input={input}
      loading={loading}
      onSubmit={onSubmit}
      onChange={onChange}
      onCheck={onCheck}
    />
  );
};

export default AddPrevSeasonLogic;
