import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  getPreviousSeasonById,
  updatePreviousSeason,
} from 'reduxStore/team/team_actions';
import { showMessage } from 'reduxStore/app/message_actions';
import { onInputChange, onFormSubmit } from 'shared/utils/form-controls';
import { admin_routes } from 'router';
import Spinner from 'lib/components/loading/Spinner';
import PrevSeasonForm from '../components/PreviousSeasonForm';
import { IPreviousSeason } from 'shared/types';
import { $initPreviousSeasonFormState } from '../shared/state';

export default () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [season, setSeason] = useState<IPreviousSeason>({
    ...$initPreviousSeasonFormState,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [input, setInput] = useState<IPreviousSeason>({
    ...$initPreviousSeasonFormState,
  });

  useEffect(() => {
    dispatch(getPreviousSeasonById(id)).then((res) => {
      const { success, data, message, type } = res.payload;
      if (success) {
        setSeason(data);
        setLoading(false);
      } else {
        dispatch(showMessage(true, message, type));
      }
      setLoading(false);
    });
  }, [dispatch, id]);

  useEffect(() => {
    if (season) {
      const initState = {
        seasonName: season.seasonName,
        year: season.year,
        finalPosition: season.finalPosition,
        win: season.win,
        draw: season.draw,
        lose: season.lose,
        goalsFor: season.goalsFor,
        goalsAgainst: season.goalsAgainst,
      };
      setInput({ ...initState });
    }
  }, [season]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);
  const dataToSubmit: IPreviousSeason = { ...input };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(updatePreviousSeason(dataToSubmit, id)),
      dispatch,
      () => history.push(admin_routes.ADMIN_PREVIOUS_SEASON)
    );

  return !loading ? (
    <PrevSeasonForm
      loading={loading}
      onChange={onChange}
      onSubmit={onSubmit}
      input={input}
      season={season}
    />
  ) : (
    <Spinner />
  );
};
