import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTrophy, getTeam } from 'reduxStore/team';
import { onInputChange, onInputCheck, onFormSubmit } from 'utils/form-controls';
import { admin_routes } from 'router';
import AddTrophyForm from '../components/AddTrophyForm';
import { ITeam, ITrophy } from 'shared/types';
import { $initTrophyFormState } from '../shared/state';
import { RootState, AppDispatch } from 'reduxStore/rootReducer';

export default () => {
  const team: ITeam = useSelector((state: RootState) => state.team.teamData);
  let history = useHistory();
  const dispatch: AppDispatch = useDispatch();
  const [input, setInput] = useState<ITrophy>({ ...$initTrophyFormState });
  const [loading, setLoading] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);
  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputCheck(e, input, setInput);
  const dataToSubmit: ITrophy = { ...input, id: team._id };
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
    />
  );
};
