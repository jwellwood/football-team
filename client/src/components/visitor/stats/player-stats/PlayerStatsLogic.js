import React, { useState, useEffect } from 'react';
import { getAllPlayers } from 'reduxStore/squad/squad_actions';
import { getAllResults } from 'reduxStore/result/result_actions';
import { showMessage } from 'reduxStore/app/message_actions';
import { useDispatch } from 'react-redux';
import Spinner from 'components/ui/loading/Spinner';

// Components
import PlayerStats from './PlayerStats';

const PlayerStatsLogic = () => {
  const dispatch = useDispatch();
  const [players, setPlayers] = useState([]);
  const [results, setResults] = useState([]);
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

  const resultsWithoutForfeits = results.filter((result) => !result.isForfeit);
  return players ? (
    <PlayerStats players={players} results={resultsWithoutForfeits} />
  ) : (
    <Spinner />
  );
};

export default PlayerStatsLogic;
