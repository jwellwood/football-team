import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllResults } from 'reduxStore/result';
import { showAlert } from 'reduxStore/alert';
import { getPlayerById } from 'reduxStore/squad';
import { IResult } from 'shared/types';
import { IPlayer } from 'shared/types';
import { Spinner } from 'components/loaders';
import Player from '../components/Player.component';
import { AppDispatch } from 'reduxStore/rootReducer';

export default () => {
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  // State
  const [player, setPlayer] = useState<IPlayer>();
  const [results, setResults] = useState<IResult[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    dispatch(getAllResults()).then((res: any) => {
      const { success, message, type, data } = res.payload;
      if (!success) {
        dispatch(showAlert(true, message, type));
      }
      setResults(data);
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPlayerById(id)).then((res: any) => {
      const { success, data, message, type } = res.payload;
      if (success) {
        setPlayer(data);
      } else {
        dispatch(showAlert(true, message, type));
      }
      setLoading(false);
    });
  }, [dispatch, id]);

  const resultsWithoutForfeits: IResult[] = results.filter(
    (res: any) => !res.isForfeit
  );

  return !loading && player && results ? (
    <Player player={player} results={resultsWithoutForfeits} />
  ) : (
    <Spinner />
  );
};
