import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllPlayers } from 'reduxStore/squad/squad_actions';
import { showMessage } from 'reduxStore/app/message_actions';
import { useDispatch } from 'react-redux';
import Spinner from 'components/ui/loading/Spinner';
// Components
import PlayerStats from './PlayerStats';

const PlayerStatsLogic = () => {
  const dispatch = useDispatch();
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    dispatch(getAllPlayers()).then((res) => {
      const { success, message, type, data } = res.payload;
      if (!success) {
        dispatch(showMessage(true, message, type));
      }
      setPlayers(data);
    });
  }, [dispatch]);
  const allResults = useSelector((state) => state.result.data) || [];
  const results = allResults.filter((result) => !result.isForfeit);
  return players ? (
    <PlayerStats players={players} results={results} />
  ) : (
    <Spinner />
  );
};

export default PlayerStatsLogic;
