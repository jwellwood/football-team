import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllPlayers } from 'reduxStore/squad/squad_actions';
import { getAllResults } from 'reduxStore/result/result_actions';
import { showMessage } from 'reduxStore/app/message_actions';
import { IPlayer, IResult } from 'shared/types';
import Spinner from 'lib/components/loading/Spinner';
import SquadStats from '../components/SquadStats.component';

export default () => {
  const dispatch = useDispatch();
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [results, setResults] = useState<IResult[]>([]);
  useEffect(() => {
    dispatch(getAllPlayers()).then((res) => {
      const { success, message, type, data } = res.payload;
      if (!success) {
        dispatch(showMessage(true, message, type));
      }
      setPlayers(data);
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllResults()).then((res) => {
      const { success, message, type, data } = res.payload;
      if (!success) {
        dispatch(showMessage(true, message, type));
      }
      setResults(data);
    });
  }, [dispatch]);

  const resultsWithoutForfeits: IResult[] = results.filter(
    (result) => !result.isForfeit
  );
  return players ? (
    <SquadStats players={players} results={resultsWithoutForfeits} />
  ) : (
    <Spinner />
  );
};
