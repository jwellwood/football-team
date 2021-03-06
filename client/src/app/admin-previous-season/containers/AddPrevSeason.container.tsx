import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addPreviousSeason } from 'reduxStore/season';
import { onInputChange, onFormSubmit } from 'utils/form-controls';
import { admin_routes } from 'router';
import PrevSeasonForm from '../forms/PreviousSeasonForm';
import { IPreviousSeason } from 'shared/types';
import { $initPreviousSeasonFormState } from '../shared/state';
import { RootState, AppDispatch } from 'reduxStore/rootReducer';

export default () => {
  const team = useSelector((state: RootState) => state.team.data);
  const teamId: string = team._id;
  const dispatch: AppDispatch = useDispatch();
  let history = useHistory();
  const [input, setInput] = useState<IPreviousSeason>({
    ...$initPreviousSeasonFormState,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);

  const dataToSubmit: IPreviousSeason = { team: teamId, ...input };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(addPreviousSeason(dataToSubmit)),
      dispatch,
      () => history.push(admin_routes.ADMIN_PREVIOUS_SEASON)
    );

  return (
    <PrevSeasonForm
      input={input}
      loading={loading}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};
