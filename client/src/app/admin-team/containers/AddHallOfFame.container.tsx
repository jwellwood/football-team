import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addHallOfFamer, getTeam } from 'reduxStore/team/team_actions';
import { onInputChange, onFormSubmit } from 'shared/utils/form-controls';
import { admin_routes } from 'router';
import HOFForm from '../components/HallOfFameForm';
import { ITeam, IHallOfFame } from 'shared/types';
import { $initHOFFormState } from '../shared/state';

export default () => {
  const team: ITeam = useSelector((state) => state.team.teamData);
  let history = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState<IHallOfFame>({ ...$initHOFFormState });
  const [loading, setLoading] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);
  const dataToSubmit: IHallOfFame = { ...input, id: team._id };
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
