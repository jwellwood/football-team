import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllResults } from 'reduxStore/result/result_actions';
import { showMessage } from 'reduxStore/app/message_actions';
import { getPlayerById } from 'reduxStore/squad/squad_actions';
import { IResult } from 'shared/types';
import { IPlayer } from 'shared/types';
import Spinner from 'lib/components/loading/Spinner';
import Player from '../components/Player.component';

export default () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // State
  const [player, setPlayer] = useState<IPlayer>(null);
  const [results, setResults] = useState<IResult[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    dispatch(getAllResults()).then((res) => {
      const { success, message, type, data } = res.payload;
      if (!success) {
        dispatch(showMessage(true, message, type));
      }
      setResults(data);
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPlayerById(id)).then((res) => {
      const { success, data, message, type } = res.payload;
      if (success) {
        setPlayer(data);
      } else {
        dispatch(showMessage(true, message, type));
      }
      setLoading(false);
    });
  }, [dispatch, id]);

  const resultsWithoutForfeits: IResult[] = results.filter(
    (res) => !res.isForfeit
  );

  return !loading && player && results ? (
    <Player player={player} results={resultsWithoutForfeits} />
  ) : (
    <Spinner />
  );
};
