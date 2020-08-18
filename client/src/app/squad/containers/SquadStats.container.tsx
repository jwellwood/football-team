import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllPlayers } from 'reduxStore/squad';
import { getAllResults } from 'reduxStore/results';
import { showAlert } from 'reduxStore/alert';
import { IPlayer, IResult } from 'shared/types';
import { Spinner } from 'components/loaders';
import SquadStats from '../components/SquadStats.component';
import { AppDispatch } from 'reduxStore/rootReducer';

export default () => {
  const dispatch: AppDispatch = useDispatch();
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [results, setResults] = useState<IResult[]>([]);
  useEffect(() => {
    dispatch(getAllPlayers()).then((res: any) => {
      const { success, message, type, data } = res.payload;
      if (!success) {
        dispatch(showAlert(true, message, type));
      }
      setPlayers(data);
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllResults()).then((res: any) => {
      const { success, message, type, data } = res.payload;
      if (!success) {
        dispatch(showAlert(true, message, type));
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
