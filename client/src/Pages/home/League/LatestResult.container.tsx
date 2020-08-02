import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IResult, IResultState } from 'shared/types';
import { getLatestResult } from 'reduxStore/result/result_actions';
import { showMessage } from 'reduxStore/app/message_actions';
import Spinner from 'components/ui/loading/Spinner';
import LatestResult from './LatestResult.component';

export default () => {
  const dispatch = useDispatch();
  const [result, setResult] = useState<IResult>({ ...IResultState });

  useEffect(() => {
    dispatch(getLatestResult()).then((res) => {
      const { success, message, type, data } = res.payload;
      if (!success) {
        dispatch(showMessage(true, message, type));
      }
      setResult(data);
    });
  }, [dispatch]);

  const {
    date,
    teamGoals,
    opponentGoals,
    opponentName,
    isForfeit,
    points,
  } = result;

  return result ? (
    <LatestResult
      date={date}
      teamGoals={teamGoals}
      opponentGoals={opponentGoals}
      opponentName={opponentName}
      isForfeit={isForfeit}
      points={points}
    />
  ) : (
    <Spinner />
  );
};
