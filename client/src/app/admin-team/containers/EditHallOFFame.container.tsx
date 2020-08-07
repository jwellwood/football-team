import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateHallOfFamer, getTeam } from 'reduxStore/team/team_actions';
import { onInputChange, onFormSubmit } from 'shared/utils/form-controls';
import { admin_routes } from 'router';
import HOFForm from '../components/HallOfFameForm';
import { ITeam, IHallOfFame } from 'shared/types';

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const team: ITeam = useSelector((state) => state.team.teamData);
  const [hallOfFamer] = team.hallOfFame.filter(
    (hof: IHallOfFame) => hof._id === id
  );
  const { name, yearInducted, yearJoined, yearLeft, description } = hallOfFamer;
  const [input, setInput] = useState({
    name,
    yearInducted,
    yearJoined,
    yearLeft,
    description,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);
  const dataToSubmit: IHallOfFame = { ...input, id: team._id };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(updateHallOfFamer(dataToSubmit, id)),
      dispatch,
      () => {
        dispatch(getTeam());
        history.push(admin_routes.ADMIN_HOF);
      }
    );

  const disabled: boolean = name === input.name;

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
