import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Functions
import {
  getPreviousSeasonById,
  updatePreviousSeason,
} from 'reduxStore/team/team_actions';
import { showMessage } from 'reduxStore/app/message_actions';
import { onInputChange, onFormSubmit } from 'components/utils/form-controls';
// Routes
import { ADMIN_PREVIOUS_SEASON } from 'router/route_names';
// Components
import Spinner from 'components/ui/loading/Spinner';
import PrevSeasonForm from './PrevSeasonForm';

const EditPrevSeasonLogic = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [season, setSeason] = useState({});
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState({});

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

  const onChange = (e) => onInputChange(e, input, setInput);
  const dataToSubmit = { ...input };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(updatePreviousSeason(dataToSubmit, id)),
      dispatch,
      () => history.push(ADMIN_PREVIOUS_SEASON)
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

export default EditPrevSeasonLogic;
